'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  GitBranch, CheckCircle2, FileText, Swords, Scale, Trophy,
  RotateCcw, Play, Loader2, AlertTriangle, Terminal, Monitor, type LucideIcon,
} from 'lucide-react';
import { useAdminAuth } from '../../AdminAuthContext';
import { WarRoom } from '../war-room/WarRoom';
import { CeoReportList } from '../war-room/CeoReportCard';
import type { CeoReport } from '@/lib/war-room/persistence';

// ═══════════════════════════════════════════════════════════
// Pipeline Section — Three tabs: Pipeline + Entregas + Relatorios
// ═══════════════════════════════════════════════════════════

type Tab = 'pipeline' | 'entregas' | 'relatorios';

export function PipelineSection() {
  const [tab, setTab] = useState<Tab>('pipeline');
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <TabButton active={tab === 'pipeline'} onClick={() => setTab('pipeline')} icon={Monitor} label="Pipeline" />
        <TabButton active={tab === 'entregas'} onClick={() => setTab('entregas')} icon={CheckCircle2} label="Entregas" />
        <TabButton active={tab === 'relatorios'} onClick={() => setTab('relatorios')} icon={FileText} label="Relatorios" />
      </div>
      {tab === 'pipeline' && <WarRoom />}
      {tab === 'entregas' && <EntregasClientes />}
      {tab === 'relatorios' && <RelatoriosCeo />}
    </div>
  );
}

function RelatoriosCeo() {
  const { token } = useAdminAuth();
  const [reports, setReports] = useState<CeoReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    fetch('/api/admin/war-room/reports?limit=20', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.ok ? r.json() : [])
      .then(data => setReports(Array.isArray(data) ? data : []))
      .catch(() => setReports([]))
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 text-ufc-red animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-display text-white uppercase tracking-wider">Relatorios do CEO</h3>
        <span className="text-[10px] text-gray-600">{reports.length} relatorio{reports.length !== 1 ? 's' : ''}</span>
      </div>
      <CeoReportList reports={reports} />
    </div>
  );
}

