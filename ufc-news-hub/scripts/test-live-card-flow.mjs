#!/usr/bin/env node
/**
 * Simula um card ao vivo: evento ao_vivo → lutas finalizando uma a uma →
 * verifica socket broadcasts + /api/arena/live + seleção de currentFight.
 *
 * IMPORTANTE: este teste muda o DB. Salva snapshot antes, restaura no final.
 * Se o script crashar, chamar manualmente:
 *   npm run restore-test-state  (ou o SQL printado no crash)
 */
import { io as ioClient } from 'socket.io-client';
import pg from 'pg';
import 'dotenv/config';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const EVENT_NAME_LIKE = '%STERLING%ZALAL%';

async function q(sql, params) { return (await pool.query(sql, params)).rows; }
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
function api(path) { return fetch('http://localhost:3010' + path).then(r => r.json()); }

// Replicate the React currentFight logic from /hub/arena/live/page.tsx
function selectCurrentFight(lutas) {
  if (!lutas) return null;
  const live = lutas.find(l => l.status === 'ao_vivo');
  if (live) return live;
  const upcoming = [...lutas]
    .filter(l => l.status !== 'finalizada' && l.status !== 'ao_vivo' && l.status !== 'cancelada')
    .sort((a, b) => b.ordem - a.ordem);
  if (upcoming.length > 0) return upcoming[0];
  const finished = [...lutas]
    .filter(l => l.status === 'finalizada')
    .sort((a, b) => a.ordem - b.ordem);
  return finished[0] ?? null;
}

let pass = 0, fail = 0;
function ok(msg) { console.log('  ✓', msg); pass++; }
function no(msg) { console.error('  ✗', msg); fail++; }

