import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { getGlobalStats } from '@/lib/war-room/persistence';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const stats = await getGlobalStats();
    return Response.json(stats);
  } catch (error) {
    console.error('[War Room /stats] error:', error);
    return Response.json({ error: 'Erro ao buscar stats' }, { status: 500 });
  }
}
