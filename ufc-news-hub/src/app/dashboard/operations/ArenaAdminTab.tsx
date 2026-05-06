'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAdminAuth } from '@/components/admin/AdminAuthContext';
import { DataTable, StatCard } from '@/components/admin/shared';
import {
  Trophy,
  Users,
  Target,
  TrendingUp,
  Loader2,
} from 'lucide-react';

interface ArenaUser {
  id: string;
  username: string;
  display_name: string | null;
  email: string;
  nivel: string;
  pontos_totais: number;
  total_previsoes: number;
  previsoes_corretas: number;
  created_at: string;
}

interface ArenaStats {
  total_usuarios: number;
  total_previsoes: number;
  media_acerto: number;
  usuarios_ativos_7d: number;
}

interface ArenaData {
  users: ArenaUser[];
  stats: ArenaStats;
  demografia?: Record<string, Record<string, number>>;
}

export function ArenaAdminTab() {
  const { authFetch } = useAdminAuth();
  const [users, setUsers] = useState<(ArenaUser & { pais_inferido?: string; idioma_inferido?: string; faixa_etaria?: string })[]>([]);
  const [stats, setStats] = useState<ArenaStats | null>(null);
  const [demografia, setDemografia] = useState<Record<string, Record<string, number>> | null>(null);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState<{ campo: string; valor: string } | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await authFetch('/api/admin/arena/overview');
      if (!res.ok) throw new Error('Erro ao buscar dados da arena');
      const data: ArenaData = await res.json();
      setUsers(data.users);
      setStats(data.stats);
      setDemografia(data.demografia || null);
    } catch {
      setUsers([]);
      setStats(null);
    } finally {
      setLoading(false);
    }
  }, [authFetch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <Loader2 className="w-5 h-5 animate-spin text-ufc-red" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Total Usuarios" value={stats?.total_usuarios ?? 0} color="blue" />
        <StatCard icon={Target} label="Total Previsoes" value={stats?.total_previsoes ?? 0} color="gold" />
        <StatCard icon={TrendingUp} label="Media de Acerto" value={stats ? `${stats.media_acerto}%` : '0%'} color="green" />
        <StatCard icon={Trophy} label="Ativos (7 dias)" value={stats?.usuarios_ativos_7d ?? 0} color="red" />
      </div>

      {/* Demografia */}
      {demografia && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* País */}
          {demografia.pais && (
            <div className="neu-card p-5">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Por Pais</h4>
              <div className="space-y-2">
                {Object.entries(demografia.pais).sort((a, b) => b[1] - a[1]).map(([pais, total]) => {
                  const maxVal = Math.max(...Object.values(demografia.pais));
                  const isActive = filtro?.campo === 'pais_inferido' && filtro?.valor === pais;
                  return (
                    <button key={pais} onClick={() => setFiltro(isActive ? null : { campo: 'pais_inferido', valor: pais })} className={`flex items-center gap-2 w-full rounded-lg px-1 py-0.5 transition-colors ${isActive ? 'bg-blue-500/10' : 'hover:bg-[#1a1a2e]'}`}>
                      <span className={`text-xs w-24 truncate text-left ${isActive ? 'text-blue-400 font-bold' : 'text-gray-400'}`}>{pais}</span>
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(total / maxVal) * 100}%` }} />
                      </div>
                      <span className="text-xs text-white font-mono w-6 text-right">{total}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Idioma */}
          {demografia.idioma && (
            <div className="neu-card p-5">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Por Idioma</h4>
              <div className="space-y-2">
                {Object.entries(demografia.idioma).sort((a, b) => b[1] - a[1]).map(([idioma, total]) => {
                  const labels: Record<string, string> = { pt: 'Portugues', en: 'Ingles', fr: 'Frances', es: 'Espanhol', Desconhecido: 'Desconhecido' };
                  const maxVal = Math.max(...Object.values(demografia.idioma));
                  const isActive = filtro?.campo === 'idioma_inferido' && filtro?.valor === idioma;
                  return (
                    <button key={idioma} onClick={() => setFiltro(isActive ? null : { campo: 'idioma_inferido', valor: idioma })} className={`flex items-center gap-2 w-full rounded-lg px-1 py-0.5 transition-colors ${isActive ? 'bg-emerald-500/10' : 'hover:bg-[#1a1a2e]'}`}>
                      <span className={`text-xs w-24 truncate text-left ${isActive ? 'text-emerald-400 font-bold' : 'text-gray-400'}`}>{labels[idioma] || idioma}</span>
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(total / maxVal) * 100}%` }} />
                      </div>
                      <span className="text-xs text-white font-mono w-6 text-right">{total}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Faixa Etaria */}
          {demografia.faixa_etaria && (
            <div className="neu-card p-5">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Por Faixa Etaria</h4>
              <div className="space-y-2">
                {Object.entries(demografia.faixa_etaria).sort((a, b) => b[1] - a[1]).map(([faixa, total]) => {
                  const maxVal = Math.max(...Object.values(demografia.faixa_etaria));
                  const isActive = filtro?.campo === 'faixa_etaria' && filtro?.valor === faixa;
                  return (
                    <button key={faixa} onClick={() => setFiltro(isActive ? null : { campo: 'faixa_etaria', valor: faixa })} className={`flex items-center gap-2 w-full rounded-lg px-1 py-0.5 transition-colors ${isActive ? 'bg-ufc-red/10' : 'hover:bg-[#1a1a2e]'}`}>
                      <span className={`text-xs w-24 truncate text-left ${isActive ? 'text-ufc-red font-bold' : 'text-gray-400'}`}>{faixa}</span>
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-ufc-red rounded-full" style={{ width: `${(total / maxVal) * 100}%` }} />
                      </div>
                      <span className="text-xs text-white font-mono w-6 text-right">{total}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Users Table */}
      <div className="neu-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-sm uppercase tracking-wider text-gray-500">
            {filtro ? `Usuarios: ${filtro.valor}` : 'Usuarios da Arena'}
          </h3>
          {filtro && (
            <button onClick={() => setFiltro(null)} className="text-xs text-ufc-red hover:text-white transition-colors">
              Limpar filtro
            </button>
          )}
        </div>
        <DataTable
          searchable
          searchPlaceholder="Buscar usuario..."
          columns={[
            { key: 'username', label: 'Username' },
            { key: 'display_name', label: 'Nome', render: (row) => String(row.display_name || '-') },
            { key: 'nivel', label: 'Nivel', render: (row) => (
              <span className="inline-flex items-center rounded-full bg-ufc-red/10 px-2 py-0.5 text-[10px] font-bold uppercase text-ufc-red">
                {String(row.nivel)}
              </span>
            )},
            { key: 'pontos_totais', label: 'Pontos' },
            { key: 'total_previsoes', label: 'Previsoes' },
            { key: 'previsoes_corretas', label: 'Acertos' },
          ]}
          data={(filtro
            ? users.filter(u => {
                const val = u[filtro.campo as keyof typeof u];
                return val === filtro.valor || (filtro.valor === 'Desconhecido' && !val);
              })
            : users) as unknown as Record<string, unknown>[]}
          pageSize={8}
        />
      </div>
    </div>
  );
}
