import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { getAgent, getAgentPerformance } from '@/lib/war-room/persistence';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const agent = await getAgent(id);
    if (!agent) {
      return Response.json({ error: 'Agente nao encontrado' }, { status: 404 });
    }

    const performance = await getAgentPerformance(id);
    return Response.json({ agent, performance });
  } catch (error) {
    console.error('[War Room /agents/[id]] error:', error);
    return Response.json({ error: 'Erro ao buscar agente' }, { status: 500 });
  }
}
