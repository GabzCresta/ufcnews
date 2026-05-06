import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { getPipelineLogs } from '@/lib/war-room/persistence';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const logs = await getPipelineLogs(id);
    return Response.json({ logs });
  } catch (error) {
    console.error('[War Room /pipelines/[id]/timeline] error:', error);
    return Response.json({ error: 'Erro ao buscar timeline' }, { status: 500 });
  }
}
