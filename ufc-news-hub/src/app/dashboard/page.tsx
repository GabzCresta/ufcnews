'use client';

import { useAdminSWR } from '@/hooks/useAdminData';
import { ProgressBar } from '@/components/admin/shared';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  Calendar,
  CheckCircle2,
  Bot,
  Loader2,
  ArrowRight,
  GitBranch,
  Trophy,
  Newspaper,
  BarChart3,
  Target,
  DollarSign,
  TrendingUp,
  Clock,
  Zap,
  Eye,
  Swords,
} from 'lucide-react';

interface DashboardData {
  overview: {
    clientes: { ativos: number; total: number };
    proximo_evento: {
      nome: string;
      data: string;
      local: string;
      dias_restantes: number;
    } | null;
    checklist_semana: { total: number; concluidos: number; percentual: number };
    agentes: { total: number; ativos: number };
  };
  analytics: {
    metricas: {
      views_total: number;
      noticias_total: number;
      noticias_7d: number;
      analises_total: number;
      custo_ai_total: number;
      previsoes_total: number;
      previsoes_corretas: number;
      taxa_acerto: number;
      usuarios_arena: number;
      usuarios_ativos_7d: number;
      lutadores_total: number;
    };
  };
  pipeline: {
    execucoes: {
      status: string;
      step_atual: string | null;
      steps_completos: string[];
      evento_nome: string;
    }[];
  };
}

function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse bg-[#1a1a2e] rounded-lg ${className}`} />;
}

