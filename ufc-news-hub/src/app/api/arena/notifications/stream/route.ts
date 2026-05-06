import { NextRequest } from 'next/server';
import { pool } from '@/lib/db';
import { getUsuarioAtual } from '@/lib/arena/auth';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const globalForSSE = globalThis as unknown as { __arenaNotifCount?: number };
const MAX_CONCURRENT = 10;

export async function GET(request: NextRequest) {
  const usuario = await getUsuarioAtual();
  if (!usuario) {
    return new Response(JSON.stringify({ error: 'Nao autenticado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const count = globalForSSE.__arenaNotifCount ?? 0;
  if (count >= MAX_CONCURRENT) {
    return new Response(JSON.stringify({ error: 'Limite de conexoes SSE atingido' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  globalForSSE.__arenaNotifCount = count + 1;

  const pgClient = await pool.connect();
  await pgClient.query('SET search_path TO public');
  const channel = `arena_user_${usuario.id}`;
  const escapedChannel = pgClient.escapeIdentifier(channel);

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      const send = (event: string, data: unknown) => {
        try {
          controller.enqueue(
            encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
          );
        } catch {
          // controller já fechou
        }
      };

      try {
        await pgClient.query(`LISTEN ${escapedChannel}`);
      } catch (err) {
        console.error('[arena-notif-sse] LISTEN falhou:', err);
        pgClient.release();
        globalForSSE.__arenaNotifCount = Math.max(0, (globalForSSE.__arenaNotifCount ?? 1) - 1);
        try { controller.close(); } catch { /* noop */ }
        return;
      }

      send('ready', { channel });

      const onNotification = (msg: { channel: string; payload?: string }) => {
        if (msg.channel === channel && msg.payload) {
          try {
            const data = JSON.parse(msg.payload);
            send('notification', data);
          } catch {
            // payload nao-JSON
          }
        }
      };
      pgClient.on('notification', onNotification);

      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(': keepalive\n\n'));
        } catch {
          clearInterval(heartbeat);
        }
      }, 15000);

      request.signal.addEventListener('abort', () => {
        clearInterval(heartbeat);
        pgClient.removeListener('notification', onNotification);
        pgClient.query(`UNLISTEN ${escapedChannel}`).catch(() => { /* noop */ });
        pgClient.release();
        globalForSSE.__arenaNotifCount = Math.max(
          0,
          (globalForSSE.__arenaNotifCount ?? 1) - 1
        );
        try { controller.close(); } catch { /* noop */ }
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-store',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  });
}
