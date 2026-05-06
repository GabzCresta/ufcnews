#!/usr/bin/env node
/**
 * Prova que @socket.io/postgres-adapter sincroniza entre instâncias:
 * - metade dos clients conecta em :3011 (base, tem PG LISTEN)
 * - metade conecta em :3012 (só adapter, sem LISTEN)
 * - pg_notify dispara 1 evento
 * - ambos os grupos precisam receber
 */
import { io as ioClient } from 'socket.io-client';
import pg from 'pg';
import 'dotenv/config';

const N_PER_INSTANCE = parseInt(process.argv[2] || '250');
const DB = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString: DB });
const wait = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
  const { rows } = await pool.query(
    `SELECT id FROM eventos WHERE status IN ('agendado','ao_vivo') ORDER BY data_evento LIMIT 1`
  );
  const eventoId = rows[0]?.id ?? 'cluster-sync-test';

  console.log(`→ Spawning ${N_PER_INSTANCE} clients on :3011 + ${N_PER_INSTANCE} on :3012`);

  async function spawn(url, label) {
    const sockets = [];
    const received = new Map();
    await Promise.all(Array.from({ length: N_PER_INSTANCE }, (_, i) => new Promise((resolve) => {
      const s = ioClient(url, {
        path: '/socket.io/',
        transports: ['websocket'],
        reconnection: false,
        timeout: 10000,
      });
      s.once('connect', () => {
        s.emit('evento:join', eventoId);
        s.on('test:cluster-probe', (data) => {
          received.set(data.bid, (received.get(data.bid) || 0) + 1);
        });
        sockets.push(s);
        resolve();
      });
      s.once('connect_error', () => resolve());
    })));
    return { label, sockets, received };
  }

  const [a, b] = await Promise.all([
    spawn('http://localhost:3011', 'base-3011'),
    spawn('http://localhost:3012', 'sidecar-3012'),
  ]);

  console.log(`✓ ${a.label}: ${a.sockets.length}/${N_PER_INSTANCE} connected`);
  console.log(`✓ ${b.label}: ${b.sockets.length}/${N_PER_INSTANCE} connected`);
  await wait(500);

  console.log(`→ Firing 5 pg_notify broadcasts (ambos grupos precisam receber)`);
  const bids = [];
  for (let i = 0; i < 5; i++) {
    const bid = `clsync-${i}-${Date.now()}`;
    bids.push(bid);
    await pool.query(
      `SELECT pg_notify('arena_events', $1)`,
      [JSON.stringify({ type: 'test:cluster-probe', evento_id: eventoId, bid })],
    );
    await wait(100);
  }
  await wait(2000);

  let a_ok = 0, b_ok = 0;
  for (const bid of bids) {
    a_ok += a.received.get(bid) || 0;
    b_ok += b.received.get(bid) || 0;
  }
  const expected_per_group = N_PER_INSTANCE * bids.length;
  const a_rate = ((a_ok / expected_per_group) * 100).toFixed(1);
  const b_rate = ((b_ok / expected_per_group) * 100).toFixed(1);

  console.log(`\n─── CLUSTER SYNC RESULT ───`);
  console.log(`  ${a.label} received:    ${a_ok}/${expected_per_group} (${a_rate}%)`);
  console.log(`  ${b.label} received:    ${b_ok}/${expected_per_group} (${b_rate}%)`);

  for (const s of [...a.sockets, ...b.sockets]) s.disconnect();
  await pool.end();

  if (a_rate == 100 && b_rate == 100) {
    console.log(`\n✓ PASS — Postgres adapter sincroniza broadcasts entre instâncias`);
  } else {
    console.log(`\n✗ PARCIAL — verifique cluster adapter config`);
    process.exit(1);
  }
}
run().catch(err => { console.error(err); process.exit(1); });
