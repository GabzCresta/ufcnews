'use client';

import useSWR from 'swr';
import Link from 'next/link';
import { useState } from 'react';
import { Copy, Check, Loader2, Trophy, Users, TrendingUp, Zap } from 'lucide-react';

interface TenantAdminData {
  tenant: {
    id: string; slug: string; nome: string; logo_url: string | null;
    cor_primary: string; cor_accent: string; plano: string;
  };
  metrics: {
    total_membros: number; mau_30d: number; novos_7d: number; picks_semana: number;
  };
  top_membros: Array<{
    usuario_id: string; username: string; display_name: string | null; pontos_totais: number;
  }>;
  codigos_ativos: Array<{
    codigo: string; rotulo: string | null; usos: number; max_usos: number | null;
  }>;
}

const fetcher = (url: string) => fetch(url, { credentials: 'include' }).then(r => {
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json();
});

export default function TenantAdminPage() {
  const { data, error, isLoading } = useSWR<TenantAdminData>('/api/arena/tenant/admin', fetcher);
  const [copied, setCopied] = useState<string | null>(null);

  async function copyLink(codigo: string) {
    const url = `${window.location.origin}/hub/arena/codigo/${codigo}`;
    await navigator.clipboard.writeText(url);
    setCopied(codigo);
    setTimeout(() => setCopied(null), 1500);
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-[50vh]"><Loader2 className="w-6 h-6 text-ufc-red animate-spin" /></div>;
  }
  if (error || !data) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="font-display text-2xl text-white">Acesso restrito</h1>
        <p className="text-sm text-white/50">
          Essa pagina e para podcasters administradores de um tenant.
        </p>
        <Link href="/hub/arena" className="inline-block text-ufc-red text-sm hover:underline">Voltar para Arena</Link>
      </div>
    );
  }

  const { tenant, metrics, top_membros, codigos_ativos } = data;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="neu-card p-6" style={{ borderTop: `3px solid ${tenant.cor_primary}` }}>
        <div className="flex items-center gap-4">
          {tenant.logo_url ? (
            <img src={tenant.logo_url} alt={tenant.nome} className="w-14 h-14 rounded object-cover" referrerPolicy="no-referrer" />
          ) : (
            <div className="w-14 h-14 rounded flex items-center justify-center text-white font-bold text-2xl"
              style={{ background: tenant.cor_primary }}>
              {tenant.nome.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-widest text-white/40">Painel do podcaster</p>
            <h1 className="font-display text-2xl text-white uppercase tracking-wide">{tenant.nome}</h1>
          </div>
          <span className="text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold"
            style={{ background: `${tenant.cor_primary}22`, color: tenant.cor_primary }}>
            {tenant.plano}
          </span>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Membros', value: metrics.total_membros, icon: Users },
          { label: 'MAU 30d', value: metrics.mau_30d, icon: TrendingUp },
          { label: 'Novos 7d', value: metrics.novos_7d, icon: Zap },
          { label: 'Picks 7d', value: metrics.picks_semana, icon: Trophy },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="neu-card p-4">
            <Icon className="w-4 h-4 mb-1" style={{ color: tenant.cor_primary }} />
            <div className="text-[10px] uppercase tracking-wider text-white/40">{label}</div>
            <div className="text-2xl font-bold text-white">{value}</div>
          </div>
        ))}
      </div>

      {/* Codigos ativos */}
      <div className="neu-card p-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">
          Links de convite (compartilha no podcast)
        </h2>
        <div className="space-y-2">
          {codigos_ativos.map(c => {
            const link = `${typeof window !== 'undefined' ? window.location.origin : ''}/hub/arena/codigo/${c.codigo}`;
            return (
              <div key={c.codigo} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10">
                <code className="text-sm text-white font-mono">{c.codigo}</code>
                {c.rotulo && <span className="text-xs text-white/40">· {c.rotulo}</span>}
                <span className="text-xs text-white/40 ml-auto">
                  {c.usos}{c.max_usos ? `/${c.max_usos}` : ''} usos
                </span>
                <button
                  onClick={() => copyLink(c.codigo)}
                  className="px-3 py-1 rounded text-xs text-white/60 hover:text-white hover:bg-white/5 inline-flex items-center gap-1"
                >
                  {copied === c.codigo ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  {copied === c.codigo ? 'Copiado' : link.slice(link.indexOf('/hub'))}
                </button>
              </div>
            );
          })}
          {codigos_ativos.length === 0 && (
            <p className="text-xs text-white/40 text-center py-4">
              Nenhum codigo ativo. Fale com o time Crenas pra gerar.
            </p>
          )}
        </div>
      </div>

      {/* Top membros */}
      <div className="neu-card p-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">
          Top 10 da sua audiencia
        </h2>
        <div className="space-y-2">
          {top_membros.map((m, i) => (
            <div key={m.usuario_id} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-3">
                <span className="w-5 text-xs font-mono text-white/40">#{i + 1}</span>
                <div>
                  <div className="text-sm text-white">{m.display_name ?? m.username}</div>
                  <div className="text-[10px] text-white/40">@{m.username}</div>
                </div>
              </div>
              <div className="text-xs font-bold" style={{ color: tenant.cor_accent }}>
                {(m.pontos_totais ?? 0).toLocaleString()} pts
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Growth asset hint */}
      <div className="neu-card p-5 text-center space-y-2">
        <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">Asset pra thumb do proximo episodio</h3>
        <p className="text-xs text-white/50">
          Top 3 da sua audiencia em uma imagem pronta pra usar:
        </p>
        <code className="inline-block text-xs bg-black/30 px-3 py-1.5 rounded text-white/80 font-mono">
          /api/tenant/{tenant.slug}/top3.png
        </code>
      </div>
    </div>
  );
}
