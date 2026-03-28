import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne } from '@/lib/db';
import { getUsuarioAtual } from '@/lib/arena/auth';
import { scrapeUFCResults, scrapeFullCardStatus, mapMethodToDB, matchFighterName, type LiveFightStatus } from '@/lib/scrape-results';
import { processarPrevisoesLuta } from '@/lib/arena/pontuacao';

// ═══════════════════════════════════════════════════════════════
// Background auto-scrape throttle (max once per 90s per event)
// ═══════════════════════════════════════════════════════════════
const lastScrapeTime = new Map<string, number>();
const SCRAPE_INTERVAL_MS = 30_000; // 30 seconds — fast updates during live events

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

  // ── Phase 2: Sync individual fight statuses (agendada → ao_vivo) ──
  if (cardStatus.length > 0) {
    for (const cs of cardStatus) {
      if (cs.status !== 'live') continue;

      const matchedLuta = lutas.find(luta => {
        const m1 = matchFighterName(cs.lutador1_nome, luta.lutador1_nome) ||
                    matchFighterName(cs.lutador1_nome, luta.lutador2_nome);
        const m2 = matchFighterName(cs.lutador2_nome, luta.lutador1_nome) ||
                    matchFighterName(cs.lutador2_nome, luta.lutador2_nome);
        return m1 && m2;
      });

      if (matchedLuta && matchedLuta.status === 'agendada') {
        await query(`UPDATE lutas SET status = 'ao_vivo' WHERE id = $1`, [matchedLuta.id]);
        console.log(`[live/auto-scrape] Status: ${matchedLuta.lutador1_nome} vs ${matchedLuta.lutador2_nome} → ao_vivo`);
      }
    }

    // Reset fights that were ao_vivo but are no longer live (fight ended between scrapes)
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

    // Any DB fight marked ao_vivo that's NOT in the live set → back to agendada
    // (it will get picked up as finalizada in the next scrape cycle)
    for (const luta of lutas) {
      if (luta.status === 'ao_vivo' && !liveFightIds.has(luta.id)) {
        await query(`UPDATE lutas SET status = 'agendada' WHERE id = $1`, [luta.id]);
        console.log(`[live/auto-scrape] Status: ${luta.lutador1_nome} vs ${luta.lutador2_nome} ao_vivo → agendada (no longer live)`);
      }
    }

    // ── Phase 3: Log missing fights (in UFC API but not in DB) ──
    for (const cs of cardStatus) {
      const matched = lutas.find(luta => {
        const m1 = matchFighterName(cs.lutador1_nome, luta.lutador1_nome) ||
                    matchFighterName(cs.lutador1_nome, luta.lutador2_nome);
        const m2 = matchFighterName(cs.lutador2_nome, luta.lutador1_nome) ||
                    matchFighterName(cs.lutador2_nome, luta.lutador2_nome);
        return m1 && m2;
      });

      if (!matched) {
        console.warn(`[live/auto-scrape] MISSING FIGHT in DB: ${cs.lutador1_nome} vs ${cs.lutador2_nome} (order: ${cs.fightOrder}, status: ${cs.status})`);
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

    // No evento_id → return recent finalized events list
    if (!eventoId) {
      const recentes = await query<EventoRecente>(
        `SELECT
           e.id, e.nome, e.data_evento, e.local_evento,
           COUNT(l.id)::int AS total_lutas,
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
      queryOne<EventInfo>(
        `SELECT id, nome, status::text, data_evento, local_evento
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
        `SELECT
           ep.usuario_id,
           ua.username,
           ua.display_name,
           COALESCE(ep.pontos_totais, 0) AS pontos_totais,
           COALESCE(ep.acertos, 0) AS acertos,
           COALESCE(ep.total_lutas, 0) AS total_lutas
         FROM evento_pontuacao ep
         JOIN usuarios_arena ua ON ua.id = ep.usuario_id
         WHERE ep.evento_id = $1
         ORDER BY ep.pontos_totais DESC
         LIMIT 20`,
        [eventoId]
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

    // Count finished fights
    const lutasFinalizadas = lutas.filter((l) => l.status === 'finalizada').length;

    // Auto-transition: agendado → ao_vivo if event is within 6h window
    // This makes the system self-healing — doesn't depend solely on the Vercel cron
    if (evento.status === 'agendado') {
      const eventDate = new Date(evento.data_evento);
      const now = new Date();
      const hoursUntilEvent = (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60);
      if (hoursUntilEvent <= 6 && lutas.length > 0) {
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

    // Attach user pick to each fight
    const lutasComPick = lutas.map((luta) => ({
      ...luta,
      userPick: picksMap.get(luta.luta_id) ?? null,
    }));

    // Finalized events → cache aggressively (data won't change)
    // Live events → no cache (polling)
    const cacheHeader = evento.status === 'finalizado'
      ? 'public, s-maxage=3600, stale-while-revalidate=60'
      : 'no-store';

    return NextResponse.json(
      {
        evento,
        lutas: lutasComPick,
        leaderboard,
        lutas_finalizadas: lutasFinalizadas,
        usuario_id: usuario?.id ?? null,
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
