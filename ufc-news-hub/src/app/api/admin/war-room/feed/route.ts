import { NextRequest } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { getFeed } from '@/lib/war-room/persistence';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const limit = Number(request.nextUrl.searchParams.get('limit')) || 50;
    const messages = await getFeed(limit);
    return Response.json({ messages });
  } catch (error) {
    console.error('[War Room /feed] error:', error);
    return Response.json({ error: 'Erro ao buscar feed' }, { status: 500 });
  }
}
