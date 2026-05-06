'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAdminAuth } from '@/components/admin/AdminAuthContext';
import { StatCard } from '@/components/admin/shared';
import {
  Rss,
  RefreshCw,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

interface ScraperStats {
  total_noticias: number;
  ultima_sync: string | null;
  noticias_hoje: number;
  erros_recentes: number;
}

export function ScrapersTab() {
  const { authFetch } = useAdminAuth();
  const [stats, setStats] = useState<ScraperStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    try {
      const res = await authFetch('/api/scraper-stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch {
      // API may return different format
    } finally {
      setLoading(false);
    }
  }, [authFetch]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const triggerSync = async () => {
    setSyncing(true);
    setSyncResult(null);
    try {
      const res = await authFetch('/api/sync-noticias');
      const data = await res.json();
      setSyncResult(`Sync completo: ${data.adicionadas ?? 0} novas, ${data.duplicadas ?? 0} duplicadas`);
      await fetchStats();
    } catch {
      setSyncResult('Erro ao executar sync');
    } finally {
      setSyncing(false);
    }
  };

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
        <StatCard icon={Rss} label="Total Noticias" value={stats?.total_noticias ?? 0} color="blue" />
        <StatCard icon={Clock} label="Ultima Sync" value={stats?.ultima_sync ? new Date(stats.ultima_sync).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '-'} color="gray" />
        <StatCard icon={CheckCircle2} label="Noticias Hoje" value={stats?.noticias_hoje ?? 0} color="green" />
        <StatCard icon={AlertTriangle} label="Erros Recentes" value={stats?.erros_recentes ?? 0} color="red" />
      </div>

      {/* Actions */}
      <div className="neu-card p-6">
        <h3 className="font-display text-sm uppercase tracking-wider text-gray-500 mb-4">
          Acoes Manuais
        </h3>
        <div className="flex gap-3">
          <button
            onClick={triggerSync}
            disabled={syncing}
            className="inline-flex items-center gap-2 rounded-lg bg-ufc-red px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-ufc-red/90 disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${syncing ? 'animate-spin' : ''}`} />
            {syncing ? 'Sincronizando...' : 'Sync Noticias RSS'}
          </button>
        </div>

        {syncResult && (
          <p className={`text-sm mt-3 ${syncResult.includes('Erro') ? 'text-red-400' : 'text-emerald-400'}`}>
            {syncResult}
          </p>
        )}
      </div>

      {/* Info */}
      <div className="neu-card p-6">
        <h3 className="font-display text-sm uppercase tracking-wider text-gray-500 mb-3">
          Fontes Configuradas
        </h3>
        <div className="space-y-2">
          {['MMAMania RSS', 'UFC.com Events', 'UFCStats.com'].map((source) => (
            <div key={source} className="flex items-center gap-3 py-2 px-3 bg-[#0d0d14] rounded-lg">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-sm text-gray-300">{source}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
