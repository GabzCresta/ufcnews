import { NextRequest, NextResponse } from 'next/server';
import { query, queryOne, transaction } from '@/lib/db';
import { getUsuarioAtual } from '@/lib/arena/auth';
import { Liga, LigaMembro } from '@/types/arena';

interface RouteParams {
  params: Promise<{ ligaId: string }>;
}

// GET - Detalhes de uma liga
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { ligaId } = await params;
    const usuario = await getUsuarioAtual();

    // Buscar liga
    const liga = await queryOne<Liga & {
      criador_username: string;
      criador_display_name: string | null;
      criador_avatar: string | null;
      campeao_username: string | null;
      campeao_display_name: string | null;
      campeao_avatar: string | null;
    }>(
      `SELECT
        l.*,
        u.username as criador_username,
        u.display_name as criador_display_name,
        u.avatar_url as criador_avatar,
        c.username as campeao_username,
        c.display_name as campeao_display_name,
        c.avatar_url as campeao_avatar
      FROM ligas l
      JOIN usuarios_arena u ON u.id = l.criador_id
      LEFT JOIN usuarios_arena c ON c.id = l.campeao_id
      WHERE l.id = $1`,
      [ligaId]
    );

    if (!liga) {
      return NextResponse.json(
        { error: 'Liga não encontrada' },
        { status: 404 }
      );
    }

    // Verificar se usuário é membro (se liga for privada)
    let isMembro = false;
    let minhasPosicao: number | null = null;

    if (usuario) {
      const membroInfo = await queryOne<{ posicao_atual: number }>(
        `SELECT posicao_atual FROM liga_membros WHERE liga_id = $1 AND usuario_id = $2`,
        [ligaId, usuario.id]
      );
      isMembro = !!membroInfo;
      minhasPosicao = membroInfo?.posicao_atual || null;
    }

    // Se liga privada e não é membro, não mostrar detalhes completos
    if (liga.tipo === 'privada' && !isMembro) {
      return NextResponse.json({
        liga: {
          id: liga.id,
          nome: liga.nome,
          descricao: liga.descricao,
          tipo: liga.tipo,
          total_membros: liga.total_membros,
          status: liga.status,
          criador: {
            username: liga.criador_username,
            display_name: liga.criador_display_name,
            avatar_url: liga.criador_avatar,
          },
        },
        is_membro: false,
        pode_entrar: liga.total_membros < liga.max_membros,
        requer_convite: true,
      });
    }

    // Buscar membros com ranking
    const membros = await query<LigaMembro & {
      usuario_username: string;
      usuario_display_name: string | null;
      usuario_avatar: string | null;
      usuario_nivel: string;
      usuario_ultimo_acesso: string | null;
    }>(
      `SELECT
        lm.*,
        u.username as usuario_username,
        u.display_name as usuario_display_name,
        u.avatar_url as usuario_avatar,
        u.nivel as usuario_nivel,
        u.ultimo_acesso as usuario_ultimo_acesso
      FROM liga_membros lm
      JOIN usuarios_arena u ON u.id = lm.usuario_id
      WHERE lm.liga_id = $1
      ORDER BY lm.pontos_temporada DESC, lm.eventos_participados DESC`,
      [ligaId]
    );

    // Buscar evento atual (próximo agendado)
    const eventoAtual = await queryOne<{ id: string; nome: string; data: string }>(
      `SELECT id, nome, data FROM eventos
       WHERE status = 'agendado' AND data > NOW()
       ORDER BY data ASC LIMIT 1`
    );

    // Calcular status de picks por membro para o evento atual
    const memberPickStatus: Record<string, boolean> = {};
    let membrosComPicks = 0;

    if (eventoAtual) {
      const membroIds = membros.map(m => m.usuario_id);
      const picksFeitos = await query<{ usuario_id: string }>(
        `SELECT DISTINCT usuario_id FROM previsoes
         WHERE evento_id = $1 AND usuario_id = ANY($2::uuid[])`,
        [eventoAtual.id, membroIds]
      );
      for (const p of picksFeitos) {
        memberPickStatus[p.usuario_id] = true;
      }
      membrosComPicks = picksFeitos.length;
    }

    // Buscar dados de picks (somente se liga.mostrar_picks_antes estiver ativo)
    const memberPicksData: Record<string, Array<{
      luta_id: string;
      vencedor_nome: string;
      metodo_previsto: string | null;
      round_previsto: number | null;
      pontos_confianca: number;
    }>> = {};

    if (eventoAtual && liga.mostrar_picks_antes) {
      const membrosComPickIds = Object.keys(memberPickStatus);
      if (membrosComPickIds.length > 0) {
        const allPicks = await query<{
          usuario_id: string;
          luta_id: string;
          vencedor_nome: string;
          metodo_previsto: string | null;
          round_previsto: number | null;
          pontos_confianca: number;
        }>(
          `SELECT p.usuario_id, p.luta_id, l.nome as vencedor_nome,
                  p.metodo_previsto, p.round_previsto, p.pontos_confianca
           FROM previsoes p
           LEFT JOIN lutadores l ON l.id = p.vencedor_previsto_id
           WHERE p.evento_id = $1 AND p.usuario_id = ANY($2::uuid[])`,
          [eventoAtual.id, membrosComPickIds]
        );

        for (const pick of allPicks) {
          if (!memberPicksData[pick.usuario_id]) {
            memberPicksData[pick.usuario_id] = [];
          }
          memberPicksData[pick.usuario_id].push({
            luta_id: pick.luta_id,
            vencedor_nome: pick.vencedor_nome,
            metodo_previsto: pick.metodo_previsto,
            round_previsto: pick.round_previsto,
            pontos_confianca: pick.pontos_confianca,
          });
        }
      }
    }

    const membrosFormatados = membros.map((m, index) => ({
      id: m.usuario_id,
      username: m.usuario_username,
      display_name: m.usuario_display_name,
      avatar_url: m.usuario_avatar,
      nivel: m.usuario_nivel,
      is_admin: m.is_admin,
      ultimo_acesso: m.usuario_ultimo_acesso,
      picks_status: eventoAtual
        ? (memberPickStatus[m.usuario_id] ? 'done' as const : 'pending' as const)
        : null,
      picks_data: liga.mostrar_picks_antes ? memberPicksData[m.usuario_id] : undefined,
      pontos_temporada: m.pontos_temporada || 0,
      posicao_atual: index + 1,
    }));

    return NextResponse.json({
      liga: {
        ...liga,
        criador: {
          id: liga.criador_id,
          username: liga.criador_username,
          display_name: liga.criador_display_name,
          avatar_url: liga.criador_avatar,
        },
        campeao: liga.campeao_id ? {
          id: liga.campeao_id,
          username: liga.campeao_username,
          display_name: liga.campeao_display_name,
          avatar_url: liga.campeao_avatar,
        } : null,
      },
      membros: membrosFormatados,
      is_membro: isMembro,
      minha_posicao: minhasPosicao,
      pode_entrar: !isMembro && liga.total_membros < liga.max_membros,
      evento_atual: eventoAtual ? {
        id: eventoAtual.id,
        nome: eventoAtual.nome,
        data: eventoAtual.data,
        total_membros: membros.length,
        membros_com_picks: membrosComPicks,
      } : null,
    });
  } catch (error) {
    console.error('Erro ao buscar liga:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// DELETE - Sair da liga
export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const { ligaId } = await params;
    const usuario = await getUsuarioAtual();

    if (!usuario) {
      return NextResponse.json(
        { error: 'Não autenticado' },
        { status: 401 }
      );
    }

    // Verificar se é membro
    const membro = await queryOne<{ is_admin: boolean }>(
      `SELECT is_admin FROM liga_membros WHERE liga_id = $1 AND usuario_id = $2`,
      [ligaId, usuario.id]
    );

    if (!membro) {
      return NextResponse.json(
        { error: 'Você não é membro desta liga' },
        { status: 400 }
      );
    }

    // Verificar se é o criador
    const liga = await queryOne<{ criador_id: string; total_membros: number }>(
      `SELECT criador_id, total_membros FROM ligas WHERE id = $1`,
      [ligaId]
    );

    if (liga?.criador_id === usuario.id) {
      // Se é o único membro, pode sair (e a liga é deletada)
      if (liga.total_membros === 1) {
        await query(`DELETE FROM ligas WHERE id = $1`, [ligaId]);
        return NextResponse.json({ success: true, liga_deletada: true });
      }

      return NextResponse.json(
        { error: 'Você é o criador da liga. Transfira a propriedade antes de sair.' },
        { status: 400 }
      );
    }

    // Remover membro e decrementar total_membros (em transaction)
    await transaction(async (client) => {
      await client.query(
        `DELETE FROM liga_membros WHERE liga_id = $1 AND usuario_id = $2`,
        [ligaId, usuario.id]
      );
      await client.query(
        `UPDATE ligas SET total_membros = GREATEST(total_membros - 1, 0) WHERE id = $1`,
        [ligaId]
      );
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao sair da liga:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
