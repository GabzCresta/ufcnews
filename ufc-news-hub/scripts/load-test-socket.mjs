#!/usr/bin/env node
/**
 * Load test crenas-rt Socket.IO — ramps N concurrent clients joining the
 * upcoming event room, then fires M broadcasts and measures fan-out latency.
 *
 * Usage:
 *   node scripts/load-test-socket.mjs --clients 500 --broadcasts 20 --url https://crenas.site
 *
 * Output:
 *   - Total connected
 *   - Failures
 *   - p50/p95/p99 latency from pg_notify → client receive
 *
 * WARNING: hit your own infra only. Starts a real LISTEN→Socket fan-out load.
 *          Bump cluster mode (CLUSTER_MODE=true) before running >1500 clients.
 */
import { io as ioClient } from 'socket.io-client';
import pg from 'pg';
import 'dotenv/config';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, cur, i, arr) => {
    if (cur.startsWith('--')) acc.push([cur.slice(2), arr[i + 1]]);
    return acc;
  }, [])
);

const CLIENTS     = parseInt(args.clients ?? '100', 10);
const BROADCASTS  = parseInt(args.broadcasts ?? '10', 10);
const URL_BASE    = args.url ?? 'https://crenas.site';
const DB          = process.env.DATABASE_URL;
if (!DB) { console.error('DATABASE_URL required'); process.exit(1); }

const pool = new pg.Pool({ connectionString: DB });

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
function percentile(arr, p) {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))];
}

async function run() {
  console.log(`→ Load test: ${CLIENTS} clients, ${BROADCASTS} broadcasts, target=${URL_BASE}`);

  const { rows } = await pool.query(
    `SELECT id FROM eventos WHERE status IN ('agendado','ao_vivo') ORDER BY data_evento ASC LIMIT 1`
  );
  const eventoId = rows[0]?.id ?? `loadtest-${Date.now()}`;

  // Ramp up clients
  const sockets = [];
  let connected = 0, failed = 0;
  console.log(`→ ramping up clients...`);
  const connectStart = Date.now();
  await Promise.all(Array.from({ length: CLIENTS }, () => new Promise((resolve) => {
    const s = ioClient(URL_BASE, {
      path: '/socket.io/',
      transports: ['websocket'],
      reconnection: false,
      timeout: 15000,
    });
    s.once('connect', () => {
      connected++;
      s.emit('evento:join', eventoId);
      sockets.push(s);
      resolve();
    });
    s.once('connect_error', () => { failed++; resolve(); });
  })));
  const connectDur = Date.now() - connectStart;
  console.log(`✓ ${connected}/${CLIENTS} connected in ${connectDur}ms (${failed} failed)`);

  // Wire listeners + latency probe via broadcast id
  const latencies = [];
  const expected = new Map(); // bid → timestamp sent
  for (const s of sockets) {
    s.on('test:probe', (data) => {
      const t = expected.get(data.bid);
      if (t) latencies.push(Date.now() - t);
    });
  }

  await wait(500);

  // Fire broadcasts
  console.log(`→ firing ${BROADCASTS} broadcasts...`);
  for (let i = 0; i < BROADCASTS; i++) {
    const bid = `probe-${i}-${Date.now()}`;
    expected.set(bid, Date.now());
    await pool.query(`SELECT pg_notify('arena_events', $1)`, [JSON.stringify({
      type: 'test:probe',
      evento_id: eventoId,
      bid,
    })]);
    await wait(200);
  }

  await wait(2000);

  console.log(`\n─── RESULT ───`);
  console.log(`  connected:   ${connected}/${CLIENTS}`);
  console.log(`  failed:      ${failed}`);
  console.log(`  received:    ${latencies.length}`);
  if (latencies.length > 0) {
    console.log(`  delivery:    ${((latencies.length / (connected * BROADCASTS)) * 100).toFixed(1)}%`);
    console.log(`  p50 (ms):    ${percentile(latencies, 0.50)}`);
    console.log(`  p95 (ms):    ${percentile(latencies, 0.95)}`);
    console.log(`  p99 (ms):    ${percentile(latencies, 0.99)}`);
    console.log(`  max (ms):    ${Math.max(...latencies)}`);
  }

  for (const s of sockets) s.disconnect();
  await pool.end();
  console.log(`\n✓ done.`);
}

run().catch(err => { console.error(err); process.exit(1); });
