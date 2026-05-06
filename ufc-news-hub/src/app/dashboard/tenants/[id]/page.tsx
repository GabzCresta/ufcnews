'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Copy, Check, Users, Key, TrendingUp, Loader2, Trash2 } from 'lucide-react';
import { useAdminSWR } from '@/hooks/useAdminData';
import { useAdminAuth } from '@/components/admin/AdminAuthContext';

interface Membro {
  usuario_id: string;
  username: string;
  display_name: string | null;
  entrou_em: string;
  pontos_totais: number;
}

interface Codigo {
  id: string;
  codigo: string;
  rotulo: string | null;
  max_usos: number | null;
  usos: number;
  expira_em: string | null;
  created_at: string;
}

interface TenantDetail {
  tenant: {
    id: string;
    slug: string;
    nome: string;
    logo_url: string | null;
    cor_primary: string;
    cor_accent: string;
    plano: string;
    max_membros: number | null;
    active: boolean;
    created_at: string;
  };
  membros: Membro[];
  codigos: Codigo[];
  metrics: { mau: number; total_membros: number };
}

interface PageProps { params: Promise<{ id: string }> }

export default function TenantDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const { authFetch } = useAdminAuth();
  const { data, mutate } = useAdminSWR<TenantDetail>(`/api/admin/tenants/${id}`);
  const [copied, setCopied] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [codigoForm, setCodigoForm] = useState({ prefix: '', rotulo: '', max_usos: '', quantidade: '1' });

  const t = data?.tenant;

  async function handleCreateCodigo(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    try {
      await authFetch(`/api/admin/tenants/${id}/codigos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prefix: codigoForm.prefix || null,
          rotulo: codigoForm.rotulo || null,
          max_usos: codigoForm.max_usos ? parseInt(codigoForm.max_usos, 10) : null,
          quantidade: parseInt(codigoForm.quantidade, 10) || 1,
        }),
      });
      setCodigoForm({ prefix: '', rotulo: '', max_usos: '', quantidade: '1' });
      await mutate();
    } finally {
      setCreating(false);
    }
  }

  async function handleRevokeCodigo(codigoId: string) {
    if (!confirm('Revogar este codigo?')) return;
    await authFetch(`/api/admin/tenants/${id}/codigos?codigo_id=${codigoId}`, { method: 'DELETE' });
    await mutate();
  }

  async function copyLink(codigo: string) {
    const url = `${window.location.origin}/hub/arena/codigo/${codigo}`;
    await navigator.clipboard.writeText(url);
    setCopied(codigo);
    setTimeout(() => setCopied(null), 1500);
  }

  if (!t) {
    return <div className="flex items-center justify-center py-20"><Loader2 className="w-6 h-6 text-ufc-red animate-spin" /></div>;
  }

  return (
    <div className="space-y-6">
      <Link href="/dashboard/tenants" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
        <ArrowLeft className="w-4 h-4" /> Tenants
      </Link>

      {/* Header */}
      <div className="neu-card p-6" style={{ borderTop: `3px solid ${t.cor_primary}` }}>
        <div className="flex items-center gap-4">
          {t.logo_url ? (
            <img src={t.logo_url} alt={t.nome} className="w-14 h-14 rounded object-cover" referrerPolicy="no-referrer" />
          ) : (
            <div className="w-14 h-14 rounded flex items-center justify-center text-white font-bold text-2xl"
              style={{ background: t.cor_primary }}>
              {t.nome.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="flex-1">
            <h1 className="font-display text-2xl text-white uppercase tracking-wide">{t.nome}</h1>
            <div className="text-xs text-gray-500 font-mono">{t.slug}</div>
          </div>
          <span className="text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold"
            style={{ background: `${t.cor_primary}22`, color: t.cor_primary }}>
            {t.plano}
          </span>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-4">
        <div className="neu-card p-4">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] text-gray-500 uppercase">Membros</span>
          </div>
          <div className="text-2xl font-bold text-white">{data.metrics.total_membros}</div>
        </div>
        <div className="neu-card p-4">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] text-gray-500 uppercase">MAU 30d</span>
          </div>
          <div className="text-2xl font-bold text-white">{data.metrics.mau}</div>
        </div>
        <div className="neu-card p-4">
          <div className="flex items-center gap-2 mb-1">
            <Key className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] text-gray-500 uppercase">Codigos</span>
          </div>
          <div className="text-2xl font-bold text-white">{data.codigos.length}</div>
        </div>
      </div>

      {/* Codigos */}
      <div className="neu-card p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-300">Codigos de convite</h2>
        </div>
        <form onSubmit={handleCreateCodigo} className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
          <input
            placeholder="Prefix (opcional)"
            value={codigoForm.prefix}
            onChange={(e) => setCodigoForm({ ...codigoForm, prefix: e.target.value })}
            className="px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#1e1e2e] text-white text-xs col-span-1"
          />
          <input
            placeholder="Rotulo"
            value={codigoForm.rotulo}
            onChange={(e) => setCodigoForm({ ...codigoForm, rotulo: e.target.value })}
            className="px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#1e1e2e] text-white text-xs col-span-2"
          />
          <input
            placeholder="Max usos"
            type="number"
            value={codigoForm.max_usos}
            onChange={(e) => setCodigoForm({ ...codigoForm, max_usos: e.target.value })}
            className="px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#1e1e2e] text-white text-xs"
          />
          <div className="flex gap-2">
            <input
              placeholder="Qty"
              type="number"
              value={codigoForm.quantidade}
              onChange={(e) => setCodigoForm({ ...codigoForm, quantidade: e.target.value })}
              className="w-16 px-2 py-2 rounded-lg bg-[#0d0d14] border border-[#1e1e2e] text-white text-xs"
            />
            <button
              type="submit"
              disabled={creating}
              className="flex-1 px-3 py-2 rounded-lg bg-ufc-red/20 hover:bg-ufc-red/30 border border-ufc-red/30 text-white text-xs font-semibold"
            >
              {creating ? '...' : <Plus className="w-3 h-3 inline" />}
            </button>
          </div>
        </form>
        <div className="space-y-2">
          {data.codigos.map(c => (
            <div key={c.id} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#1e1e2e]">
              <code className="text-sm text-white font-mono">{c.codigo}</code>
              {c.rotulo && <span className="text-xs text-gray-500">· {c.rotulo}</span>}
              <span className="text-xs text-gray-500 ml-auto">
                {c.usos}{c.max_usos ? `/${c.max_usos}` : ''} usos
              </span>
              <button
                onClick={() => copyLink(c.codigo)}
                className="px-2 py-1 rounded text-xs text-gray-400 hover:text-white hover:bg-white/5 inline-flex items-center gap-1"
              >
                {copied === c.codigo ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copied === c.codigo ? 'Copiado' : 'Link'}
              </button>
              <button
                onClick={() => handleRevokeCodigo(c.id)}
                className="px-2 py-1 rounded text-xs text-gray-400 hover:text-red-400 hover:bg-red-500/10"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          ))}
          {data.codigos.length === 0 && (
            <div className="text-xs text-gray-500 text-center py-6">Nenhum codigo ainda.</div>
          )}
        </div>
      </div>

      {/* Membros */}
      <div className="neu-card p-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
          Membros ({data.membros.length})
        </h2>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {data.membros.map(m => (
            <div key={m.usuario_id} className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#1e1e2e]">
              <div>
                <div className="text-sm text-white">{m.display_name ?? m.username}</div>
                <div className="text-[10px] text-gray-500">@{m.username} · {new Date(m.entrou_em).toLocaleDateString('pt-BR')}</div>
              </div>
              <div className="text-xs text-ufc-gold font-bold">{(m.pontos_totais ?? 0).toLocaleString()} pts</div>
            </div>
          ))}
          {data.membros.length === 0 && (
            <div className="text-xs text-gray-500 text-center py-6">Nenhum membro ainda. Compartilhe um codigo.</div>
          )}
        </div>
      </div>
    </div>
  );
}
