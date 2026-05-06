import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { query } from '@/lib/db';
import type { PipelineExecucao } from '@/types/admin';

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const execucoes = await query<PipelineExecucao>(
      `SELECT id, evento_nome, semana_inicio, status, step_atual, steps_completos,
              custo_total_usd::text, tempo_total_min, iniciado_em, concluido_em, created_at
       FROM pipeline_execucoes
       ORDER BY created_at DESC
       LIMIT 10`
    );

    return NextResponse.json({ execucoes });
  } catch (error) {
    console.error('[API /admin/pipeline/status] Error:', error);
    return NextResponse.json({ error: 'Erro ao buscar status' }, { status: 500 });
  }
}
