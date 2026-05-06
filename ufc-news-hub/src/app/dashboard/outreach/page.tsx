'use client';

import { useEffect, useMemo, useState } from 'react';
import { SectionHeader } from '@/components/admin/shared';
import {
  Send,
  Star,
  ExternalLink,
  Copy,
  Check,
  AlertTriangle,
  Filter,
  Trash2,
  StickyNote,
  Mail,
} from 'lucide-react';
import {
  CREATORS,
  STAGE_OPTIONS,
  DM_TEMPLATE,
  DM_TIPS,
  type Creator,
  type Confidence,
  type Stage,
} from './data';

const STORAGE_KEY = 'crenas-outreach-tracker-v1';

interface TrackerEntry {
  stage: Stage;
  notes?: string;
}

type TrackerState = Record<number, TrackerEntry>;

const CONFIDENCE_BADGE: Record<Confidence, { label: string; color: string }> = {
  HIGH: { label: 'High', color: 'bg-emerald-500/10 text-emerald-400' },
  MEDIUM: { label: 'Medium', color: 'bg-yellow-500/10 text-yellow-400' },
  LOW: { label: 'Low', color: 'bg-orange-500/10 text-orange-400' },
  NOT_FOUND: { label: 'No IG', color: 'bg-red-500/10 text-red-400' },
};

function loadTracker(): TrackerState {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as TrackerState;
  } catch {
    return {};
  }
}

