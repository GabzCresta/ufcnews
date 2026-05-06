'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Users, Key, Loader2 } from 'lucide-react';
import { useAdminSWR } from '@/hooks/useAdminData';
import { useAdminAuth } from '@/components/admin/AdminAuthContext';

interface TenantListItem {
  id: string;
  slug: string;
  nome: string;
  logo_url: string | null;
  cor_primary: string;
  cor_accent: string;
  plano: string;
  active: boolean;
  created_at: string;
  total_membros: number;
  total_codigos: number;
}

export default function TenantsListPage() {
  const { authFetch } = useAdminAuth();
  const { data, mutate } = useAdminSWR<{ tenants: TenantListItem[] }>('/api/admin/tenants');
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({ nome: '', slug: '', cor_primary: '#D20A0A', cor_accent: '#E2B400' });
  const [error, setError] = useState<string | null>(null);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    setError(null);
    try {
      const res = await authFetch('/api/admin/tenants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Erro ao criar tenant');
      } else {
        setForm({ nome: '', slug: '', cor_primary: '#D20A0A', cor_accent: '#E2B400' });
        await mutate();
      }
    } catch {
      setError('Falha de conexao');
    } finally {
      setCreating(false);
    }
  }

  const tenants = data?.tenants ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl text-white uppercase tracking-wide">Tenants</h1>
          <p className="text-xs text-gray-500 mt-1">Podcasts, parceiros e white-labels da Arena</p>
        </div>
      </div>

      {/* Create form */}
      <form onSubmit={handleCreate} className="neu-card p-5 space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Criar novo tenant</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="block">
            <span className="text-[10px] text-gray-500 uppercase">Nome</span>
            <input
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Flow Podcast"
              className="mt-1 w-full px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#1e1e2e] text-white text-sm focus:outline-none focus:border-ufc-red/50"
            />
          </label>
          <label className="block">
            <span className="text-[10px] text-gray-500 uppercase">Slug (opcional)</span>
            <input
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              placeholder="flow-podcast"
              className="mt-1 w-full px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#1e1e2e] text-white text-sm focus:outline-none focus:border-ufc-red/50"
            />
          </label>
          <label className="block">
            <span className="text-[10px] text-gray-500 uppercase">Cor primary</span>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="color"
                value={form.cor_primary}
                onChange={(e) => setForm({ ...form, cor_primary: e.target.value })}
                className="h-9 w-12 cursor-pointer rounded border border-[#1e1e2e] bg-[#0d0d14]"
              />
              <input
                value={form.cor_primary}
                onChange={(e) => setForm({ ...form, cor_primary: e.target.value })}
                className="flex-1 px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#1e1e2e] text-white text-xs font-mono"
              />
            </div>
          </label>
          <label className="block">
            <span className="text-[10px] text-gray-500 uppercase">Cor accent</span>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="color"
                value={form.cor_accent}
                onChange={(e) => setForm({ ...form, cor_accent: e.target.value })}
                className="h-9 w-12 cursor-pointer rounded border border-[#1e1e2e] bg-[#0d0d14]"
              />
              <input
                value={form.cor_accent}
                onChange={(e) => setForm({ ...form, cor_accent: e.target.value })}
                className="flex-1 px-3 py-2 rounded-lg bg-[#0d0d14] border border-[#1e1e2e] text-white text-xs font-mono"
              />
            </div>
          </label>
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={creating || !form.nome.trim()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-ufc-red/20 hover:bg-ufc-red/30 border border-ufc-red/30 text-white text-sm font-semibold disabled:opacity-40"
        >
          {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
          {creating ? 'Criando...' : 'Criar tenant'}
        </button>
      </form>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tenants.map((t) => (
          <Link key={t.id} href={`/dashboard/tenants/${t.id}`}
            className="neu-card p-5 hover:scale-[1.01] transition-transform group"
            style={{
              borderLeft: `3px solid ${t.cor_primary}`,
              opacity: t.active ? 1 : 0.5,
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {t.logo_url ? (
                  <img src={t.logo_url} alt={t.nome} className="w-10 h-10 rounded object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-10 h-10 rounded flex items-center justify-center text-white font-bold"
                    style={{ background: t.cor_primary }}>
                    {t.nome.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <div className="font-bold text-white">{t.nome}</div>
                  <div className="text-[10px] text-gray-500 font-mono">{t.slug}</div>
                </div>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold"
                style={{ background: `${t.cor_primary}22`, color: t.cor_primary }}>
                {t.plano}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="inline-flex items-center gap-1">
                <Users className="w-3 h-3" /> {t.total_membros} membros
              </span>
              <span className="inline-flex items-center gap-1">
                <Key className="w-3 h-3" /> {t.total_codigos} codigos
              </span>
            </div>
          </Link>
        ))}
        {tenants.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500 text-sm">
            Nenhum tenant ainda. Crie o primeiro acima.
          </div>
        )}
      </div>
    </div>
  );
}
