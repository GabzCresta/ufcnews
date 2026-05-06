import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { getRecentPipelineRuns } from '@/lib/war-room/persistence';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const limit = Number(request.nextUrl.searchParams.get('limit')) || 10;
    const pipelines = await getRecentPipelineRuns(limit);
    return Response.json({ pipelines });
  } catch (error) {
    console.error('[War Room /pipelines] error:', error);
    return Response.json({ error: 'Erro ao buscar pipelines' }, { status: 500 });
  }
}