function TabButton({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: LucideIcon; label: string }) {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${active ? 'bg-ufc-red/10 text-ufc-red border border-ufc-red/30' : 'neu-button text-gray-400 hover:text-white'}`}>
      <Icon className="w-4 h-4 inline mr-2" />{label}
    </button>
  );
}

// OpenClawTerminal now imported from ../openclaw-terminal/OpenClawTerminal

// ═══════════════════════════════════════════════════════════
// TAB 1: Pipeline AI
//
// 3 behaviors:
// a) On mount: check for existing execution → load logs + status
// b) On "Rodar": trigger new pipeline → stream logs
// c) On "Reset": cancel backend + clear frontend
// d) On "Confirmar Card": continue pipeline after HUMAN GATE
// ═══════════════════════════════════════════════════════════

interface LogEntry {
  ts: string;
  type: string;
  message: string;
}

type PipelineStatus = 'idle' | 'running' | 'completed' | 'failed' | 'waiting_confirmation';

function PipelineAI() {
  const { authFetch } = useAdminAuth();
  const [eventoNome, setEventoNome] = useState('');
  const [status, setStatus] = useState<PipelineStatus>('idle');
  const [executionId, setExecutionId] = useState<string | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [mounted, setMounted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs.length]);

  // ── Stream logs from SSE ──
  const streamLogs = useCallback(async (execId: string) => {
    try {
      const res = await authFetch(`/api/admin/pipeline/stream?execution_id=${execId}`);
      if (!res.ok || !res.body) return;

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const blocks = buffer.split('\n\n');
        buffer = blocks.pop() || '';

        for (const block of blocks) {
          const lines = block.trim().split('\n');
          let eventType = '';
          let eventData = '';
          for (const line of lines) {
            if (line.startsWith('event: ')) eventType = line.slice(7);
            if (line.startsWith('data: ')) eventData = line.slice(6);
          }
          if (!eventData) continue;
          try {
            const parsed = JSON.parse(eventData);
            if (eventType === 'status') {
              setStatus(parsed.status as PipelineStatus);
              if (parsed.status !== 'running' && parsed.status !== 'waiting_confirmation') return;
            }
            if (eventType === 'log') {
              setLogs(prev => [...prev, parsed]);
            }
          } catch { /* skip */ }
        }
      }
    } catch { /* stream ended */ }
  }, [authFetch]);

  // ── On mount: check for existing execution and reconnect SSE ──
  useEffect(() => {
    let cancelled = false;
    async function checkExisting() {
      try {
        const res = await authFetch('/api/admin/pipeline/trigger');
        if (!res.ok) return;
        const data = await res.json();
        const execs = data.executions || [];
        // Find any active execution
        const active = execs.find((e: { status: string }) =>
          e.status === 'running' || e.status === 'waiting_confirmation'
        );
        if (active && !cancelled) {
          setExecutionId(active.execution_id);
          setStatus(active.status as PipelineStatus);
          setEventoNome(active.evento_nome || '');
          setLogs(active.logs || []);
          // Reconnect SSE to receive new logs for active pipelines
          streamLogs(active.execution_id);
        }
      } catch { /* ignore */ }
      if (!cancelled) setMounted(true);
    }
    checkExisting();
    return () => { cancelled = true; };
  }, [authFetch, streamLogs]);

  // ── Trigger new pipeline ──
  const triggerPipeline = useCallback(async () => {
    if (!eventoNome.trim() || status === 'running') return;
    setStatus('running');
    setLogs([]);
    setExecutionId(null);

    try {
      const res = await authFetch('/api/admin/pipeline/trigger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ evento_nome: eventoNome.trim() }),
      });
      const data = await res.json();

      if (!res.ok) {
        setLogs([{ ts: new Date().toISOString(), type: 'error', message: data.error || 'Erro' }]);
        setStatus('failed');
        return;
      }

      setExecutionId(data.execution_id);
      streamLogs(data.execution_id);
    } catch {
      setLogs([{ ts: new Date().toISOString(), type: 'error', message: 'Conexao com servidor falhou' }]);
      setStatus('failed');
    }
  }, [eventoNome, status, authFetch, streamLogs]);

  // ── Reset: cancel backend + clear frontend ──
  const resetPipeline = useCallback(async () => {
    if (executionId) {
      await authFetch('/api/admin/pipeline/trigger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'reset', execution_id: executionId }),
      }).catch(() => {});
    }
    setStatus('idle');
    setExecutionId(null);
    setLogs([]);
    setEventoNome('');
  }, [executionId, authFetch]);

  // ── Confirm HUMAN GATE ──
  // SSE stream stays open — no need to reconnect after confirm
  const confirmCard = useCallback(async () => {
    if (!executionId) return;
    setStatus('running');
    setLogs(prev => [...prev, { ts: new Date().toISOString(), type: 'system', message: 'Card confirmado! Prosseguindo...' }]);

    await authFetch('/api/admin/pipeline/trigger', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'confirm', execution_id: executionId }),
    }).catch(() => {});
  }, [executionId, authFetch]);

  if (!mounted) return <div className="flex items-center justify-center h-32"><Loader2 className="w-5 h-5 animate-spin text-ufc-red" /></div>;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal className="h-5 w-5 text-ufc-red" />
          <h2 className="font-display text-2xl text-white tracking-wide">Pipeline de Analises</h2>
        </div>
        <button onClick={resetPipeline} className="neu-button px-3 py-2 text-sm text-gray-400 hover:text-ufc-red transition-colors flex items-center gap-2" title="Resetar pipeline">
          <RotateCcw className="w-4 h-4" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>
      <p className="text-sm text-gray-500">Orquestrador coordena 5 agentes. Voce so confirma o card.</p>

      {/* Input + Run */}
      <form onSubmit={(e) => { e.preventDefault(); triggerPipeline(); }} className="neu-card p-4 border border-[#1e1e2e]">
        <label className="text-xs text-gray-500 uppercase block mb-2">Nome do Evento</label>
        <div className="flex gap-3">
          <input
            type="text"
            value={eventoNome}
            onChange={(e) => setEventoNome(e.target.value)}
            placeholder="Ex: UFC Fight Night: Moicano vs Duncan"
            className="flex-1 bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:border-ufc-red/50 focus:outline-none transition-colors"
            disabled={status === 'running' || status === 'waiting_confirmation'}
          />
          <button
            type="submit"
            disabled={!eventoNome.trim() || status === 'running' || status === 'waiting_confirmation'}
            className="neu-button px-5 py-3 text-sm font-semibold text-ufc-red border border-ufc-red/30 hover:bg-ufc-red/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shrink-0"
          >
            {status === 'running' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            {status === 'running' ? 'Rodando...' : 'Rodar'}
          </button>
        </div>
      </form>

      {/* Status Bar */}
      {status !== 'idle' && (
        <div className={`neu-card p-4 border flex items-center justify-between ${
          status === 'running' ? 'border-ufc-red/30' :
          status === 'completed' ? 'border-emerald-500/30' :
          status === 'waiting_confirmation' ? 'border-yellow-500/30' :
          'border-red-500/30'
        }`}>
          <div className="flex items-center gap-3">
            {status === 'running' && <Loader2 className="w-5 h-5 text-ufc-red animate-spin" />}
            {status === 'completed' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            {status === 'waiting_confirmation' && <AlertTriangle className="w-5 h-5 text-yellow-400" />}
            {status === 'failed' && <AlertTriangle className="w-5 h-5 text-red-400" />}
            <div>
              <span className={`text-sm font-semibold ${
                status === 'running' ? 'text-ufc-red' :
                status === 'completed' ? 'text-emerald-400' :
                status === 'waiting_confirmation' ? 'text-yellow-400' :
                'text-red-400'
              }`}>
                {status === 'running' ? 'Agente rodando...' :
                 status === 'completed' ? 'Pipeline concluido!' :
                 status === 'waiting_confirmation' ? 'Confira o card acima e confirme' :
                 'Pipeline falhou'}
              </span>
              {executionId && <p className="text-[10px] text-gray-600 font-mono mt-0.5">{executionId}</p>}
            </div>
          </div>

          {/* Confirm Button */}
          {status === 'waiting_confirmation' && (
            <button onClick={confirmCard} className="neu-button px-4 py-2 text-sm font-semibold text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/10 transition-colors flex items-center gap-2 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
              Confirmar Card
            </button>
          )}
        </div>
      )}

      {/* Card Preview (Human Gate) */}
      {status === 'waiting_confirmation' && logs.length > 0 && (() => {
        const cardLog = [...logs].reverse().find(l => l.type === 'agent' && l.message.length > 200);
        if (!cardLog) return null;
        return (
          <div className="neu-card border border-yellow-500/20 overflow-hidden">
            <div className="px-4 py-2 border-b border-yellow-500/20 flex items-center gap-2 bg-yellow-500/5">
              <FileText className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-xs text-yellow-400 uppercase font-semibold">Card Preview</span>
            </div>
            <div className="bg-[#06060a] max-h-[400px] overflow-y-auto p-4 font-mono text-xs text-gray-300 whitespace-pre-wrap">
              {cardLog.message}
            </div>
          </div>
        );
      })()}

      {/* Log Console */}
      {logs.length > 0 && (
        <div className="neu-card border border-[#1e1e2e] overflow-hidden">
          <div className="px-4 py-2 border-b border-[#1e1e2e] flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-xs text-gray-500 uppercase font-semibold">Console</span>
            <span className="text-[10px] text-gray-600 ml-auto">{logs.length} logs</span>
          </div>
          <div className="bg-[#06060a] max-h-[500px] overflow-y-auto p-4 font-mono text-xs">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-3 py-0.5 leading-relaxed">
                <span className="text-gray-700 shrink-0 select-none">
                  {new Date(log.ts).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
                <span className={
                  log.type === 'error' ? 'text-red-400' :
                  log.type === 'cost' ? 'text-orange-400 font-semibold' :
                  log.type === 'tool' ? 'text-purple-400' :
                  log.type === 'system' ? 'text-blue-400' :
                  log.type === 'phase' ? 'text-ufc-red font-bold text-sm uppercase tracking-wide' :
                  log.type === 'info' ? 'text-gray-500' :
                  'text-gray-300'
                }>
                  {log.type === 'cost' ? '💰 ' : ''}{log.message}
                </span>
              </div>
            ))}
            {status === 'running' && (
              <div className="flex items-center gap-2 py-1 text-gray-600">
                <Loader2 className="w-3 h-3 animate-spin" />
                <span>Aguardando agente...</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>
      )}

      {/* Pipeline Summary (on completion) */}
      {status === 'completed' && logs.length > 0 && (() => {
        const costLogs = logs.filter(l => l.type === 'cost');
        const phaseLogs = logs.filter(l => l.type === 'phase');
        const errorLogs = logs.filter(l => l.type === 'error');
        return (
          <div className="neu-card border border-emerald-500/20 p-4">
            <h4 className="text-sm font-bold text-emerald-400 mb-3 uppercase tracking-wide flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Resumo do Pipeline
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="neu-inset rounded-lg p-3 text-center">
                <p className="text-[10px] text-gray-500 uppercase">Fases</p>
                <p className="text-lg font-bold text-blue-400">{phaseLogs.length}</p>
              </div>
              <div className="neu-inset rounded-lg p-3 text-center">
                <p className="text-[10px] text-gray-500 uppercase">Cost Logs</p>
                <p className="text-lg font-bold text-orange-400">{costLogs.length}</p>
              </div>
              <div className="neu-inset rounded-lg p-3 text-center">
                <p className="text-[10px] text-gray-500 uppercase">Warnings</p>
                <p className="text-lg font-bold text-red-400">{errorLogs.length}</p>
              </div>
            </div>
            {costLogs.length > 0 && (
              <div className="mt-3 space-y-1">
                {costLogs.map((cl, i) => (
                  <p key={i} className="text-xs text-orange-400/80 font-mono">{cl.message}</p>
                ))}
              </div>
            )}
          </div>
        );
      })()}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TAB 2: Entregas Clientes (preserved)
// ═══════════════════════════════════════════════════════════

interface PipelineItem { id: string; label: string; descricao: string; icon: LucideIcon; done: boolean; }

const ENTREGA_STEPS: Omit<PipelineItem, 'done'>[] = [
  { id: 'analise', label: 'Analise Pre-Fight', descricao: 'Analise completa do card enviada ao cliente', icon: FileText },
  { id: 'arena', label: 'Abertura do Arena', descricao: 'Liga aberta para espectadores do cliente', icon: Swords },
  { id: 'weighins', label: 'Analise Weigh-Ins', descricao: 'Analise pos pesagem enviada ao cliente', icon: Scale },
  { id: 'pos_card', label: 'Analise Pos Card', descricao: 'Analise pos evento + Creator Kit enviados', icon: Trophy },
];

const STORAGE_KEY = 'pipeline-clientes-checklist';

function getSegundaDaSemana(): string {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  return d.toISOString().split('T')[0];
}

function loadState(): Record<string, boolean> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as { semana: string; checks: Record<string, boolean> };
    if (parsed.semana !== getSegundaDaSemana()) return {};
    return parsed.checks;
  } catch { return {}; }
}

function saveState(checks: Record<string, boolean>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ semana: getSegundaDaSemana(), checks }));
}

function EntregasClientes() {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [m, setM] = useState(false);
  useEffect(() => { setChecks(loadState()); setM(true); }, []);
  const toggle = useCallback((id: string) => { setChecks(prev => { const n = { ...prev, [id]: !prev[id] }; saveState(n); return n; }); }, []);
  const resetAll = useCallback(() => { saveState({}); setChecks({}); }, []);
  const items: PipelineItem[] = ENTREGA_STEPS.map(s => ({ ...s, done: checks[s.id] || false }));
  const done = items.filter(i => i.done).length;
  const pct = Math.round((done / items.length) * 100);
  if (!m) return null;
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2"><GitBranch className="h-5 w-5 text-ufc-red" /><h2 className="font-display text-2xl text-white tracking-wide">Pipeline Clientes</h2></div>
          <p className="text-sm text-gray-500">Checklist semanal de entregas. Reseta toda segunda.</p>
        </div>
        <button onClick={resetAll} className="neu-button px-3 py-2 text-sm text-gray-400 hover:text-ufc-red transition-colors"><RotateCcw className="w-4 h-4" /></button>
      </div>
      <div className="neu-card p-5 border border-ufc-red/10">
        <div className="flex items-center justify-between mb-3">
          <div><p className="text-xs text-gray-500 uppercase mb-1">Semana Atual</p><p className="text-white font-semibold">{new Date(getSegundaDaSemana() + 'T12:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })} - {(() => { const d = new Date(getSegundaDaSemana() + 'T12:00:00'); d.setDate(d.getDate() + 6); return d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' }); })()}</p></div>
          <div className="text-right"><p className="text-2xl font-bold text-white">{done}/{items.length}</p><p className="text-xs text-gray-500">concluidos</p></div>
        </div>
        <div className="w-full h-3 bg-[#1e1e2e] rounded-full overflow-hidden"><div className={`h-full rounded-full transition-all duration-500 ${pct === 100 ? 'bg-emerald-500' : 'bg-ufc-red'}`} style={{ width: `${pct}%` }} /></div>
        {pct === 100 && <p className="text-xs text-emerald-400 font-semibold mt-2 text-center">Todas as entregas concluidas!</p>}
      </div>
      <div className="space-y-3">
        {items.map((item, idx) => { const Icon = item.icon; return (
          <button key={item.id} onClick={() => toggle(item.id)} className={`w-full text-left flex items-start gap-4 transition-all ${item.done ? 'opacity-80' : ''}`}>
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${item.done ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-[#2a2a3a] bg-[#12121a] hover:border-ufc-red/30'}`}>
                {item.done ? <CheckCircle2 className="w-6 h-6 text-emerald-400" /> : <Icon className="w-5 h-5 text-gray-500" />}
              </div>
              {idx < items.length - 1 && <div className={`w-0.5 h-6 mt-1 transition-colors ${item.done ? 'bg-emerald-500/30' : 'bg-[#1e1e2e]'}`} />}
            </div>
            <div className={`neu-card p-4 flex-1 border transition-all duration-300 ${item.done ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-[#1e1e2e] hover:border-ufc-red/20'}`}>
              <div className="flex items-center justify-between mb-1">
                <h4 className={`text-sm font-semibold ${item.done ? 'text-emerald-300' : 'text-white'}`}>{item.label}</h4>
                <span className={`text-[10px] font-bold uppercase ${item.done ? 'text-emerald-400' : 'text-gray-600'}`}>{item.done ? 'CONCLUIDO' : 'PENDENTE'}</span>
              </div>
              <p className={`text-xs ${item.done ? 'text-gray-500 line-through' : 'text-gray-400'}`}>{item.descricao}</p>
            </div>
          </button>
        ); })}
      </div>
      <div className="neu-inset p-4 text-center"><p className="text-[10px] text-gray-600 uppercase tracking-wider">Clique em cada etapa para marcar como concluida. Reseta toda segunda.</p></div>
    </div>
  );
}
