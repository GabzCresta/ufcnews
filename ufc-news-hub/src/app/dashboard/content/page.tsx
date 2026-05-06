'use client';

import { useState } from 'react';
import { useAdminSWR } from '@/hooks/useAdminData';
import { SectionHeader, StatCard, DataTable } from '@/components/admin/shared';
import Link from 'next/link';
import {
  FileText,
  Newspaper,
  Swords,
  Trophy,
  Calendar,
  Loader2,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Target,
} from 'lucide-react';

interface ContentStats {
  total_noticias: number;
  total_analises: number;
  total_lutadores: number;
  total_eventos: number;
}

interface EventoAnalise {
  evento_nome: string;
  total_analises: number;
  criado_em: string;
  acertos: number;
  erros: number;
  avaliadas: number;
  taxa: number;
  status: string;
}

const TABS = [
  { id: 'noticias', label: 'Noticias', icon: Newspaper },
  { id: 'analises', label: 'Analises', icon: Trophy },
  { id: 'lutadores', label: 'Lutadores', icon: Swords },
] as const;

type TabId = typeof TABS[number]['id'];

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<TabId>('noticias');
  const [search, setSearch] = useState('');

  const searchParam = activeTab === 'lutadores' && search ? `&search=${encodeURIComponent(search)}` : '';
  const { data: contentData, isLoading: loading } = useAdminSWR<{ stats: ContentStats; items: Record<string, unknown>[] }>(
    `/api/admin/content?tab=${activeTab}${searchParam}`
  );
  const { data: eventosData } = useAdminSWR<{ eventos: EventoAnalise[] }>(
    activeTab === 'analises' ? '/api/admin/content/evento' : null
  );

  const stats = contentData?.stats ?? null;
  const items = contentData?.items ?? [];
  const eventos = eventosData?.eventos ?? [];

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    setSearch('');
  };

  return (
    <div className="space-y-6">
      <SectionHeader
        icon={FileText}
        title="Gestao de"
        accent="Conteudo"
        description="Noticias, analises e lutadores em um lugar so"
      />

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Newspaper} label="Noticias" value={stats.total_noticias} color="blue" />
          <StatCard icon={Trophy} label="Analises" value={stats.total_analises} color="red" />
          <StatCard icon={Swords} label="Lutadores" value={stats.total_lutadores} color="gold" />
          <StatCard icon={Calendar} label="Eventos" value={stats.total_eventos} color="green" />
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-1 border-b border-[#1e1e2e] pb-0">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-colors
                ${isActive
                  ? 'bg-[#1a1a2e] text-ufc-red border-b-2 border-ufc-red -mb-px'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-[#0d0d14]'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center h-48">
          <Loader2 className="w-5 h-5 animate-spin text-ufc-red" />
        </div>
      ) : (
        <div className="neu-card p-6">
          {activeTab === 'noticias' && (
            <DataTable
              columns={[
                { key: 'titulo', label: 'Titulo', render: (row) => (
                  <span className="text-white text-xs line-clamp-1">{String(row.titulo)}</span>
                )},
                { key: 'categoria', label: 'Categoria', render: (row) => (
                  <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2 py-0.5 text-[10px] font-bold uppercase text-blue-400">
                    {String(row.categoria)}
                  </span>
                )},
                { key: 'fonte_nome', label: 'Fonte' },
                { key: 'visualizacoes', label: 'Views' },
                { key: 'publicado_em', label: 'Data', render: (row) => (
                  <span className="text-xs">{new Date(String(row.publicado_em)).toLocaleDateString('pt-BR')}</span>
                )},
              ]}
              data={items}
              pageSize={10}
            />
          )}

          {activeTab === 'analises' && (
            <div className="space-y-3">
              {eventos.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-8">Nenhuma analise encontrada</p>
              ) : (
                eventos.map((evento) => (
                  <Link
                    key={evento.evento_nome}
                    href={`/dashboard/content/evento/${encodeURIComponent(evento.evento_nome)}`}
                    className="block neu-inset p-4 hover:bg-[#12121a] transition-colors group rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="text-white font-semibold text-sm truncate">{evento.evento_nome}</h4>
                          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                            evento.status === 'publicado' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-yellow-400/10 text-yellow-400'
                          }`}>
                            {evento.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{evento.total_analises} analises</span>
                          <span>Criado em {new Date(evento.criado_em).toLocaleDateString('pt-BR')}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {evento.avaliadas > 0 && (
                          <div className="flex items-center gap-3 text-xs">
                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400 font-bold">{evento.acertos}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <XCircle className="w-3.5 h-3.5 text-red-400" />
                              <span className="text-red-400 font-bold">{evento.erros}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Target className="w-3.5 h-3.5 text-ufc-red" />
                              <span className={`font-bold ${evento.taxa >= 60 ? 'text-emerald-400' : evento.taxa >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                                {evento.taxa}%
                              </span>
                            </div>
                          </div>
                        )}
                        <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-ufc-red transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}

          {activeTab === 'lutadores' && (
            <>
              {/* Search */}
              <div className="mb-4">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar lutador..."
                  className="w-full max-w-sm px-4 py-2 bg-[#0d0d14] border border-[#1e1e2e] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-ufc-red/50"
                />
              </div>
              <DataTable
                columns={[
                  { key: 'nome', label: 'Nome', render: (row) => (
                    <span className="text-white font-medium text-xs">{String(row.nome)}</span>
                  )},
                  { key: 'apelido', label: 'Apelido', render: (row) => (
                    <span className="text-gray-400 text-xs">{row.apelido ? `"${String(row.apelido)}"` : '-'}</span>
                  )},
                  { key: 'categoria_peso', label: 'Categoria' },
                  { key: 'ranking_divisao', label: 'Ranking', render: (row) => (
                    row.ranking_divisao
                      ? <span className="text-ufc-red font-bold">#{String(row.ranking_divisao)}</span>
                      : <span className="text-gray-600">-</span>
                  )},
                  { key: 'record', label: 'Record', render: (row) => (
                    <span className="text-xs font-mono">{String(row.vitorias ?? 0)}-{String(row.derrotas ?? 0)}-{String(row.empates ?? 0)}</span>
                  )},
                ]}
                data={items}
                pageSize={10}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
