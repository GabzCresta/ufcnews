import { NextRequest, NextResponse } from 'next/server';
import { registrarUsuario, criarCookieToken } from '@/lib/arena/auth';
import { query, queryOne, transaction } from '@/lib/db';
import type { RegistroArenaRequest } from '@/types/arena';

interface RegistroBody extends RegistroArenaRequest {
  codigo_tenant?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegistroBody;
    const { username, email, senha, display_name, codigo_tenant } = body;

    const resultado = await registrarUsuario(username, email, senha, display_name);
    if ('error' in resultado) {
      return NextResponse.json({ error: resultado.error }, { status: 400 });
    }

    // Optional: auto-join tenant from invite code captured at signup
    let tenantJoined: { id: string; nome: string; slug: string } | null = null;
    if (codigo_tenant && typeof codigo_tenant === 'string') {
      const codigo = codigo_tenant.trim().toUpperCase();
      const cod = await queryOne<{
        id: string; tenant_id: string;
        max_usos: number | null; usos: number;
        expira_em: string | null;
      }>(
        `SELECT id, tenant_id, max_usos, usos, expira_em
           FROM tenant_codigos_convite WHERE codigo = $1`,
        [codigo],
      );

      const valid = !!cod
        && (cod.max_usos == null || cod.usos < cod.max_usos)
        && (!cod.expira_em || new Date(cod.expira_em) > new Date());

      if (valid) {
        const tenant = await queryOne<{ id: string; nome: string; slug: string }>(
          `SELECT id, nome, slug FROM tenants WHERE id = $1 AND active = true`,
          [cod!.tenant_id],
        );
        if (tenant) {
          try {
            await transaction(async (tx) => {
              const ins = await tx.query(
                `INSERT INTO tenant_membros (tenant_id, usuario_id, codigo_usado, fonte)
                 VALUES ($1, $2, $3, 'invite_code')
                 ON CONFLICT (tenant_id, usuario_id) DO NOTHING`,
                [tenant.id, resultado.usuario.id, cod!.id],
              );
              if ((ins.rowCount ?? 0) > 0) {
                await tx.query(
                  `UPDATE tenant_codigos_convite SET usos = usos + 1 WHERE id = $1`,
                  [cod!.id],
                );
              }
              await tx.query(
                `UPDATE usuarios_arena SET tenant_ativo_id = $1 WHERE id = $2`,
                [tenant.id, resultado.usuario.id],
              );
            });
            tenantJoined = tenant;
          } catch (err) {
            console.error('[registro] tenant join failed', err);
          }
        }
      }
    }

    const response = NextResponse.json({
      success: true,
      usuario: resultado.usuario,
      tenant: tenantJoined,
    });
    response.headers.set('Set-Cookie', criarCookieToken(resultado.token));
    if (tenantJoined) {
      response.cookies.set('tenant_ativo_id', tenantJoined.id, {
        httpOnly: false, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 365,
      });
    }
    return response;
  } catch (error) {
    console.error('Erro no registro:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
