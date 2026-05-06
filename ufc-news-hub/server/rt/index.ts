/**
 * crenas-rt — Arena real-time server
 *
 * Modes:
 *   - Single (default): 1 process, `listen` on RT_PORT (3011).
 *       Good up to ~5k sockets on this 2-core VPS (Socket.IO is async-heavy,
 *       ping overhead minimal; main cost is at fan-out burst).
 *   - Cluster: CLUSTER_MODE=true. Run N pm2 fork instances, one per port
 *       (3011, 3012, ...). Nginx upstream does sticky hash $remote_addr.
 *       Postgres adapter keeps all instances' rooms in sync via
 *       LISTEN/NOTIFY on a socket.io channel.
 *
 * Why PostgresAdapter over cluster-adapter+sticky:
 *   - sticky-module + Node 22 has intermittent ERR_INTERNAL_ASSERTION.
 *   - Postgres is already a dependency — no Redis required.
 *   - Each pm2 instance is a plain independent process (simpler debug).
 *
 * To enable cluster:
 *   export CLUSTER_MODE=true
 *   pm2 reload ecosystem.config.cjs --update-env   # starts 2 rt processes
 */

import 'dotenv/config';
import { createServer } from 'http';
import { Server, type Socket } from 'socket.io';
import { Pool, Client as PgClient } from 'pg';
import { createAdapter } from '@socket.io/postgres-adapter';
import { createHmac, timingSafeEqual } from 'crypto';
import { jwtVerify } from 'jose';
import pino from 'pino';

const log = pino({
  level: process.env.LOG_LEVEL ?? 'info',
  transport: process.env.NODE_ENV !== 'production' ? { target: 'pino-pretty' } : undefined,
});

const PORT = parseInt(process.env.RT_PORT ?? '3011', 10);
const CLUSTER_MODE = process.env.CLUSTER_MODE === 'true';
const ADMIN_SECRET = process.env.ADMIN_PASSWORD;
const DATABASE_URL = process.env.DATABASE_URL;
const JWT_SECRET_RAW = process.env.JWT_SECRET || process.env.AUTH_SECRET || 'arena-ufc-secret-change-me';
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_RAW);

if (!ADMIN_SECRET) { log.error('ADMIN_PASSWORD required'); process.exit(1); }
if (!DATABASE_URL) { log.error('DATABASE_URL required'); process.exit(1); }

const instanceId = `${process.pid}-${PORT}`;

// ── Server setup ─────────────────────────────────────────────
const httpServer = createServer((req, res) => {
  if (req.url === '/health') {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({
      ok: true,
      mode: CLUSTER_MODE ? 'cluster' : 'single',
      port: PORT,
      pid: process.pid,
      instance: instanceId,
      connections: io.engine.clientsCount,
      uptime_s: Math.floor(process.uptime()),
    }));
    return;
  }
  res.statusCode = 404; res.end();
});

const io = new Server(httpServer, {
  cors: {
    origin: process.env.NEXT_PUBLIC_BASE_URL ?? 'https://crenas.site',
    credentials: true,
  },
  pingInterval: 25_000,
  pingTimeout: 20_000,
  transports: ['websocket', 'polling'],
});

// ── Cluster fan-out via Postgres adapter ─────────────────────
// Every io.to(room).emit(...) in instance A is NOTIFY'd on channel
// "io" → instance B LISTENs, replays emit to its own local clients.
// Auto-creates table "socket_io_attachments" for payloads > 8kB.
let adapterPool: Pool | null = null;
if (CLUSTER_MODE) {
  adapterPool = new Pool({ connectionString: DATABASE_URL, max: 5 });
  adapterPool.on('error', (err) => log.error({ err }, 'adapter pool error'));
  io.adapter(createAdapter(adapterPool, {
    uid: instanceId,
    channelPrefix: 'arena_io',
    tableName: 'socket_io_attachments',
    heartbeatInterval: 5000,
    heartbeatTimeout: 10_000,
  }));
  log.info({ instanceId }, 'Postgres adapter active');
}

// ──────────────────────────────────────────────────────────────────────
// Auth
// ──────────────────────────────────────────────────────────────────────

function parseCookies(raw: string | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  if (!raw) return out;
  for (const part of raw.split(/;\s*/)) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    out[part.slice(0, eq)] = decodeURIComponent(part.slice(eq + 1));
  }
  return out;
}

function verifyAdminToken(token: string): boolean {
  const dot = token.indexOf('.');
  if (dot === -1) return false;
  const ts = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const tsNum = parseInt(ts, 10);
  if (isNaN(tsNum) || Date.now() - tsNum > 8 * 60 * 60 * 1000) return false;
  const expected = createHmac('sha256', ADMIN_SECRET!).update(ts).digest('hex');
  try {
    const a = Buffer.from(expected, 'hex');
    const b = Buffer.from(sig, 'hex');
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch { return false; }
}

async function verifyArenaToken(token: string): Promise<string | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return typeof payload.sub === 'string' ? payload.sub : null;
  } catch {
    try {
      const json = Buffer.from(token, 'base64').toString('utf-8');
      const legacy = JSON.parse(json) as { exp?: number; id?: string };
      if (legacy.exp && legacy.exp > Date.now() && legacy.id) return legacy.id;
    } catch { /* noop */ }
    return null;
  }
}

