import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { warRoomFeed, type FeedMessage } from '@/lib/war-room/pipeline-bridge';

// ═══════════════════════════════════════════════════════════
// GET: SSE stream for War Room unified feed
//
// Pipeline events flow here via the pipeline-bridge.
// Frontend subscribes to see all agents working in real-time.
// ═══════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const onMessage = (msg: FeedMessage) => {
        try {
          controller.enqueue(encoder.encode(`event: feed_message\ndata: ${JSON.stringify(msg)}\n\n`));
        } catch {
          cleanup();
        }
      };

      const onStatus = (data: { executionId: string; status: string }) => {
        try {
          controller.enqueue(encoder.encode(`event: pipeline_status\ndata: ${JSON.stringify(data)}\n\n`));
        } catch {
          cleanup();
        }
      };

      // Heartbeat every 15s
      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`: heartbeat\n\n`));
        } catch {
          cleanup();
        }
      }, 15_000);

      function cleanup() {
        clearInterval(heartbeat);
        warRoomFeed.off('message', onMessage);
        warRoomFeed.off('pipeline_status', onStatus);
      }

      warRoomFeed.on('message', onMessage);
      warRoomFeed.on('pipeline_status', onStatus);

      // Send initial ping
      controller.enqueue(encoder.encode(`event: connected\ndata: {"ts":${Date.now()}}\n\n`));
    },

    cancel() {
      warRoomFeed.removeAllListeners('message');
      warRoomFeed.removeAllListeners('pipeline_status');
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-store',
      'Connection': 'keep-alive',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
