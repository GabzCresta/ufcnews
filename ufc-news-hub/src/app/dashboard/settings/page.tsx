'use client';

import { SectionHeader } from '@/components/admin/shared';
import {
  Settings,
  Clock,
  ExternalLink,
  Monitor,
  Database,
  Server,
  Key,
} from 'lucide-react';

const CRON_JOBS = [
  { path: '/api/cron', schedule: '3x/dia', descricao: 'RSS sync + agregacao de noticias' },
  { path: '/api/arena/cron/scoring', schedule: '5min (Sex-Dom)', descricao: 'Calcular pontuacao Arena' },
  { path: '/api/cron/card-monitor', schedule: '22h (Seg-Sex)', descricao: 'Verificar mudancas no card UFC' },
  { path: '/api/arena/cron/pre-evento', schedule: '1h (Sex-Sab)', descricao: 'Setup pre-evento Arena' },
  { path: '/api/arena/cron/pos-evento', schedule: 'Dom 10h', descricao: 'Processamento pos-evento' },
  { path: '/api/arena/cron/lembrete-picks', schedule: 'Qua 18h', descricao: 'Lembrete de picks' },
  { path: '/api/arena/cron/limpeza', schedule: 'Seg 3h', descricao: 'Limpeza de dados' },
];

const ENV_KEYS = [
  { name: 'DATABASE_URL', status: 'ok', descricao: 'PostgreSQL local (Hostinger)' },
  { name: 'ANTHROPIC_API_KEY', status: 'missing', descricao: 'Chave API da Anthropic (Claude)' },
  { name: 'ADMIN_PASSWORD', status: 'ok', descricao: 'Senha do dashboard admin' },
  { name: 'CRON_SECRET', status: 'missing', descricao: 'Secret para cron jobs' },
  { name: 'RSS_FEED_URL', status: 'missing', descricao: 'URL do feed RSS' },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        icon={Settings}
        title="Configuracoes"
        description="Infraestrutura, cron jobs e variaves de ambiente"
      />

      {/* Site Info */}
      <div className="neu-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ufc-red/10 rounded-lg flex items-center justify-center">
            <Monitor className="w-5 h-5 text-ufc-red" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Site em Producao</h3>
            <p className="text-xs text-gray-500">crenas.site (Hostinger)</p>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { href: 'https://crenas.site', label: 'Landing Page (Cliente)', path: 'crenas.site' },
            { href: 'https://crenas.site/pt/app', label: 'Site Original (Dev)', path: '/pt/app' },
            { href: 'https://crenas.site/pt/arena', label: 'Arena (Funcional)', path: '/pt/arena' },
            { href: 'https://crenas.site/pt/analises', label: 'Analises', path: '/pt/analises' },
            { href: 'https://crenas.site/pt/analise/moicano-vs-duncan', label: 'Analise: Moicano vs Duncan', path: '/pt/analise/moicano-vs-duncan' },
            { href: 'https://crenas.site/dashboard', label: 'Dashboard Admin', path: '/dashboard' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-button px-4 py-3 flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm"
            >
              <span className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                {link.label}
              </span>
              <code className="text-[10px] text-gray-500 font-mono">{link.path}</code>
            </a>
          ))}
        </div>
      </div>

      {/* Database */}
      <div className="neu-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Banco de Dados</h3>
            <p className="text-xs text-gray-500">PostgreSQL 16 local</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="neu-inset p-3">
            <p className="text-[10px] text-gray-500 uppercase">Host</p>
            <p className="text-xs text-white font-mono">localhost:5432</p>
          </div>
          <div className="neu-inset p-3">
            <p className="text-[10px] text-gray-500 uppercase">Database</p>
            <p className="text-xs text-white font-mono">ufc_news_hub</p>
          </div>
          <div className="neu-inset p-3">
            <p className="text-[10px] text-gray-500 uppercase">Tabelas</p>
            <p className="text-xs text-white font-mono">44</p>
          </div>
          <div className="neu-inset p-3">
            <p className="text-[10px] text-gray-500 uppercase">pgAdmin</p>
            <a href="https://crenas.site/pgadmin4/" target="_blank" rel="noopener noreferrer" className="text-xs text-ufc-red hover:underline">Abrir pgAdmin</a>
          </div>
        </div>
      </div>

      {/* Infra */}
      <div className="neu-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
            <Server className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Infraestrutura</h3>
            <p className="text-xs text-gray-500">Stack tecnica</p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { label: 'Framework', value: 'Next.js 15' },
            { label: 'Runtime', value: 'Node.js 20' },
            { label: 'ORM', value: 'Prisma 7' },
            { label: 'Hosting', value: 'Hostinger VPS' },
            { label: 'SSL', value: "Let's Encrypt" },
            { label: 'Process', value: 'PM2' },
            { label: 'Proxy', value: 'Nginx' },
            { label: 'AI', value: 'Claude API' },
          ].map((item) => (
            <div key={item.label} className="neu-inset p-3">
              <p className="text-[10px] text-gray-500 uppercase">{item.label}</p>
              <p className="text-xs text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Environment Variables */}
      <div className="neu-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
            <Key className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Variaveis de Ambiente</h3>
            <p className="text-xs text-gray-500">Status das chaves configuradas</p>
          </div>
        </div>
        <div className="space-y-2">
          {ENV_KEYS.map((env) => (
            <div key={env.name} className="neu-inset p-3 flex items-center justify-between">
              <div>
                <code className="text-xs text-white font-mono">{env.name}</code>
                <p className="text-[10px] text-gray-500 mt-0.5">{env.descricao}</p>
              </div>
              <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                env.status === 'ok'
                  ? 'bg-emerald-400/10 text-emerald-400'
                  : 'bg-red-400/10 text-red-400'
              }`}>
                {env.status === 'ok' ? 'Configurado' : 'Faltando'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cron Jobs */}
      <div className="neu-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Cron Jobs</h3>
            <p className="text-xs text-gray-500">{CRON_JOBS.length} jobs configurados</p>
          </div>
        </div>
        <div className="space-y-2">
          {CRON_JOBS.map((job) => (
            <div key={job.path} className="neu-inset p-3 flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <code className="text-xs text-ufc-red font-mono block truncate">{job.path}</code>
                <p className="text-xs text-gray-400 mt-1">{job.descricao}</p>
              </div>
              <code className="text-[10px] text-gray-500 font-mono shrink-0 bg-[#0a0a0f] px-2 py-1 rounded">
                {job.schedule}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
