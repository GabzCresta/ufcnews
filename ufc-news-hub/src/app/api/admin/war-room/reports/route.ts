import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { getCeoReports } from '@/lib/war-room/persistence';

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const limit = Number(request.nextUrl.searchParams.get('limit') || '10');
    const reports = await getCeoReports(limit);
    return NextResponse.json(reports, {
      headers: { 'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60' },
    });
  } catch (error) {
    console.error('[API /admin/war-room/reports] Error:', error);
    return NextResponse.json({ error: 'Erro ao buscar relatorios' }, { status: 500 });
  }
}
