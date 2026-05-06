'use client';

import { useAdminSWR } from '@/hooks/useAdminData';
import { SectionHeader, StatCard } from '@/components/admin/shared';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell,
} from 'recharts';
import {
  BarChart3, Eye, Newspaper, Trophy, DollarSign, Bot, Target, Users,
  Loader2, TrendingUp, AlertTriangle, CheckCircle2,
} from 'lucide-react';

interface AnalyticsData {
  metricas: {
    views_total: number; noticias_total: number; noticias_7d: number; analises_total: number;
    custo_ai_total: number; tasks_total: number; tasks_completed: number; tasks_failed: number;
    taxa_sucesso_ai: number; previsoes_total: number; previsoes_corretas: number; taxa_acerto: number;
    usuarios_arena: number; usuarios_ativos_7d: number; eventos_total: number; lutadores_total: number;
  };
  custo_por_agente: { agent_name: string; custo: number; chamadas: number }[];
  noticias_por_dia: { dia: string; total: number }[];
  previsoes_por_evento: { evento: string; previsoes: number; acertos: number; taxa: number }[];
  users_por_mes: { mes: string; novos: number; total: number }[];
  tasks_por_status: { status: string; total: number }[];
  nossa_precisao: { total: number; acertos: number; erros: number; taxa: number };
  precisao_por_evento: { evento: string; total: number; acertos: number; taxa: number }[];
}

const COLORS = ['#D20A0A', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];

const STATUS_COLORS: Record<string, string> = {
  completed: '#10B981',
  failed: '#EF4444',
  pending: '#F59E0B',
  awaiting_approval: '#8B5CF6',
};

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number; name: string; color: string }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg px-3 py-2 shadow-xl">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="text-xs font-semibold" style={{ color: p.color }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
}

