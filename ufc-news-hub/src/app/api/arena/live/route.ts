import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import { getUsuarioAtual } from '@/lib/arena/auth';
import { scrapeUFCResults, scrapeFullCardStatus, mapMethodToDB, matchFighterName, type LiveFightStatus, type ScrapedFighterInfo } from '@/lib/scrape-results';
import { processarPrevisoesLuta } from '@/lib/arena/pontuacao';

// ═══════════════════════════════════════════════════════════════
// Auto-sync helpers: find or create fighters, map card segments
// ═══════════════════════════════════════════════════════════════

const weightClassMap: Record<string, string> = {
  Strawweight: 'Peso Palha', Flyweight: 'Peso Mosca', Bantamweight: 'Peso Galo',
  Featherweight: 'Peso Pena', Lightweight: 'Peso Leve', Welterweight: 'Peso Meio-Medio',
  Middleweight: 'Peso Medio', 'Light Heavyweight': 'Peso Meio-Pesado', Heavyweight: 'Peso Pesado',
  "Women's Strawweight": 'Peso Palha Feminino', "Women's Flyweight": 'Peso Mosca Feminino',
  "Women's Bantamweight": 'Peso Galo Feminino', "Women's Featherweight": 'Peso Pena Feminino',
};

function mapWeightClass(wc: string | null): string {
  if (!wc) return 'Peso Indefinido';
  return weightClassMap[wc] || wc;
}

function mapCardSegmentToTipo(segment: string | null, fightOrder: number): string {
  if (!segment) {
    if (fightOrder === 1) return 'main_event';
    if (fightOrder === 2) return 'co_main';
    return fightOrder <= 6 ? 'card_principal' : 'preliminar';
  }
  const s = segment.toLowerCase();
  if (s === 'main') return fightOrder === 1 ? 'main_event' : (fightOrder === 2 ? 'co_main' : 'card_principal');
  if (s === 'prelims' || s === 'preliminary') return 'preliminar';
  if (s === 'early' || s.includes('early')) return 'early_prelim';
  return 'card_principal';
}

