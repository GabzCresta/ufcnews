import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import type { ChildProcess } from 'child_process';

// ═══════════════════════════════════════════════════════════
// POST /api/admin/claude/chat/abort — Kill active claude process
// ═══════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';

const gProc = globalThis as unknown as { __claudeProcs?: Map<string, ChildProcess> };

export async function POST(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const { sessionId } = await request.json() as { sessionId?: string };

    if (!sessionId) {
      return Response.json({ error: 'sessionId obrigatorio' }, { status: 400 });
    }

    const proc = gProc.__claudeProcs?.get(sessionId);
    if (proc && !proc.killed) {
      proc.kill('SIGTERM');
      gProc.__claudeProcs?.delete(sessionId);
      return Response.json({ ok: true, message: 'Processo encerrado' });
    }

    return Response.json({ ok: true, message: 'Nenhum processo ativo para esta sessao' });
  } catch (error) {
    console.error('[API /admin/claude/chat/abort] error:', error);
    return Response.json({ error: 'Erro interno' }, { status: 500 });
  }
}
