import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { getAgents } from '@/lib/war-room/persistence';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const agents = await getAgents();
    return Response.json({ agents });
  } catch (error) {
    console.error('[War Room /agents] error:', error);
    return Response.json({ error: 'Erro ao buscar agentes' }, { status: 500 });
  }
}