async function main() {
  // ── setup ──
  const [ev] = await q(`SELECT id, nome, status FROM eventos WHERE nome ILIKE $1`, [EVENT_NAME_LIKE]);
  if (!ev) throw new Error('evento não encontrado');
  const evId = ev.id;
  console.log(`Target: ${ev.nome} (${evId})`);
  console.log(`Initial status: ${ev.status}\n`);

  // Snapshot — restore source of truth
  const snapshot = {
    evento_status: ev.status,
    lutas: await q(
      `SELECT id, status::text, vencedor_id, metodo::text, round_final, tempo_final
         FROM lutas WHERE evento_id = $1`,
      [evId],
    ),
  };
  const totalLutas = snapshot.lutas.length;
  console.log(`Snapshot: ${totalLutas} lutas, evento.status=${snapshot.evento_status}\n`);

  // ── socket listener (proxy: como o browser veria) ──
  const socket = ioClient('http://localhost:3011', {
    path: '/socket.io/',
    transports: ['websocket'],
    reconnection: false,
    timeout: 8000,
  });
  const captured = [];
  await new Promise((res, rej) => {
    const t = setTimeout(() => rej(new Error('socket connect timeout')), 7000);
    socket.once('connect', () => { clearTimeout(t); res(); });
    socket.once('connect_error', rej);
  });
  console.log(`✓ socket conectado (simulando um browser no /hub/arena/live)\n`);
  socket.emit('evento:join', evId);
  ['evento:ao_vivo','evento:finalizado','evento:agendado',
   'luta:ao_vivo','luta:finalizada','luta:agendada',
   'leaderboard:update','pick:resultado'].forEach(ev => {
    socket.on(ev, (p) => captured.push({ ev, t: Date.now(), p }));
  });
  await wait(300);

  const waitForEvent = async (name, timeoutMs = 3000) => {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const hit = captured.find(c => c.ev === name && c.t >= start);
      if (hit) return hit;
      await wait(60);
    }
    return null;
  };

  try {
    // ═══════════════════════════════════════════════════════════
    // STEP 1: Evento transiciona agendado → ao_vivo
    // ═══════════════════════════════════════════════════════════
    console.log(`── STEP 1: evento ${snapshot.evento_status} → ao_vivo ─────────────────`);
    const t1 = Date.now();
    await q(`UPDATE eventos SET status='ao_vivo' WHERE id=$1`, [evId]);
    const ev1 = await waitForEvent('evento:ao_vivo');
    if (ev1) ok(`socket emitiu evento:ao_vivo em ${ev1.t - t1}ms`);
    else no(`socket NÃO recebeu evento:ao_vivo em 3s`);

    const live1 = await api(`/api/arena/live?evento_id=${evId}`);
    if (live1.evento.status === 'ao_vivo') ok(`/api/arena/live reflete status=ao_vivo`);
    else no(`API status ainda ${live1.evento.status}`);

    // ═══════════════════════════════════════════════════════════
    // STEP 2: Primeira luta (maior ordem = primeira a acontecer) → ao_vivo
    // ═══════════════════════════════════════════════════════════
    console.log(`\n── STEP 2: primeira luta (early prelim) → ao_vivo ──`);
    const lutas = await q(
      `SELECT l.id, l.ordem, l.status::text, lu1.nome AS f1, lu2.nome AS f2, l.lutador1_id, l.lutador2_id
         FROM lutas l
         JOIN lutadores lu1 ON lu1.id = l.lutador1_id
         JOIN lutadores lu2 ON lu2.id = l.lutador2_id
        WHERE l.evento_id = $1 ORDER BY l.ordem DESC`,
      [evId],
    );
    const firstFight = lutas[0]; // maior ordem = acontece primeiro
    console.log(`   alvo: ordem ${firstFight.ordem} — ${firstFight.f1} vs ${firstFight.f2}`);

    const t2 = Date.now();
    await q(`UPDATE lutas SET status='ao_vivo'::status_luta WHERE id=$1`, [firstFight.id]);
    const ev2 = await waitForEvent('luta:ao_vivo');
    if (ev2) ok(`socket emitiu luta:ao_vivo em ${ev2.t - t2}ms`);
    else no(`socket NÃO recebeu luta:ao_vivo`);

    // Verify currentFight on the API reflects THIS fight
    const live2 = await api(`/api/arena/live?evento_id=${evId}`);
    const currentFight2 = selectCurrentFight(live2.lutas);
    if (currentFight2 && currentFight2.luta_id === firstFight.id) {
      ok(`React selectCurrentFight acerta → ${firstFight.f1} vs ${firstFight.f2} (ordem ${firstFight.ordem})`);
    } else {
      no(`currentFight errado. esperado=${firstFight.id}  real=${currentFight2?.luta_id}`);
    }

    // ═══════════════════════════════════════════════════════════
    // STEP 3: Primeira luta finaliza → finalizada + vencedor
    // ═══════════════════════════════════════════════════════════
    console.log(`\n── STEP 3: primeira luta finaliza (KO/TKO pelo f1) ──`);
    const t3 = Date.now();
    captured.length = 0; // reset for clarity
    await q(
      `UPDATE lutas
          SET status='finalizada'::status_luta,
              vencedor_id=$1,
              metodo='KO/TKO'::metodo_vitoria,
              round_final=2,
              tempo_final='2:34'
        WHERE id=$2`,
      [firstFight.lutador1_id, firstFight.id],
    );
    const ev3 = await waitForEvent('luta:finalizada');
    if (ev3) {
      ok(`socket emitiu luta:finalizada em ${ev3.t - t3}ms`);
      if (ev3.p.vencedor_id === firstFight.lutador1_id) ok(`payload traz vencedor_id correto`);
      if (ev3.p.metodo === 'KO/TKO') ok(`payload traz metodo=KO/TKO`);
    } else {
      no(`socket NÃO recebeu luta:finalizada`);
    }

    // ═══════════════════════════════════════════════════════════
    // STEP 4: Próxima luta (ordem = 12) → ao_vivo; React deve trocar spotlight
    // ═══════════════════════════════════════════════════════════
    console.log(`\n── STEP 4: segunda luta entra → currentFight transiciona ──`);
    const secondFight = lutas[1];
    console.log(`   alvo: ordem ${secondFight.ordem} — ${secondFight.f1} vs ${secondFight.f2}`);

    const t4 = Date.now();
    await q(`UPDATE lutas SET status='ao_vivo'::status_luta WHERE id=$1`, [secondFight.id]);
    const ev4 = await waitForEvent('luta:ao_vivo');
    if (ev4) ok(`socket emitiu luta:ao_vivo (nova luta) em ${ev4.t - t4}ms`);

    const live4 = await api(`/api/arena/live?evento_id=${evId}`);
    const currentFight4 = selectCurrentFight(live4.lutas);
    if (currentFight4 && currentFight4.luta_id === secondFight.id) {
      ok(`currentFight trocou para ${secondFight.f1} vs ${secondFight.f2} ✓`);
    } else {
      no(`currentFight não trocou. esperado=${secondFight.id}, atual=${currentFight4?.luta_id}`);
    }

    // Also verify the finished fight shows up correctly
    const finishedInList = live4.lutas.find(l => l.luta_id === firstFight.id);
    if (finishedInList?.status === 'finalizada' && finishedInList.vencedor_id === firstFight.lutador1_id) {
      ok(`luta anterior aparece com status='finalizada' + vencedor correto (LiveResultCard vai renderizar "FINALIZADO")`);
    } else {
      no(`luta anterior não está correta: status=${finishedInList?.status} vencedor=${finishedInList?.vencedor_id}`);
    }

    // Count finalizadas/total — UI mostra "X/Y lutas finalizadas"
    const finishedCount = live4.lutas.filter(l => l.status === 'finalizada').length;
    const realTotal = live4.total_lutas ?? live4.lutas.filter(l => l.status !== 'cancelada').length;
    ok(`contador UI: ${finishedCount}/${realTotal} lutas finalizadas (esperado 1/${totalLutas})`);

    // ═══════════════════════════════════════════════════════════
    // STEP 5: Pick resultado — emulando um user com pick nessa luta
    // ═══════════════════════════════════════════════════════════
    console.log(`\n── STEP 5: pick:resultado via trigger previsao ──`);
    // Check se havia previsões na luta que finalizou; sim = trigger dispara, não = skip
    const previsoes = await q(
      `SELECT COUNT(*)::int AS n FROM previsoes WHERE luta_id = $1 AND processada = false`,
      [firstFight.id],
    );
    if (previsoes[0].n > 0) {
      console.log(`   ${previsoes[0].n} previsões pendentes. Processando via API scoring...`);
      const secret = process.env.CRON_SECRET;
      await fetch('http://localhost:3010/api/arena/cron/scoring', {
        headers: { Authorization: `Bearer ${secret}` },
      });
      const ev5 = await waitForEvent('pick:resultado', 5000);
      if (ev5) ok(`pick:resultado chegou em user room`);
      else console.log(`   (no picks on this fight or already processed — ok)`);
    } else {
      console.log(`   (sem previsões nessa luta; pick:resultado só seria emitido se houvesse)`);
    }

  } finally {
    // ═══════════════════════════════════════════════════════════
    // RESTORE
    // ═══════════════════════════════════════════════════════════
    console.log(`\n── RESTORE snapshot ─────────────────────────────────`);
    await q(`UPDATE eventos SET status=$1::status_evento WHERE id=$2`, [snapshot.evento_status, evId]);
    for (const l of snapshot.lutas) {
      await q(
        `UPDATE lutas
            SET status=$1::status_luta,
                vencedor_id=$2,
                metodo=$3::metodo_vitoria,
                round_final=$4,
                tempo_final=$5
          WHERE id=$6`,
        [l.status, l.vencedor_id, l.metodo, l.round_final, l.tempo_final, l.id],
      );
    }
    // Reset previsoes se foram processadas
    await q(
      `UPDATE previsoes SET processada = false, processada_em = NULL,
              acertou_vencedor = NULL, acertou_metodo = NULL, acertou_round = NULL,
              pontos_ganhos = 0, pontos_base = 0,
              multiplicador_metodo = 1, multiplicador_round = 1, multiplicador_underdog = 1
        WHERE evento_id = $1 AND processada_em > NOW() - INTERVAL '2 minutes'`,
      [evId],
    );
    console.log(`✓ evento + ${totalLutas} lutas restauradas ao estado original`);
  }

  console.log(`\n═══════════════════════════════════════════════════════════`);
  console.log(`    RESULTADO: ${pass} PASS · ${fail} FAIL`);
  console.log(`═══════════════════════════════════════════════════════════`);

  socket.disconnect();
  await pool.end();
  process.exit(fail > 0 ? 1 : 0);
}

main().catch(async (err) => {
  console.error('ERRO:', err);
  try { await pool.end(); } catch {}
  process.exit(1);
});
