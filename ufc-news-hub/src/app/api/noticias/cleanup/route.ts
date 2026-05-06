import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

function validateCronSecret(request: NextRequest): NextResponse | null {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return NextResponse.json({ error: 'CRON_SECRET not configured' }, { status: 503 });
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${cronSecret}`) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return null;
}

export async function POST(request: NextRequest) {
  const authError = validateCronSecret(request);
  if (authError) return authError;

  try {
    const deleted = await query<{ id: string }>(
      `DELETE FROM noticias
       WHERE publicado_em < NOW() - INTERVAL '24 hours'
         AND eh_sobre_ufc = true
       RETURNING id`
    );

    console.log(`[CLEANUP] ${deleted.length} notícias antigas deletadas`);

    return NextResponse.json({
      success: true,
      deleted: deleted.length,
    });
  } catch (error) {
    console.error('Erro no cleanup:', error);
    return NextResponse.json(
      { error: 'Erro no cleanup' },
      { status: 500 }
    );
  }
}