function saveTracker(state: TrackerState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export default function OutreachPage() {
  const [tracker, setTracker] = useState<TrackerState>({});
  const [hydrated, setHydrated] = useState(false);
  const [stageFilter, setStageFilter] = useState<Stage | 'all' | 'untouched'>('all');
  const [confidenceFilter, setConfidenceFilter] = useState<Confidence | 'all'>('all');
  const [showPriorityFirst, setShowPriorityFirst] = useState(true);
  const [copied, setCopied] = useState(false);
  const [editingNote, setEditingNote] = useState<number | null>(null);

  useEffect(() => {
    setTracker(loadTracker());
    setHydrated(true);
  }, []);

  function updateStage(id: number, stage: Stage) {
    setTracker((prev) => {
      const next = { ...prev, [id]: { ...prev[id], stage } };
      saveTracker(next);
      return next;
    });
  }

  function updateNote(id: number, notes: string) {
    setTracker((prev) => {
      const existing = prev[id] ?? { stage: 'cold' as Stage };
      const next = { ...prev, [id]: { ...existing, notes } };
      saveTracker(next);
      return next;
    });
  }

  function clearStage(id: number) {
    setTracker((prev) => {
      const next = { ...prev };
      delete next[id];
      saveTracker(next);
      return next;
    });
  }

  function copyTemplate() {
    navigator.clipboard.writeText(DM_TEMPLATE);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const stats = useMemo(() => {
    const total = CREATORS.length;
    const counts: Record<Stage, number> = {
      cold: 0,
      replied: 0,
      sample_sent: 0,
      call_booked: 0,
      kit_shipped: 0,
      passed: 0,
    };
    let dmsSent = 0;
    for (const creator of CREATORS) {
      const entry = tracker[creator.id];
      if (entry) {
        counts[entry.stage] += 1;
        if (entry.stage !== 'cold') dmsSent += 1;
      } else {
        counts.cold += 1;
      }
    }
    return { total, dmsSent, counts };
  }, [tracker]);

  const filteredCreators = useMemo(() => {
    let list = [...CREATORS];

    if (stageFilter === 'untouched') {
      list = list.filter((c) => !tracker[c.id]);
    } else if (stageFilter !== 'all') {
      list = list.filter((c) => tracker[c.id]?.stage === stageFilter);
    }

    if (confidenceFilter !== 'all') {
      list = list.filter((c) => c.confidence === confidenceFilter);
    }

    if (showPriorityFirst) {
      list.sort((a, b) => {
        if (a.isPriority && !b.isPriority) return -1;
        if (!a.isPriority && b.isPriority) return 1;
        return 0;
      });
    }

    return list;
  }, [stageFilter, confidenceFilter, showPriorityFirst, tracker]);

  return (
    <div className="space-y-6">
      <SectionHeader
        icon={Send}
        title="Outreach"
        description="Creator DM tracker — handles verificados, template e progresso. State salvo no browser."
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        <div className="neu-card p-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Total</p>
          <p className="text-2xl text-white font-semibold mt-1">{stats.total}</p>
        </div>
        <div className="neu-card p-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-wider">DMs Sent</p>
          <p className="text-2xl text-ufc-red font-semibold mt-1">{hydrated ? stats.dmsSent : '—'}</p>
        </div>
        {STAGE_OPTIONS.map((stage) => (
          <div key={stage.value} className="neu-card p-4">
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">{stage.label}</p>
            <p className="text-2xl text-white font-semibold mt-1">
              {hydrated ? stats.counts[stage.value] : '—'}
            </p>
          </div>
        ))}
      </div>

      {/* DM Template */}
      <div className="neu-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-ufc-red/10 rounded-lg flex items-center justify-center">
            <Send className="w-5 h-5 text-ufc-red" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold">DM Template</h3>
            <p className="text-xs text-gray-500">Sem link na primeira mensagem</p>
          </div>
          <button
            onClick={copyTemplate}
            className="neu-button px-3 py-2 flex items-center gap-2 text-xs text-gray-300 hover:text-white"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <div className="neu-inset p-4 mb-4">
          <p className="text-sm text-gray-300 leading-relaxed font-mono whitespace-pre-wrap">
            {DM_TEMPLATE}
          </p>
        </div>
        <ul className="space-y-1.5">
          {DM_TIPS.map((tip) => (
            <li key={tip} className="text-xs text-gray-400 flex items-start gap-2">
              <span className="text-ufc-red mt-0.5">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Handle warnings */}
      <div className="neu-card p-6 border border-yellow-500/20">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Handles tricky</h3>
            <p className="text-xs text-gray-500">Pontuacao errada = DM pra conta errada</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
          {[
            '@mattybetss (2 esses)',
            '@jaidencablee (2 ees)',
            '@mmauncensored__ (2 underscores)',
            '@freak.mma (ponto)',
            '@redcorner.mma (ponto)',
            '@unforgettable.mma (ponto)',
            '@lucrative.james (ponto)',
            '@fullsend_mma (underscore)',
            '@5th_round (underscore)',
            '@ufc_picker (underscore)',
            '@mma_experts (underscore)',
            '@tony_has_died (underscores)',
          ].map((handle) => (
            <code key={handle} className="text-yellow-400 font-mono bg-[#0a0a0f] px-2 py-1 rounded">
              {handle}
            </code>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="neu-card p-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Filter className="w-4 h-4" />
            <span>Stage:</span>
          </div>
          {(
            [
              { value: 'all', label: 'All' },
              { value: 'untouched', label: 'Untouched' },
              ...STAGE_OPTIONS.map((s) => ({ value: s.value, label: s.label })),
            ] as const
          ).map((opt) => (
            <button
              key={opt.value}
              onClick={() => setStageFilter(opt.value)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                stageFilter === opt.value
                  ? 'bg-ufc-red/15 text-ufc-red border border-ufc-red/30'
                  : 'bg-[#1a1a2e] text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 flex-wrap mt-3 pt-3 border-t border-[#1e1e2e]">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Confidence:</span>
          </div>
          {(['all', 'HIGH', 'MEDIUM', 'LOW', 'NOT_FOUND'] as const).map((value) => (
            <button
              key={value}
              onClick={() => setConfidenceFilter(value)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                confidenceFilter === value
                  ? 'bg-ufc-red/15 text-ufc-red border border-ufc-red/30'
                  : 'bg-[#1a1a2e] text-gray-400 hover:text-white border border-transparent'
              }`}
            >
              {value === 'all' ? 'All' : CONFIDENCE_BADGE[value].label}
            </button>
          ))}

          <button
            onClick={() => setShowPriorityFirst((v) => !v)}
            className={`ml-auto px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1.5 ${
              showPriorityFirst
                ? 'bg-ufc-gold/15 text-ufc-gold border border-ufc-gold/30'
                : 'bg-[#1a1a2e] text-gray-400 hover:text-white border border-transparent'
            }`}
          >
            <Star className="w-3.5 h-3.5" />
            Priority first
          </button>
        </div>
      </div>

      {/* Creator list */}
      <div className="space-y-2">
        {filteredCreators.map((creator) => (
          <CreatorRow
            key={creator.id}
            creator={creator}
            entry={tracker[creator.id]}
            isEditingNote={editingNote === creator.id}
            onStageChange={(stage) => updateStage(creator.id, stage)}
            onNoteChange={(notes) => updateNote(creator.id, notes)}
            onClear={() => clearStage(creator.id)}
            onToggleNote={() => setEditingNote(editingNote === creator.id ? null : creator.id)}
          />
        ))}
        {filteredCreators.length === 0 && (
          <div className="neu-card p-8 text-center">
            <p className="text-sm text-gray-500">Nenhum criador com esses filtros</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface CreatorRowProps {
  creator: Creator;
  entry: TrackerEntry | undefined;
  isEditingNote: boolean;
  onStageChange: (stage: Stage) => void;
  onNoteChange: (notes: string) => void;
  onClear: () => void;
  onToggleNote: () => void;
}

function CreatorRow({
  creator,
  entry,
  isEditingNote,
  onStageChange,
  onNoteChange,
  onClear,
  onToggleNote,
}: CreatorRowProps) {
  const currentStage = entry?.stage ?? 'cold';
  const stageMeta = STAGE_OPTIONS.find((s) => s.value === currentStage);
  const confidenceMeta = CONFIDENCE_BADGE[creator.confidence];
  const userNote = entry?.notes ?? '';

  return (
    <div className="neu-card p-4">
      <div className="flex items-center gap-3 flex-wrap">
        {/* Priority star */}
        {creator.isPriority && (
          <Star className="w-4 h-4 text-ufc-gold shrink-0 fill-ufc-gold" />
        )}

        {/* Name + handle */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-white font-medium">{creator.name}</span>
            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${confidenceMeta.color}`}>
              {confidenceMeta.label}
            </span>
          </div>
          {creator.igHandle && creator.igUrl ? (
            <a
              href={creator.igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-ufc-red font-mono inline-flex items-center gap-1 mt-0.5"
            >
              {creator.igHandle}
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="text-xs text-gray-600 italic">no IG</span>
          )}
          {creator.notes && (
            <p className="text-[11px] text-gray-500 mt-1">{creator.notes}</p>
          )}
        </div>

        {/* YT link */}
        {creator.ytUrl && (
          <a
            href={creator.ytUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-gray-500 hover:text-gray-300 px-2 py-1 rounded bg-[#1a1a2e] flex items-center gap-1 shrink-0"
          >
            YT
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        )}

        {/* Email link */}
        {creator.email && (
          <a
            href={`mailto:${creator.email}`}
            className="text-[10px] text-emerald-400 hover:text-emerald-300 px-2 py-1 rounded bg-emerald-500/10 flex items-center gap-1 shrink-0"
            title={creator.email}
          >
            <Mail className="w-3 h-3" />
            Email
          </a>
        )}

        {/* Stage selector */}
        <select
          value={currentStage}
          onChange={(e) => onStageChange(e.target.value as Stage)}
          disabled={!creator.igHandle && !creator.email && !creator.ytUrl}
          className={`text-xs px-2 py-1.5 rounded-lg border-0 font-medium uppercase tracking-wider shrink-0 disabled:opacity-30 ${stageMeta?.color ?? ''}`}
        >
          {STAGE_OPTIONS.map((stage) => (
            <option key={stage.value} value={stage.value} className="bg-[#0d0d14]">
              {stage.label}
            </option>
          ))}
        </select>

        {/* Note toggle */}
        <button
          onClick={onToggleNote}
          className={`p-1.5 rounded-lg shrink-0 ${
            userNote ? 'text-ufc-gold bg-ufc-gold/10' : 'text-gray-500 hover:text-gray-300 bg-[#1a1a2e]'
          }`}
          title="Note"
        >
          <StickyNote className="w-4 h-4" />
        </button>

        {/* Clear */}
        {entry && (
          <button
            onClick={onClear}
            className="p-1.5 rounded-lg text-gray-500 hover:text-red-400 bg-[#1a1a2e] shrink-0"
            title="Reset"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Note editor */}
      {isEditingNote && (
        <div className="mt-3 pt-3 border-t border-[#1e1e2e]">
          <textarea
            value={userNote}
            onChange={(e) => onNoteChange(e.target.value)}
            placeholder="Note pra essa outreach..."
            className="w-full bg-[#0a0a0f] text-sm text-white p-2 rounded border border-[#1e1e2e] focus:border-ufc-red/40 focus:outline-none resize-none"
            rows={2}
          />
        </div>
      )}
      {!isEditingNote && userNote && (
        <p className="text-xs text-gray-400 mt-2 italic">&ldquo;{userNote}&rdquo;</p>
      )}
    </div>
  );
}
