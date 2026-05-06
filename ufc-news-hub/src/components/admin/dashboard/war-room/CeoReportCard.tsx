'use client';

import { Clock, DollarSign, Zap, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { AgentAvatar } from './AgentAvatar';
import type { CeoReport } from '@/lib/war-room/persistence';

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function renderMarkdown(text: string): string {
  return text
    .replace(/^### (.+)$/gm, '<h3 class="text-sm font-bold text-white uppercase tracking-wide mt-4 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-base font-display text-ufc-red uppercase tracking-wider mt-5 mb-3">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.every(c => c.trim().match(/^-+$/))) return '';
      const isHeader = cells.some(c => c.trim() === 'Agente' || c.trim() === 'Nota');
      const tag = isHeader ? 'th' : 'td';
      const cls = isHeader ? 'text-[10px] text-gray-500 uppercase font-semibold px-2 py-1 border-b border-[#2a2a3a]' : 'text-xs text-gray-300 px-2 py-1.5 border-b border-[#1a1a2a]';
      const row = cells.map(c => `<${tag} class="${cls}">${c.trim()}</${tag}>`).join('');
      return `<tr>${row}</tr>`;
    })
    .replace(/(<tr>[^]*?<\/tr>\n?)+/g, (match) => `<table class="w-full text-left mb-3">${match}</table>`)
    .replace(/^- (.+)$/gm, '<li class="text-xs text-gray-400 ml-4 list-disc mb-1">$1</li>')
    .replace(/(<li[^]*?<\/li>\n?)+/g, (match) => `<ul class="mb-3">${match}</ul>`)
    .replace(/^\d+\. (.+)$/gm, '<li class="text-xs text-gray-400 ml-4 list-decimal mb-1">$1</li>')
    .replace(/^(?!<[hultd])(.+)$/gm, (_, text) => text.trim() ? `<p class="text-xs text-gray-400 mb-2">${text}</p>` : '');
}

export function CeoReportCard({ report, defaultExpanded = false }: { report: CeoReport; defaultExpanded?: boolean }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="neu-card border border-[#1e1e2e] overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#12121c] transition-colors"
      >
        <AgentAvatar agentId="ceo" size="md" />
        <div className="flex-1 text-left min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white truncate">
              {report.evento_nome || 'Pipeline Report'}
            </span>
            {report.pipeline_status && (
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase ${
                report.pipeline_status === 'concluido' ? 'bg-emerald-500/10 text-emerald-400' :
                report.pipeline_status === 'erro' ? 'bg-red-500/10 text-red-400' :
                'bg-yellow-500/10 text-yellow-400'
              }`}>
                {report.pipeline_status}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-[10px] text-gray-600 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {report.created_at ? formatDate(report.created_at) : '-'}
            </span>
            {report.pipeline_duration_min != null && report.pipeline_duration_min > 0 && (
              <span className="text-[10px] text-purple-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {report.pipeline_duration_min}min
              </span>
            )}
            {report.pipeline_cost != null && report.pipeline_cost > 0 && (
              <span className="text-[10px] text-orange-400 flex items-center gap-1">
                <DollarSign className="w-3 h-3" />
                ${report.pipeline_cost.toFixed(2)}
              </span>
            )}
            <span className="text-[10px] text-blue-400 flex items-center gap-1">
              <Zap className="w-3 h-3" />
              {((report.tokens_input + report.tokens_output) / 1000).toFixed(1)}k tokens
            </span>
          </div>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 text-gray-600 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-600 shrink-0" />}
      </button>

      {/* Report Body */}
      {expanded && (
        <div className="border-t border-[#1e1e2e] px-5 py-4 bg-[#06060a]">
          <div
            className="prose prose-invert prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(report.report_text) }}
          />
        </div>
      )}
    </div>
  );
}

export function CeoReportList({ reports }: { reports: CeoReport[] }) {
  if (!reports || reports.length === 0) {
    return (
      <div className="neu-inset rounded-xl p-8 text-center">
        <AgentAvatar agentId="ceo" size="lg" />
        <p className="text-sm text-gray-500 mt-3">Nenhum relatorio ainda.</p>
        <p className="text-xs text-gray-600 mt-1">O CEO gera relatorios automaticamente ao final de cada pipeline.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {reports.map((report, i) => (
        <CeoReportCard key={report.id} report={report} defaultExpanded={i === 0} />
      ))}
    </div>
  );
}