export default function AnalyticsPage() {
  const { data, isLoading } = useAdminSWR<AnalyticsData>('/api/admin/analytics', { refreshInterval: 30000 });

  if (isLoading && !data) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-6 h-6 animate-spin text-ufc-red" />
      </div>
    );
  }

  const m = data?.metricas;

  return (
    <div className="space-y-6">
      <SectionHeader icon={BarChart3} title="Analytics e" accent="Metricas" description="Dados reais do crenas.site" />

      {/* NOSSA PRECISAO - Hero Section */}
      {data?.nossa_precisao && data.nossa_precisao.total > 0 && (
        <div className="neu-card p-6 border border-ufc-red/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-ufc-red/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-ufc-red" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Precisao das Nossas Analises</h3>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <span className={`text-5xl font-bold ${data.nossa_precisao.taxa >= 60 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {data.nossa_precisao.taxa}%
                </span>
                <p className="text-xs text-gray-500 mt-1">taxa de acerto geral</p>
              </div>
              <div className="h-16 w-px bg-[#1e1e2e]" />
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <span className="text-2xl font-bold text-white">{data.nossa_precisao.total}</span>
                  <p className="text-[10px] text-gray-500">analises avaliadas</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-emerald-400">{data.nossa_precisao.acertos}</span>
                  <p className="text-[10px] text-gray-500">acertos</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-red-400">{data.nossa_precisao.erros}</span>
                  <p className="text-[10px] text-gray-500">erros</p>
                </div>
              </div>
            </div>

            {/* Precisao por evento */}
            {data.precisao_por_evento && data.precisao_por_evento.length > 0 && (
              <div className="mt-4 pt-4 border-t border-[#1e1e2e]">
                <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Por Evento</p>
                <div className="flex gap-2 flex-wrap">
                  {data.precisao_por_evento.map((p) => (
                    <div key={p.evento} className="bg-[#0d0d14] border border-[#1e1e2e] rounded-lg px-3 py-2">
                      <span className="text-[10px] text-gray-400 block">{p.evento}</span>
                      <span className={`text-sm font-bold ${p.taxa >= 60 ? 'text-emerald-400' : p.taxa >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {p.acertos}/{p.total} ({p.taxa}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* KPIs Row 1: Content */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Newspaper} label="Noticias (7 dias)" value={m?.noticias_7d ?? 0} sublabel={`${m?.noticias_total ?? 0} total`} color="blue" />
        <StatCard icon={Trophy} label="Analises" value={m?.analises_total ?? 0} color="red" />
        <StatCard icon={Users} label="Usuarios Arena" value={m?.usuarios_arena ?? 0} sublabel={`${m?.usuarios_ativos_7d ?? 0} ativos`} color="gold" />
        <StatCard icon={DollarSign} label="Custo AI" value={`$${m?.custo_ai_total?.toFixed(2) ?? '0'}`} color="green" />
      </div>

      {/* Charts Row 1: Noticias + Users Growth */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Noticias por dia */}
        <div className="neu-card p-6 border border-[#1e1e2e]">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-blue-400" />
            Noticias por Dia
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data?.noticias_por_dia || []}>
              <defs>
                <linearGradient id="noticiasGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#1e1e2e" strokeDasharray="3 3" />
              <XAxis dataKey="dia" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} />
              <YAxis tick={{ fill: '#666', fontSize: 10 }} axisLine={false} width={30} />
              <Tooltip content={<ChartTooltip />} />
              <Area type="monotone" dataKey="total" stroke="#3B82F6" strokeWidth={2} fill="url(#noticiasGrad)" name="Noticias" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Crescimento de usuarios */}
        <div className="neu-card p-6 border border-[#1e1e2e]">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            Crescimento de Usuarios
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data?.users_por_mes || []}>
              <defs>
                <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#1e1e2e" strokeDasharray="3 3" />
              <XAxis dataKey="mes" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} />
              <YAxis tick={{ fill: '#666', fontSize: 10 }} axisLine={false} width={30} />
              <Tooltip content={<ChartTooltip />} />
              <Area type="monotone" dataKey="total" stroke="#10B981" strokeWidth={2} fill="url(#usersGrad)" name="Total" />
              <Area type="monotone" dataKey="novos" stroke="#3B82F6" strokeWidth={1.5} fill="none" name="Novos" strokeDasharray="4 4" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2: Previsoes + AI Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Previsoes por evento */}
        <div className="neu-card p-6 border border-[#1e1e2e]">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Target className="w-4 h-4 text-ufc-red" />
            Precisao por Evento
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data?.previsoes_por_evento || []} layout="vertical">
              <CartesianGrid stroke="#1e1e2e" strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} domain={[0, 100]} unit="%" />
              <YAxis type="category" dataKey="evento" tick={{ fill: '#999', fontSize: 9 }} width={100} axisLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Bar dataKey="taxa" name="Taxa de Acerto" radius={[0, 4, 4, 0]}>
                {(data?.previsoes_por_evento || []).map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-3 flex gap-4 text-[10px] text-gray-500">
            {data?.previsoes_por_evento?.map((p, i) => (
              <span key={i}>{p.evento}: {p.acertos}/{p.previsoes} ({p.taxa}%)</span>
            ))}
          </div>
        </div>

        {/* AI Tasks breakdown */}
        <div className="neu-card p-6 border border-[#1e1e2e]">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Bot className="w-4 h-4 text-purple-400" />
            AI Tasks
          </h3>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width={160} height={160}>
              <PieChart>
                <Pie
                  data={data?.tasks_por_status || []}
                  dataKey="total"
                  nameKey="status"
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  strokeWidth={0}
                >
                  {(data?.tasks_por_status || []).map((entry, i) => (
                    <Cell key={i} fill={STATUS_COLORS[entry.status] || COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 flex-1">
              {data?.tasks_por_status?.map((t) => (
                <div key={t.status} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: STATUS_COLORS[t.status] || '#666' }} />
                    <span className="text-xs text-gray-400 capitalize">{t.status.replace('_', ' ')}</span>
                  </div>
                  <span className="text-xs font-bold text-white">{t.total}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-[#1e1e2e] flex items-center justify-between">
                <span className="text-xs text-gray-500">Taxa de Sucesso</span>
                <span className={`text-sm font-bold ${(m?.taxa_sucesso_ai ?? 0) > 50 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {m?.taxa_sucesso_ai ?? 0}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPIs Row 2: Arena */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Target} label="Previsoes Feitas" value={m?.previsoes_total ?? 0} color="blue" />
        <StatCard icon={CheckCircle2} label="Previsoes Corretas" value={m?.previsoes_corretas ?? 0} color="green" />
        <StatCard icon={TrendingUp} label="Taxa de Acerto Geral" value={`${m?.taxa_acerto ?? 0}%`} color="green" />
        <StatCard icon={AlertTriangle} label="Tasks Falharam" value={m?.tasks_failed ?? 0} color="red" />
      </div>

      {/* Custo por Agente */}
      {data?.custo_por_agente && data.custo_por_agente.length > 0 && (
        <div className="neu-card p-6 border border-[#1e1e2e]">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-amber-400" />
            Custo por Agente
          </h3>
          <ResponsiveContainer width="100%" height={Math.max(200, data.custo_por_agente.length * 36)}>
            <BarChart data={data.custo_por_agente} layout="vertical">
              <CartesianGrid stroke="#1e1e2e" strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} unit="$" />
              <YAxis type="category" dataKey="agent_name" tick={{ fill: '#999', fontSize: 10 }} width={120} axisLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Bar dataKey="custo" name="Custo USD" radius={[0, 4, 4, 0]}>
                {data.custo_por_agente.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} fillOpacity={0.8} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Arena Stats */}
      <div className="neu-card p-6 border border-[#1e1e2e]">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
          <Eye className="w-4 h-4 text-purple-400" />
          Resumo Geral
        </h3>
        <p className="text-xs text-gray-500 mb-4">Numeros totais da plataforma</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { label: 'Eventos', value: m?.eventos_total ?? 0, icon: '📅' },
            { label: 'Lutadores', value: (m?.lutadores_total ?? 0).toLocaleString(), icon: '🥊' },
            { label: 'Noticias', value: m?.noticias_total ?? 0, icon: '📰' },
            { label: 'Analises', value: m?.analises_total ?? 0, icon: '📊' },
            { label: 'Views', value: m?.views_total ?? 0, icon: '👁️' },
          ].map((item) => (
            <div key={item.label} className="bg-[#0d0d14] rounded-xl p-4 border border-[#1e1e2e] text-center">
              <span className="text-lg">{item.icon}</span>
              <p className="text-xl font-bold text-white mt-1">{item.value}</p>
              <p className="text-[10px] text-gray-500 uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
