import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { getConversations } from '@/lib/war-room/persistence';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  const agentId = request.nextUrl.searchParams.get('agent_id');
  if (!agentId) return Response.json({ error: 'agent_id obrigatorio' }, { status: 400 });

  try {
    const conversations = await getConversations(agentId, 20);
    return Response.json({ conversations });
  } catch (error) {
    console.error('[War Room /conversations] error:', error);
    return Response.json({ error: 'Erro ao buscar conversas' }, { status: 500 });
  }
}
