#!/usr/bin/env node
/**
 * End-to-end test for crenas-rt Socket.IO integration.
 *
 * 1. Connects as a socket.io-client over HTTPS (via nginx, same path a browser uses)
 * 2. Joins the next upcoming event room
 * 3. Triggers a pg_notify from Postgres (simulates backend dispatch)
 * 4. Asserts the client received the expected message
 *
 * Run:  node scripts/test-socket-e2e.mjs
 */
import { io as ioClient } from 'socket.io-client';
import pg from 'pg';
import 'dotenv/config';

const URL = process.env.SOCKET_TEST_URL || 'https://crenas.site';
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) { console.error('DATABASE_URL required'); process.exit(1); }

const pool = new pg.Pool({ connectionString: DATABASE_URL });

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

async function getUpcomingEventoId() {
  const { rows } = await pool.query(
    `SELECT id FROM eventos
      WHERE status IN ('agendado','ao_vivo')
        AND data_evento > NOW() - INTERVAL '1 day'
      ORDER BY data_evento ASC LIMIT 1`
  );
  return rows[0]?.id ?? null;
}

async function run() {
  const eventoId = await getUpcomingEventoId();
  if (!eventoId) { console.log('⚠ No upcoming event — using synthetic id'); }
  const roomEventoId = eventoId ?? `smoke-${Date.now()}`;

  console.log(`\n→ Connecting to ${URL} ...`);
  const socket = ioClient(URL, {
    path: '/socket.io/',
    transports: ['websocket'],
    reconnection: false,
  });

  const received = [];

  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('connect timeout')), 10_000);
    socket.on('connect', () => { clearTimeout(timeout); resolve(); });
    socket.on('connect_error', (err) => { clearTimeout(timeout); reject(err); });
  });

  console.log(`✓ connected. sid=${socket.id}`);
  console.log(`→ joining room evento:${roomEventoId}`);
  socket.emit('evento:join', roomEventoId);

  // Wire listeners
  ['luta:finalizada', 'luta:ao_vivo', 'leaderboard:update', 'evento:ao_vivo',
   'evento:finalizado', 'chat:msg', 'reaction:new', 'pick:resultado', 'test:ping'].forEach(ev => {
    socket.on(ev, (payload) => {
      console.log(`  ← ${ev}`, JSON.stringify(payload).slice(0, 120));
      received.push({ ev, payload });
    });
  });

  await wait(500);

  // Dispatch 3 test notifications
  console.log(`→ firing pg_notify events...`);
  const payloads = [
    { type: 'test:ping', evento_id: roomEventoId, msg: 'hello from pg' },
    { type: 'leaderboard:update', evento_id: roomEventoId, usuario_id: 'x', pontos: 42 },
    { type: 'chat:msg', evento_id: roomEventoId, id: 'msg-1', username: 'smoke', mensagem: 'oi' },
  ];
  for (const p of payloads) {
    await pool.query(`SELECT pg_notify('arena_events', $1)`, [JSON.stringify(p)]);
    await wait(200);
  }

  // Wait up to 3s for delivery
  await wait(2000);

  socket.disconnect();
  await pool.end();

  const got = new Set(received.map(r => r.ev));
  const expected = ['test:ping', 'leaderboard:update', 'chat:msg'];
  const missing = expected.filter(e => !got.has(e));
  console.log(`\n─── RESULT ───`);
  console.log(`  received:  ${[...got].join(', ') || '(none)'}`);
  console.log(`  expected:  ${expected.join(', ')}`);
  console.log(`  missing:   ${missing.join(', ') || 'NONE ✓'}`);

  if (missing.length > 0) {
    console.error(`\n✗ FAILED — missing events: ${missing.join(', ')}`);
    process.exit(1);
  }
  console.log(`\n✓ PASS — full pg_notify → crenas-rt → socket-client pipeline verified`);
}

run().catch(err => {
  console.error('ERROR:', err);
  process.exit(1);
});