interface SocketCtx {
  userId: string | null;
  isAdmin: boolean;
  tenantId: string | null;
}

declare module 'socket.io' {
  interface Socket { ctx: SocketCtx; }
}

io.use(async (socket, next) => {
  try {
    const cookies = parseCookies(socket.handshake.headers.cookie);
    const adminToken = cookies['admin_token'];
    const arenaToken = cookies['arena_token'];
    const tenantId = cookies['tenant_ativo_id'] || null;
    const userId = arenaToken ? await verifyArenaToken(arenaToken) : null;
    socket.ctx = {
      userId,
      isAdmin: adminToken ? verifyAdminToken(adminToken) : false,
      tenantId,
    };
    next();
  } catch {
    next(new Error('auth_failed'));
  }
});

// ──────────────────────────────────────────────────────────────────────
// Rooms
// ──────────────────────────────────────────────────────────────────────

io.on('connection', (socket: Socket) => {
  log.debug({ sid: socket.id, userId: socket.ctx.userId }, 'connected');
  if (socket.ctx.userId) socket.join(`user:${socket.ctx.userId}`);
  if (socket.ctx.tenantId) socket.join(`tenant:${socket.ctx.tenantId}`);

  socket.on('evento:join', (eventoId: string) => {
    if (typeof eventoId !== 'string' || eventoId.length > 64) return;
    socket.join(`evento:${eventoId}`);
  });
  socket.on('evento:leave', (eventoId: string) => { socket.leave(`evento:${eventoId}`); });

  socket.on('liga:join', (ligaId: string) => {
    if (typeof ligaId !== 'string' || ligaId.length > 64) return;
    if (!socket.ctx.userId) return;
    socket.join(`liga:${ligaId}`);
  });
});

// ──────────────────────────────────────────────────────────────────────
// Arena Postgres LISTEN → rooms
// In cluster mode, ANY instance can run this (the postgres-adapter
// replicates io.to(...) emits across instances). Still, we only want ONE
// instance firing the listener to avoid every instance re-emitting the
// same event. Use port=3011 (base instance) as the canonical listener.
// ──────────────────────────────────────────────────────────────────────

let pgSingleton: PgClient | null = null;
const LISTEN_PORT = parseInt(process.env.RT_LISTEN_PORT ?? '3011', 10);
const SHOULD_LISTEN = !CLUSTER_MODE || PORT === LISTEN_PORT;

interface ArenaPayload {
  type: string;
  evento_id?: string;
  usuario_id?: string;
  liga_id?: string;
  [k: string]: unknown;
}

async function startListener() {
  pgSingleton = new PgClient({ connectionString: DATABASE_URL });
  await pgSingleton.connect();
  await pgSingleton.query('LISTEN arena_events');
  log.info({ instanceId }, 'LISTEN arena_events active (canonical listener)');

  pgSingleton.on('notification', (msg) => {
    if (!msg.payload) return;
    let payload: ArenaPayload;
    try { payload = JSON.parse(msg.payload); }
    catch { log.warn({ payload: msg.payload }, 'bad notify payload'); return; }

    const { type } = payload;

    if (type === 'pick:resultado' && payload.usuario_id) {
      io.to(`user:${payload.usuario_id}`).emit('pick:resultado', payload);
      return;
    }
    if (type === 'liga_chat:msg' && payload.liga_id) {
      io.to(`liga:${payload.liga_id}`).emit('liga_chat:msg', payload);
      return;
    }
    if (payload.evento_id) {
      io.to(`evento:${payload.evento_id}`).emit(type, payload);
    }
  });

  pgSingleton.on('error', (err) => {
    log.error({ err }, 'pg listener error — exiting to trigger pm2 restart');
    process.exit(1);
  });
}

// ── Graceful shutdown ─────────────────────────────────────────
async function shutdown(sig: string) {
  log.info({ sig, instanceId }, 'shutdown');
  io.close();
  try { await pgSingleton?.end(); } catch { /* noop */ }
  try { await adapterPool?.end(); } catch { /* noop */ }
  setTimeout(() => process.exit(0), 1500).unref();
}
process.on('SIGTERM', () => void shutdown('SIGTERM'));
process.on('SIGINT', () => void shutdown('SIGINT'));

// ── Boot ──────────────────────────────────────────────────────
httpServer.listen(PORT, () => {
  log.info({ port: PORT, mode: CLUSTER_MODE ? 'cluster' : 'single', instanceId }, 'crenas-rt listening');
  if (SHOULD_LISTEN) void startListener();
  else log.info({ instanceId, listenerOn: LISTEN_PORT }, 'skipping LISTEN (handled by base instance)');
});