function buildUfcSlug(nome: string): string {
  return nome.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function buildHeadshotUrl(_ufcLink: string | null): string | null {
  // DEPRECATED 2026-04-24: the static URL pattern
  // /event_results_athlete_headshot/s3/<slug>.png is unreliable — UFC serves
  // versioned paths like /s3/YYYY-MM/<SLUG>.png?itok=... New fighters are
  // created without image; /api/arena/cron/refresh-fotos scrapes the actual
  // headshot and writes imagem_url + imagem_versao.
  return null;
}

async function findOrCreateLutador(fighter: ScrapedFighterInfo, weightClass: string | null): Promise<string> {
  // Try exact match first
  const existing = await queryOne<{ id: string }>(
    `SELECT id FROM lutadores WHERE LOWER(nome) = LOWER($1)`,
    [fighter.nome]
  );
  if (existing) return existing.id;

  // Try last name match (handles "Ricky Simon" matching "Rick Simon" etc.)
  const parts = fighter.nome.split(' ');
  const lastName = parts[parts.length - 1];
  const lastNameMatch = await queryOne<{ id: string; nome: string }>(
    `SELECT id, nome FROM lutadores WHERE LOWER(nome) LIKE $1 AND LOWER(nome) LIKE $2`,
    [`%${parts[0].toLowerCase()}%`, `%${lastName.toLowerCase()}%`]
  );
  if (lastNameMatch) return lastNameMatch.id;

  // Create new fighter
  const slug = buildUfcSlug(fighter.nome);
  const categoriaPeso = mapWeightClass(weightClass);

  const result = await queryOne<{ id: string }>(
    `INSERT INTO lutadores (id, nome, apelido, categoria_peso, pais, cidade_natal, stance, vitorias, derrotas, empates, idade, ufc_slug, ativo)
     VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, true)
     RETURNING id`,
    [
      fighter.nome,
      fighter.apelido,
      categoriaPeso,
      fighter.pais,
      fighter.cidade,
      fighter.stance,
      fighter.vitorias,
      fighter.derrotas,
      fighter.empates,
      fighter.idade,
      slug,
    ]
  );

  console.info(`[live/auto-sync] Created fighter: ${fighter.nome} (${categoriaPeso})`);
  return result!.id;
}

// ═══════════════════════════════════════════════════════════════
// Background auto-scrape throttle + live round cache
// ═══════════════════════════════════════════════════════════════
const lastScrapeTime = new Map<string, number>();
const SCRAPE_INTERVAL_MS = 30_000; // 30 seconds — fast updates during live events

// Cache live round data per event (updated by background scraper, served by API)
interface LiveRoundData {
  liveRound: number | null;
  liveRoundStartTime: string | null;
  liveBetweenRounds: boolean;
}
const liveRoundCache = new Map<string, Map<string, LiveRoundData>>(); // eventoId → (fightKey → roundData)

async function backgroundScrapeIfNeeded(eventoId: string, eventoNome: string, hasUnfinishedFights: boolean) {
  if (!hasUnfinishedFights) return;

  const now = Date.now();
  const lastTime = lastScrapeTime.get(eventoId) ?? 0;
  if (now - lastTime < SCRAPE_INTERVAL_MS) return;

  // Mark as scraped immediately to prevent concurrent runs
  lastScrapeTime.set(eventoId, now);

  // Fire and forget — don't block the response
  scrapeAndUpdateFights(eventoId, eventoNome).catch(err => {
    console.error(`[live/auto-scrape] Error for ${eventoNome}:`, err);
  });
}

async function scrapeAndUpdateFights(eventoId: string, eventoNome: string) {
  const evento = await queryOne<{ ufc_slug: string | null }>(
    'SELECT ufc_slug FROM eventos WHERE id = $1', [eventoId]
  );

  const eventSlug = evento?.ufc_slug || undefined;

  // Fetch results AND full card status in parallel
  const [scraped, cardStatus] = await Promise.all([
    scrapeUFCResults(eventoNome, { eventSlug }),
    eventSlug ? scrapeFullCardStatus({ eventSlug }) : Promise.resolve([] as LiveFightStatus[]),
  ]);

  // Get ALL lutas for this event (not just unfinished — need to match for status sync)
  const lutas = await query<{
    id: string; lutador1_id: string; lutador2_id: string;
    lutador1_nome: string; lutador2_nome: string; status: string;
  }>(
    `SELECT l.id, l.lutador1_id, l.lutador2_id,
            l1.nome as lutador1_nome, l2.nome as lutador2_nome, l.status
     FROM lutas l
     JOIN lutadores l1 ON l1.id = l.lutador1_id
     JOIN lutadores l2 ON l2.id = l.lutador2_id
     WHERE l.evento_id = $1`,
    [eventoId]
  );

  // ── Phase 1: Update finished fights with results ──
  let updated = 0;
  const unfinished = lutas.filter(l => l.status !== 'finalizada');
  for (const result of scraped) {
    const matchedLuta = unfinished.find(luta => {
      const m1 = matchFighterName(result.lutador1_nome, luta.lutador1_nome) ||
                  matchFighterName(result.lutador1_nome, luta.lutador2_nome);
      const m2 = matchFighterName(result.lutador2_nome, luta.lutador1_nome) ||
                  matchFighterName(result.lutador2_nome, luta.lutador2_nome);
      return m1 && m2;
    });

    if (!matchedLuta) continue;

    let vencedorId: string | null = null;
    if (matchFighterName(result.vencedor_nome, matchedLuta.lutador1_nome)) {
      vencedorId = matchedLuta.lutador1_id;
    } else if (matchFighterName(result.vencedor_nome, matchedLuta.lutador2_nome)) {
      vencedorId = matchedLuta.lutador2_id;
    }

    const metodo = mapMethodToDB(result.metodo);

    await query(
      `UPDATE lutas SET vencedor_id = $1, metodo = $2, round_final = $3,
              tempo_final = $4, status = 'finalizada' WHERE id = $5`,
      [vencedorId, metodo, result.round, result.tempo, matchedLuta.id]
    );

    updated++;
    console.log(`[live/auto-scrape] ${matchedLuta.lutador1_nome} vs ${matchedLuta.lutador2_nome} → ${result.vencedor_nome}`);

    try {
      await processarPrevisoesLuta(matchedLuta.id);
    } catch (err) {
      console.error(`[live/auto-scrape] Scoring error for luta ${matchedLuta.id}:`, err);
    }
  }

  if (updated > 0) {
    console.log(`[live/auto-scrape] ${updated} fights updated for ${eventoNome}`);
  }

  // ── Phase 2: Sync individual fight statuses + cache round data ──
  if (cardStatus.length > 0) {
    // Track fight IDs updated to finalizada in Phase 1 to avoid resetting them
    const finalizedInPhase1 = new Set<string>();
    for (const result of scraped) {
      const matched = unfinished.find(luta => {
        const m1 = matchFighterName(result.lutador1_nome, luta.lutador1_nome) ||
                    matchFighterName(result.lutador1_nome, luta.lutador2_nome);
        const m2 = matchFighterName(result.lutador2_nome, luta.lutador1_nome) ||
                    matchFighterName(result.lutador2_nome, luta.lutador2_nome);
        return m1 && m2;
      });
      if (matched) finalizedInPhase1.add(matched.id);
    }

    // Cache round data for live fights
    const roundCache = new Map<string, LiveRoundData>();

    for (const cs of cardStatus) {
      const matchedLuta = lutas.find(luta => {
        const m1 = matchFighterName(cs.lutador1_nome, luta.lutador1_nome) ||
                    matchFighterName(cs.lutador1_nome, luta.lutador2_nome);
        const m2 = matchFighterName(cs.lutador2_nome, luta.lutador1_nome) ||
                    matchFighterName(cs.lutador2_nome, luta.lutador2_nome);
        return m1 && m2;
      });

      if (!matchedLuta) continue;

      // Cache round data for live fights
      if (cs.status === 'live') {
        roundCache.set(matchedLuta.id, {
          liveRound: cs.liveRound,
          liveRoundStartTime: cs.liveRoundStartTime,
          liveBetweenRounds: cs.liveBetweenRounds,
        });
      }

      // Update fight status
      if (cs.status === 'live' && matchedLuta.status === 'agendada' && !finalizedInPhase1.has(matchedLuta.id)) {
        await query(`UPDATE lutas SET status = 'ao_vivo'::status_luta WHERE id = $1`, [matchedLuta.id]);
        console.log(`[live/auto-scrape] Status: ${matchedLuta.lutador1_nome} vs ${matchedLuta.lutador2_nome} → ao_vivo`);
      }
    }

    // Save round cache for this event
    liveRoundCache.set(eventoId, roundCache);

    // Reset fights that were ao_vivo but are no longer live
    const liveFightIds = new Set<string>();
    for (const cs of cardStatus) {
      if (cs.status !== 'live') continue;
      const matched = lutas.find(luta => {
        const m1 = matchFighterName(cs.lutador1_nome, luta.lutador1_nome) ||
                    matchFighterName(cs.lutador1_nome, luta.lutador2_nome);
        const m2 = matchFighterName(cs.lutador2_nome, luta.lutador1_nome) ||
                    matchFighterName(cs.lutador2_nome, luta.lutador2_nome);
        return m1 && m2;
      });
      if (matched) liveFightIds.add(matched.id);
    }

    // Any DB fight marked ao_vivo that's NOT in the live set AND wasn't just finalized → back to agendada
    for (const luta of lutas) {
      if (luta.status === 'ao_vivo' && !liveFightIds.has(luta.id) && !finalizedInPhase1.has(luta.id)) {
        await query(`UPDATE lutas SET status = 'agendada'::status_luta WHERE id = $1`, [luta.id]);
        console.log(`[live/auto-scrape] Status: ${luta.lutador1_nome} vs ${luta.lutador2_nome} ao_vivo → agendada (no longer live)`);
      }
    }

    // ── Update horario_prelims from earliest CardSegmentStartTime ──
    const startTimes = cardStatus
      .map(cs => cs.cardSegmentStartTime)
      .filter((t): t is string => t !== null)
      .map(t => new Date(t).getTime());
    if (startTimes.length > 0) {
      const earliest = new Date(Math.min(...startTimes));
      await query(
        `UPDATE eventos SET horario_prelims = $1 WHERE id = $2 AND (horario_prelims IS NULL OR horario_prelims != $1)`,
        [earliest.toISOString(), eventoId]
      );
    }

    // ── Phase 3: Auto-sync missing fights (in UFC API but not in DB) ──
    for (const cs of cardStatus) {
      // Full match (both fighters) — already in DB, skip
      const fullMatch = lutas.find(luta => {
        const m1 = matchFighterName(cs.lutador1_nome, luta.lutador1_nome) ||
                    matchFighterName(cs.lutador1_nome, luta.lutador2_nome);
        const m2 = matchFighterName(cs.lutador2_nome, luta.lutador1_nome) ||
                    matchFighterName(cs.lutador2_nome, luta.lutador2_nome);
        return m1 && m2;
      });
      if (fullMatch) continue;

      // Partial match: one fighter matches — opponent swap
      const partialMatch = lutas.find(luta => {
        const m1a = matchFighterName(cs.lutador1_nome, luta.lutador1_nome);
        const m1b = matchFighterName(cs.lutador1_nome, luta.lutador2_nome);
        const m2a = matchFighterName(cs.lutador2_nome, luta.lutador1_nome);
        const m2b = matchFighterName(cs.lutador2_nome, luta.lutador2_nome);
        return (m1a || m1b || m2a || m2b) && !(m1a && m2b) && !(m1b && m2a);
      });

      if (partialMatch && partialMatch.status !== 'finalizada') {
        // Opponent swap: update the non-matching fighter
        try {
          const f1Matches = matchFighterName(cs.lutador1_nome, partialMatch.lutador1_nome) ||
                            matchFighterName(cs.lutador1_nome, partialMatch.lutador2_nome);
          const newFighterInfo = f1Matches ? cs.fighter2 : cs.fighter1;
          const newFighterId = await findOrCreateLutador(newFighterInfo, cs.weightClass);

          // Determine which side to replace
          const replaceF1 = !matchFighterName(cs.lutador1_nome, partialMatch.lutador1_nome) &&
                            !matchFighterName(cs.lutador2_nome, partialMatch.lutador1_nome);

          if (replaceF1) {
            await query(`UPDATE lutas SET lutador1_id = $1 WHERE id = $2`, [newFighterId, partialMatch.id]);
          } else {
            await query(`UPDATE lutas SET lutador2_id = $1 WHERE id = $2`, [newFighterId, partialMatch.id]);
          }

          console.info(`[live/auto-sync] Opponent swap: ${partialMatch.lutador1_nome} vs ${partialMatch.lutador2_nome} → now has ${newFighterInfo.nome}`);
        } catch (err) {
          console.error(`[live/auto-sync] Swap failed for ${cs.fighter1.nome} vs ${cs.fighter2.nome}:`, err);
        }
        continue;
      }

      // No match at all — truly new fight, insert it
      try {
        const lutador1Id = await findOrCreateLutador(cs.fighter1, cs.weightClass);
        const lutador2Id = await findOrCreateLutador(cs.fighter2, cs.weightClass);

        const tipo = mapCardSegmentToTipo(cs.cardSegment, cs.fightOrder);
        const categoriaPeso = mapWeightClass(cs.weightClass);

        await query(
          `INSERT INTO lutas (id, evento_id, lutador1_id, lutador2_id, categoria_peso, ordem, tipo, rounds, status)
           VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6::tipo_luta, $7, 'agendada'::status_luta)`,
          [eventoId, lutador1Id, lutador2Id, categoriaPeso, cs.fightOrder, tipo, cs.rounds || 3]
        );

        console.info(`[live/auto-sync] Added missing fight: ${cs.fighter1.nome} vs ${cs.fighter2.nome} (order: ${cs.fightOrder})`);
      } catch (err) {
        console.error(`[live/auto-sync] Failed to add ${cs.fighter1.nome} vs ${cs.fighter2.nome}:`, err);
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════════

interface FightResult {
  luta_id: string;
  lutador1_id: string;
  lutador2_id: string;
  lutador1_nome: string;
  lutador2_nome: string;
  vencedor_id: string | null;
  metodo: string | null;
  round_final: number | null;
  tempo_final: string | null;
  tipo: string;
  status: string;
  ordem: number;
  categoria_peso: string;
  is_titulo: boolean;
  lutador1_foto: string | null;
  lutador2_foto: string | null;
}

interface UserPick {
  luta_id: string;
  vencedor_previsto_id: string;
  acertou_vencedor: boolean | null;
  pontos_ganhos: number;
  pontos_confianca: number;
}

interface LeaderboardRow {
  usuario_id: string;
  username: string;
  display_name: string | null;
  pontos_totais: number;
  acertos: number;
  total_lutas: number;
}

interface EventInfo {
  id: string;
  nome: string;
  status: string;
  data_evento: string;
  local_evento: string | null;
}

interface EventoRecente {
  id: string;
  nome: string;
  data_evento: string;
  local_evento: string | null;
  total_lutas: number;
  lutas_finalizadas: number;
}

// ═══════════════════════════════════════════════════════════════
// GET /api/arena/live?evento_id=X
// Without evento_id: returns recent finalized events
// With evento_id: returns full event data (live or finalized)
// ═══════════════════════════════════════════════════════════════

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const eventoId = searchParams.get('evento_id');
    // Tenant-scoped leaderboard: when tenant_id is present, the ranking
    // only includes members of that tenant (join tenant_membros).
    const tenantId = searchParams.get('tenant_id');

    // No evento_id → return recent finalized events list
    if (!eventoId) {
      const recentes = await query<EventoRecente>(
        `SELECT
           e.id, e.nome, e.data_evento, e.local_evento,
           -- Count only fights that actually happened (exclude canceladas)
           COUNT(l.id) FILTER (WHERE l.status <> 'cancelada')::int AS total_lutas,
           COUNT(l.id) FILTER (WHERE l.status = 'finalizada')::int AS lutas_finalizadas
         FROM eventos e
         LEFT JOIN lutas l ON l.evento_id = e.id
         WHERE e.status IN ('finalizado', 'ao_vivo')
           AND e.nome NOT ILIKE '%TBD%'
           AND e.data_evento > NOW() - INTERVAL '60 days'
         GROUP BY e.id
         HAVING COUNT(l.id) > 0
         ORDER BY e.data_evento DESC
         LIMIT 5`
      );

      return NextResponse.json(
        { eventos_recentes: recentes },
        { headers: { 'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=30' } }
      );
    }

    // Auth: optional — unauthenticated users see results but no picks
    const usuario = await getUsuarioAtual();

    // Parallel queries for all aggregated data
    const [evento, lutas, leaderboard] = await Promise.all([
      queryOne<EventInfo & { horario_prelims: string | null }>(
        `SELECT id, nome, status::text, data_evento, local_evento, horario_prelims
         FROM eventos
         WHERE id = $1`,
        [eventoId]
      ),

      query<FightResult>(
        `SELECT
           l.id AS luta_id,
           l.lutador1_id,
           l.lutador2_id,
           lut1.nome AS lutador1_nome,
           lut2.nome AS lutador2_nome,
           l.vencedor_id,
           l.metodo::text AS metodo,
           l.round_final,
           l.tempo_final,
           l.tipo::text AS tipo,
           l.status::text AS status,
           l.ordem,
           l.categoria_peso,
           COALESCE(l.is_titulo, false) AS is_titulo,
           lut1.imagem_url AS lutador1_foto,
           lut2.imagem_url AS lutador2_foto
         FROM lutas l
         JOIN lutadores lut1 ON lut1.id = l.lutador1_id
         JOIN lutadores lut2 ON lut2.id = l.lutador2_id
         WHERE l.evento_id = $1
         ORDER BY l.ordem DESC`,
        [eventoId]
      ),

      query<LeaderboardRow>(
        tenantId
          ? `SELECT
               ep.usuario_id, ua.username, ua.display_name,
               COALESCE(ep.pontos_totais, 0) AS pontos_totais,
               COALESCE(ep.acertos, 0) AS acertos,
               COALESCE(ep.total_lutas, 0) AS total_lutas
             FROM evento_pontuacao ep
             JOIN usuarios_arena ua ON ua.id = ep.usuario_id
             JOIN tenant_membros tm ON tm.usuario_id = ep.usuario_id AND tm.tenant_id = $2
            WHERE ep.evento_id = $1
            ORDER BY ep.pontos_totais DESC
            LIMIT 20`
          : `SELECT
               ep.usuario_id, ua.username, ua.display_name,
               COALESCE(ep.pontos_totais, 0) AS pontos_totais,
               COALESCE(ep.acertos, 0) AS acertos,
               COALESCE(ep.total_lutas, 0) AS total_lutas
             FROM evento_pontuacao ep
             JOIN usuarios_arena ua ON ua.id = ep.usuario_id
            WHERE ep.evento_id = $1
            ORDER BY ep.pontos_totais DESC
            LIMIT 20`,
        tenantId ? [eventoId, tenantId] : [eventoId],
      ),
    ]);

    if (!evento) {
      return NextResponse.json(
        { error: 'Evento not found' },
        {
          status: 404,
          headers: { 'Cache-Control': 'no-store' },
        }
      );
    }

    // Fetch user picks only if authenticated
    let userPicks: UserPick[] = [];
    if (usuario) {
      userPicks = await query<UserPick>(
        `SELECT
           p.luta_id,
           p.vencedor_previsto_id,
           p.acertou_vencedor,
           COALESCE(p.pontos_ganhos, 0) AS pontos_ganhos,
           COALESCE(p.pontos_confianca, 100) AS pontos_confianca
         FROM previsoes p
         WHERE p.evento_id = $1
           AND p.usuario_id = $2`,
        [eventoId, usuario.id]
      );
    }

    // Build picks map keyed by luta_id for O(1) lookup
    const picksMap = new Map<string, UserPick>(
      userPicks.map((p) => [p.luta_id, p])
    );

    // Count finished fights — excludes canceled ones so "X/Y" reflects the real card
    const lutasFinalizadas = lutas.filter((l) => l.status === 'finalizada').length;
    // Overwrite total shown to user (canceled fights should not inflate the denominator)
    const lutasCount = lutas.filter((l) => l.status !== 'cancelada').length;

    // Auto-transition: agendado → ao_vivo if event is within 1h window
    // This makes the system self-healing — doesn't depend solely on the VPS cron
    if (evento.status === 'agendado') {
      const eventDate = new Date(evento.data_evento);
      const now = new Date();
      const hoursUntilEvent = (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60);
      if (hoursUntilEvent <= 1 && lutas.length > 0) {
        await query(`UPDATE eventos SET status = 'ao_vivo' WHERE id = $1`, [eventoId]);
        evento.status = 'ao_vivo';
        console.log(`[arena/live] Auto-transition: ${evento.nome} agendado → ao_vivo`);
      }
    }

    // Auto-scrape results when event is live (or just transitioned) and has unfinished fights
    if (evento.status === 'ao_vivo') {
      const hasUnfinished = lutasFinalizadas < lutas.length;
      backgroundScrapeIfNeeded(eventoId, evento.nome, hasUnfinished);
    }

    // Attach user pick + live round data to each fight
    const eventRoundCache = liveRoundCache.get(eventoId);
    const lutasComPick = lutas.map((luta) => {
      const roundData = eventRoundCache?.get(luta.luta_id);
      return {
        ...luta,
        userPick: picksMap.get(luta.luta_id) ?? null,
        liveRound: roundData?.liveRound ?? null,
        liveRoundStartTime: roundData?.liveRoundStartTime ?? null,
        liveBetweenRounds: roundData?.liveBetweenRounds ?? false,
      };
    });

    // Finalized events → cache aggressively (data won't change)
    // Live events → no cache (polling)
    const cacheHeader = evento.status === 'finalizado'
      ? 'public, s-maxage=3600, stale-while-revalidate=60'
      : 'no-store';

    // Calculate picks deadline: 1h before prelims (or 1h before data_evento)
    const baseDeadline = evento.horario_prelims
      ? new Date(evento.horario_prelims)
      : new Date(evento.data_evento);
    const picksDeadline = new Date(baseDeadline.getTime() - 60 * 60 * 1000).toISOString();

    return NextResponse.json(
      {
        evento,
        lutas: lutasComPick,
        leaderboard,
        lutas_finalizadas: lutasFinalizadas,
        total_lutas: lutasCount, // excludes canceled fights
        usuario_id: usuario?.id ?? null,
        picks_deadline: picksDeadline,
      },
      {
        headers: { 'Cache-Control': cacheHeader },
      }
    );
  } catch (error) {
    console.error('[API /arena/live] Error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      {
        status: 500,
        headers: { 'Cache-Control': 'no-store' },
      }
    );
  }
}
