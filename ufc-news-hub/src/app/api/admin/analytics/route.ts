import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-sessions';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  const authError = requireAdmin(request);
  if (authError) return authError;

  try {
    const [
      metricsRows,
      custoAgentes,
      noticiasDia,
      previsoesPorEvento,
      usersPorMes,
      tasksPorStatus,
      nossaPrecisao,
      precisaoPorEvento,
    ] = await Promise.all([
      // Metricas gerais
      query<Record<string, string>>(`
        SELECT
          COALESCE(SUM(n.visualizacoes), 0)::text as views_total,
          (SELECT COUNT(*) FROM noticias)::text as noticias_total,
          (SELECT COUNT(*) FROM noticias WHERE publicado_em > NOW() - INTERVAL '7 days')::text as noticias_7d,
          (SELECT COUNT(*) FROM analises)::text as analises_total,
          COALESCE((SELECT ROUND(SUM("costUsd")::numeric, 2) FROM agent_cost_logs), 0)::text as custo_ai_total,
          (SELECT COUNT(*) FROM agent_tasks)::text as tasks_total,
          (SELECT COUNT(*) FROM agent_tasks WHERE status = 'completed')::text as tasks_completed,
          (SELECT COUNT(*) FROM agent_tasks WHERE status = 'failed')::text as tasks_failed,
          (SELECT COUNT(*) FROM previsoes)::text as previsoes_total,
          (SELECT COUNT(*) FROM previsoes WHERE acertou_vencedor = true)::text as previsoes_corretas,
          (SELECT COUNT(*) FROM usuarios_arena)::text as usuarios_arena,
          (SELECT COUNT(*) FROM usuarios_arena WHERE ultimo_acesso > NOW() - INTERVAL '7 days')::text as usuarios_ativos_7d,
          (SELECT COUNT(*) FROM eventos)::text as eventos_total,
          (SELECT COUNT(*) FROM lutadores)::text as lutadores_total
        FROM noticias n
      `),
      // Custo por agente
      query<{ agent_name: string; custo: string; chamadas: string }>(`
        SELECT a."humanName" as agent_name,
          ROUND(SUM(acl."costUsd")::numeric, 4)::text as custo,
          COUNT(*)::text as chamadas
        FROM agent_cost_logs acl JOIN agents a ON a.id = acl."agentId"
        GROUP BY a."humanName" ORDER BY SUM(acl."costUsd") DESC LIMIT 10
      `),
      // Noticias por dia (30 dias)
      query<{ dia: string; total: string }>(`
        SELECT TO_CHAR(publicado_em, 'DD/MM') as dia, COUNT(*)::text as total
        FROM noticias WHERE publicado_em > NOW() - INTERVAL '30 days'
        GROUP BY dia, DATE(publicado_em) ORDER BY DATE(publicado_em)
      `),
      // Previsoes por evento
      query<{ evento: string; previsoes: string; acertos: string; taxa: string }>(`
        SELECT e.nome as evento, COUNT(p.*)::text as previsoes,
          COUNT(p.*) FILTER (WHERE p.acertou_vencedor = true)::text as acertos,
          CASE WHEN COUNT(p.*) > 0
            THEN ROUND((COUNT(p.*) FILTER (WHERE p.acertou_vencedor = true)::numeric / COUNT(p.*) * 100))::text
            ELSE '0' END as taxa
        FROM previsoes p JOIN eventos e ON p.evento_id = e.id
        GROUP BY e.nome ORDER BY COUNT(p.*) DESC LIMIT 10
      `),
      // Novos usuarios por mes
      query<{ mes: string; novos: string; total_acumulado: string }>(`
        SELECT TO_CHAR(DATE_TRUNC('month', created_at), 'Mon/YY') as mes,
          COUNT(*)::text as novos,
          SUM(COUNT(*)) OVER (ORDER BY DATE_TRUNC('month', created_at))::text as total_acumulado
        FROM usuarios_arena
        GROUP BY DATE_TRUNC('month', created_at)
        ORDER BY DATE_TRUNC('month', created_at)
      `),
      // Tasks AI por status
      query<{ status: string; total: string }>(`
        SELECT status, COUNT(*)::text as total FROM agent_tasks GROUP BY status ORDER BY COUNT(*) DESC
      `),
      // Precisao das nossas analises
      query<{ total: string; acertos: string; erros: string; taxa: string }>(`
        SELECT COUNT(*)::text as total,
          COUNT(*) FILTER (WHERE prediction_correct = true)::text as acertos,
          COUNT(*) FILTER (WHERE prediction_correct = false)::text as erros,
          CASE WHEN COUNT(*) > 0
            THEN ROUND(COUNT(*) FILTER (WHERE prediction_correct = true)::numeric / COUNT(*) * 100)::text
            ELSE '0' END as taxa
        FROM analises WHERE prediction_correct IS NOT NULL
      `),
      // Detalhe de acertos/erros por evento
      query<{ evento: string; total: string; acertos: string; taxa: string }>(`
        SELECT evento_nome as evento,
          COUNT(*)::text as total,
          COUNT(*) FILTER (WHERE prediction_correct = true)::text as acertos,
          CASE WHEN COUNT(*) > 0
            THEN ROUND(COUNT(*) FILTER (WHERE prediction_correct = true)::numeric / COUNT(*) * 100)::text
            ELSE '0' END as taxa
        FROM analises
        WHERE prediction_correct IS NOT NULL AND evento_nome IS NOT NULL
        GROUP BY evento_nome ORDER BY evento_nome
      `),
    ]);

    const m = metricsRows[0];
    const previsoes_total = parseInt(m?.previsoes_total ?? '0');
    const previsoes_corretas = parseInt(m?.previsoes_corretas ?? '0');
    const taxa_acerto = previsoes_total > 0 ? Math.round((previsoes_corretas / previsoes_total) * 100) : 0;
    const tasks_total = parseInt(m?.tasks_total ?? '0');
    const tasks_completed = parseInt(m?.tasks_completed ?? '0');
    const taxa_sucesso_ai = tasks_total > 0 ? Math.round((tasks_completed / tasks_total) * 100) : 0;

    return NextResponse.json({
      metricas: {
        views_total: parseInt(m?.views_total ?? '0'),
        noticias_total: parseInt(m?.noticias_total ?? '0'),
        noticias_7d: parseInt(m?.noticias_7d ?? '0'),
        analises_total: parseInt(m?.analises_total ?? '0'),
        custo_ai_total: parseFloat(m?.custo_ai_total ?? '0'),
        tasks_total,
        tasks_completed,
        tasks_failed: parseInt(m?.tasks_failed ?? '0'),
        taxa_sucesso_ai,
        previsoes_total,
        previsoes_corretas,
        taxa_acerto,
        usuarios_arena: parseInt(m?.usuarios_arena ?? '0'),
        usuarios_ativos_7d: parseInt(m?.usuarios_ativos_7d ?? '0'),
        eventos_total: parseInt(m?.eventos_total ?? '0'),
        lutadores_total: parseInt(m?.lutadores_total ?? '0'),
      },
      custo_por_agente: custoAgentes.map(c => ({
        agent_name: c.agent_name,
        custo: parseFloat(c.custo),
        chamadas: parseInt(c.chamadas),
      })),
      noticias_por_dia: noticiasDia.map(n => ({ dia: n.dia, total: parseInt(n.total) })),
      previsoes_por_evento: previsoesPorEvento.map(p => ({
        evento: p.evento.replace('UFC FIGHT NIGHT: ', 'FN: ').replace('UFC ', ''),
        previsoes: parseInt(p.previsoes),
        acertos: parseInt(p.acertos),
        taxa: parseInt(p.taxa),
      })),
      users_por_mes: usersPorMes.map(u => ({
        mes: u.mes,
        novos: parseInt(u.novos),
        total: parseInt(u.total_acumulado),
      })),
      tasks_por_status: tasksPorStatus.map(t => ({
        status: t.status,
        total: parseInt(t.total),
      })),
      nossa_precisao: {
        total: parseInt(nossaPrecisao[0]?.total ?? '0'),
        acertos: parseInt(nossaPrecisao[0]?.acertos ?? '0'),
        erros: parseInt(nossaPrecisao[0]?.erros ?? '0'),
        taxa: parseInt(nossaPrecisao[0]?.taxa ?? '0'),
      },
      precisao_por_evento: precisaoPorEvento.map(p => ({
        evento: p.evento.replace('UFC FIGHT NIGHT: ', 'FN: ').replace('UFC ', ''),
        total: parseInt(p.total),
        acertos: parseInt(p.acertos),
        taxa: parseInt(p.taxa),
      })),
    });
  } catch (error) {
    console.error('[API /admin/analytics] Error:', error);
    return NextResponse.json({ error: 'Erro ao buscar analytics' }, { status: 500 });
  }
}
