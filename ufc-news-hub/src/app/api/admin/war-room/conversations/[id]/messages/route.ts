import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { getMessages } from '@/lib/war-room/persistence';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const { id } = await params;
    const messages = await getMessages(id, 100);
    return Response.json({ messages });
  } catch (error) {
    console.error('[War Room /conversations/[id]/messages] error:', error);
    return Response.json({ error: 'Erro ao buscar mensagens' }, { status: 500 });
  }
}