function KPICard({
  icon: Icon,
  label,
  value,
  sublabel,
  trend,
  color = 'red',
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sublabel?: string;
  trend?: string;
  color?: string;
  href?: string;
}) {
  const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    red: { bg: 'bg-ufc-red/10', text: 'text-ufc-red', border: 'border-ufc-red/20', glow: 'shadow-ufc-red/5' },
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', glow: 'shadow-blue-500/5' },
    green: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', glow: 'shadow-emerald-500/5' },
    gold: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', glow: 'shadow-amber-500/5' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', glow: 'shadow-purple-500/5' },
  };
  const c = colorMap[color] || colorMap.red;

  const content = (
    <div className={`neu-card p-5 border ${c.border} shadow-lg ${c.glow} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group`}>
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${c.text}`} />
        </div>
        {trend && (
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
            {trend}
          </span>
        )}
        {href && (
          <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
        )}
      </div>
      <div className="text-3xl font-bold text-white tracking-tight">{value}</div>
      <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
      {sublabel && <div className="text-[10px] text-gray-600 mt-0.5">{sublabel}</div>}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}

export default function DashboardOverview() {
  const { data: overview } = useAdminSWR<DashboardData['overview']>('/api/admin/overview', { refreshInterval: 30000 });
  const { data: analytics } = useAdminSWR<DashboardData['analytics']>('/api/admin/analytics', { refreshInterval: 30000 });
  const { data: pipeline } = useAdminSWR<DashboardData['pipeline']>('/api/admin/pipeline/status', { refreshInterval: 10000 });

  const loading = !overview && !analytics;

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-64" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-32" />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Skeleton className="h-48" />
          <Skeleton className="h-48" />
        </div>
      </div>
    );
  }

  const o = overview;
  const a = analytics?.metricas;
  const p = pipeline;
  const currentPipeline = p?.execucoes?.find((e: { status: string }) => e.status === 'rodando');
  const lastPipeline = p?.execucoes?.[0];

  const pipelineSteps = [
    { id: 'scraper', name: 'Scraper' },
    { id: 'analyst_main', name: 'Main' },
    { id: 'analyst_prelims', name: 'Prelims' },
    { id: 'validator', name: 'Valid.' },
    { id: 'translator', name: 'Trad.' },
    { id: 'event_page', name: 'Page' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-ufc-red/20 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-ufc-red" />
          </div>
          <div>
            <h1 className="font-display text-2xl text-white tracking-wide uppercase">War Room</h1>
            <p className="text-xs text-gray-500">Tudo que importa em um lugar</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-gray-600">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </div>
      </div>

      {/* Hero: Next Event */}
      {o?.proximo_evento && (
        <div className="neu-card p-6 border border-ufc-red/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-ufc-red/5 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-ufc-red" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-ufc-red">Proximo Evento</span>
            </div>
            <h2 className="font-display text-3xl text-white uppercase tracking-wide mb-1">
              {o.proximo_evento.nome}
            </h2>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>{new Date(o.proximo_evento.data).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
              <span className="text-gray-600">|</span>
              <span>{o.proximo_evento.local || 'TBD'}</span>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-ufc-red/10 border border-ufc-red/20 px-4 py-2 rounded-xl">
              <Clock className="w-4 h-4 text-ufc-red" />
              <span className="text-2xl font-bold text-white">{o.proximo_evento.dias_restantes}</span>
              <span className="text-xs text-gray-400">dias restantes</span>
            </div>
          </div>
        </div>
      )}

      {/* KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard icon={Trophy} label="Analises Publicadas" value={a?.analises_total ?? 0} color="red" href="/dashboard/content" />
        <KPICard icon={Users} label="Usuarios Arena" value={a?.usuarios_arena ?? 0} sublabel={`${a?.usuarios_ativos_7d ?? 0} ativos esta semana`} color="blue" href="/dashboard/operations" />
        <KPICard icon={Target} label="Precisao Previsoes" value={`${a?.taxa_acerto ?? 0}%`} sublabel={`${a?.previsoes_corretas ?? 0} de ${a?.previsoes_total ?? 0}`} color="green" />
        <KPICard icon={DollarSign} label="Custo AI Total" value={`$${a?.custo_ai_total?.toFixed(2) ?? '0'}`} color="gold" href="/dashboard/analytics" />
      </div>

      {/* Two Column: Pipeline + Content Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Pipeline Status */}
        <Link href="/dashboard/pipeline" className="neu-card p-6 border border-[#1e1e2e] hover:border-ufc-red/20 transition-colors group">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-ufc-red" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Pipeline</h3>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-ufc-red transition-colors" />
          </div>
          {currentPipeline ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-ufc-red animate-pulse" />
                <span className="text-xs text-gray-400">{currentPipeline.evento_nome}</span>
              </div>
              <ProgressBar
                steps={pipelineSteps.map(s => ({
                  name: s.name,
                  status: currentPipeline.steps_completos?.includes(s.id) ? 'concluido' as const
                    : currentPipeline.step_atual === s.id ? 'rodando' as const
                    : 'pendente' as const,
                }))}
              />
            </div>
          ) : lastPipeline ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-gray-400">Ultimo: {lastPipeline.evento_nome}</span>
              </div>
              <ProgressBar
                steps={pipelineSteps.map(s => ({
                  name: s.name,
                  status: lastPipeline.steps_completos?.includes(s.id) ? 'concluido' as const : 'pendente' as const,
                }))}
              />
            </div>
          ) : (
            <p className="text-xs text-gray-500">Nenhum pipeline executado ainda</p>
          )}
        </Link>

        {/* Content Stats */}
        <div className="neu-card p-6 border border-[#1e1e2e]">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-ufc-red" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Conteudo</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0d0d14] rounded-xl p-3 border border-[#1e1e2e]">
              <div className="flex items-center gap-2 mb-1">
                <Newspaper className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] text-gray-500 uppercase">Noticias</span>
              </div>
              <span className="text-xl font-bold text-white">{a?.noticias_total ?? 0}</span>
              <span className="text-[10px] text-gray-600 ml-1">{a?.noticias_7d ?? 0} esta semana</span>
            </div>
            <div className="bg-[#0d0d14] rounded-xl p-3 border border-[#1e1e2e]">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-3.5 h-3.5 text-ufc-red" />
                <span className="text-[10px] text-gray-500 uppercase">Analises</span>
              </div>
              <span className="text-xl font-bold text-white">{a?.analises_total ?? 0}</span>
            </div>
            <div className="bg-[#0d0d14] rounded-xl p-3 border border-[#1e1e2e]">
              <div className="flex items-center gap-2 mb-1">
                <Swords className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] text-gray-500 uppercase">Lutadores</span>
              </div>
              <span className="text-xl font-bold text-white">{a?.lutadores_total?.toLocaleString() ?? 0}</span>
            </div>
            <div className="bg-[#0d0d14] rounded-xl p-3 border border-[#1e1e2e]">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[10px] text-gray-500 uppercase">Views</span>
              </div>
              <span className="text-xl font-bold text-white">{a?.views_total?.toLocaleString() ?? 0}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: AI Agents + Arena + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* AI Agents */}
        <Link href="/dashboard/operations" className="neu-card p-5 border border-[#1e1e2e] hover:border-purple-500/20 transition-colors group">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-400" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">AI Company</h3>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple-400 transition-colors" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{o?.agentes?.ativos ?? 0}</span>
            <span className="text-xs text-gray-500">de {o?.agentes?.total ?? 0} agentes ativos</span>
          </div>
          <div className="mt-2 flex gap-1">
            {[...Array(Math.min(o?.agentes?.total ?? 0, 18))].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i < (o?.agentes?.ativos ?? 0) ? 'bg-purple-400' : 'bg-gray-700'}`}
              />
            ))}
          </div>
        </Link>

        {/* Arena */}
        <Link href="/dashboard/operations" className="neu-card p-5 border border-[#1e1e2e] hover:border-blue-500/20 transition-colors group">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-blue-400" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Arena</h3>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-blue-400 transition-colors" />
          </div>
          <div className="flex items-center gap-6">
            <div>
              <span className="text-3xl font-bold text-white">{a?.usuarios_arena ?? 0}</span>
              <p className="text-[10px] text-gray-500">usuarios</p>
            </div>
            <div className="h-8 w-px bg-[#1e1e2e]" />
            <div>
              <span className="text-3xl font-bold text-emerald-400">{a?.taxa_acerto ?? 0}%</span>
              <p className="text-[10px] text-gray-500">precisao media</p>
            </div>
          </div>
        </Link>

        {/* Quick Actions */}
        <div className="neu-card p-5 border border-[#1e1e2e]">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Acoes Rapidas</h3>
          <div className="space-y-2">
            {[
              { label: 'Iniciar Pipeline', href: '/dashboard/pipeline', icon: GitBranch, color: 'text-ufc-red' },
              { label: 'Ver Conteudo', href: '/dashboard/content', icon: Newspaper, color: 'text-blue-400' },
              { label: 'Analytics', href: '/dashboard/analytics', icon: TrendingUp, color: 'text-emerald-400' },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#0d0d14] border border-[#1e1e2e] hover:border-gray-600 transition-colors text-sm text-gray-400 hover:text-white"
              >
                <action.icon className={`w-4 h-4 ${action.color}`} />
                {action.label}
                <ArrowRight className="w-3 h-3 ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
