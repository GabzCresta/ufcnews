'use client';

import { useState } from 'react';
import {
  Brain, CheckCircle2, XCircle, ChevronDown, ChevronUp,
  Lightbulb, BarChart3, AlertTriangle,
} from 'lucide-react';
import type { RecapModelAutopsy, RecapModelCall } from '@/types/recap';

const errorTypeLabels: Record<string, { label: string; color: string }> = {
  stylistic_misread: { label: 'Style Misread', color: 'bg-purple-500/15 text-purple-400' },
  overvalued_stats: { label: 'Overvalued Stats', color: 'bg-blue-500/15 text-blue-400' },
  age_factor: { label: 'Age Factor', color: 'bg-orange-500/15 text-orange-400' },
  momentum_miss: { label: 'Momentum Miss', color: 'bg-ufc-red/15 text-ufc-red' },
  method_miss: { label: 'Method Miss', color: 'bg-ufc-gold/15 text-ufc-gold' },
  venue_factor: { label: 'Venue Factor', color: 'bg-emerald-500/15 text-emerald-400' },
};

function CallCard({ call, correct }: { call: RecapModelCall; correct: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-xl bg-[#0e0e0e] border p-3 cursor-pointer transition-all duration-200 hover:border-neutral-700 ${
        correct ? 'border-emerald-500/15' : 'border-red-500/15'
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-2">
        {correct
          ? <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          : <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
        }
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm text-white font-medium">{call.fight}</p>
            <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-[9px] text-neutral-400">{call.confidence_label}</span>
            {call.error_type && (
              <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${errorTypeLabels[call.error_type]?.color || 'bg-neutral-800 text-neutral-400'}`}>
                {errorTypeLabels[call.error_type]?.label || call.error_type}
              </span>
            )}
          </div>
          <div className="mt-1 flex gap-4 text-[10px] text-neutral-500">
            <span>Predicted: {call.predicted}</span>
            <span>Actual: {call.actual}</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          {expanded ? <ChevronUp className="h-3.5 w-3.5 text-neutral-600" /> : <ChevronDown className="h-3.5 w-3.5 text-neutral-600" />}
        </div>
      </div>
      {expanded && (
        <p className="mt-3 ml-6 text-xs leading-relaxed text-neutral-400 border-t border-[#1a1a1a] pt-3">
          {call.analysis}
        </p>
      )}
    </div>
  );
}

export function ModelAutopsySection({ data }: { data: RecapModelAutopsy }) {
  return (
    <section className="rounded-2xl bg-[#111111] border border-[#1a1a1a] p-6 md:p-8 shadow-[6px_6px_14px_rgba(0,0,0,0.5),-6px_-6px_14px_rgba(255,255,255,0.025)]">
      {/* Header + Grade */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-ufc-red/20 to-purple-500/20">
            <Brain className="h-5 w-5 text-ufc-red" />
          </div>
          <div>
            <p className="font-display text-sm uppercase text-white">Model Autopsy</p>
            <p className="text-[10px] text-neutral-500">Combat Sports Intelligence Engine v1</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-display text-3xl text-ufc-gold drop-shadow-[0_0_8px_rgba(201,176,55,0.4)]">
            {data.overall_grade}
          </p>
          <p className="text-[9px] text-neutral-500">{data.grade_context}</p>
        </div>
      </div>

      {/* Confidence Calibration */}
      <div className="rounded-xl bg-[#0c0c0c] border border-[#1a1a1a] p-4 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="h-4 w-4 text-ufc-red/70" />
          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Confidence Calibration</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-[#111111] p-3 text-center">
            <p className="text-[9px] uppercase text-neutral-600">High Confidence</p>
            <p className="font-display text-lg text-emerald-400">{data.confidence_calibration.high_confidence_record}</p>
          </div>
          <div className="rounded-lg bg-[#111111] p-3 text-center">
            <p className="text-[9px] uppercase text-neutral-600">Medium Confidence</p>
            <p className="font-display text-lg text-ufc-gold">{data.confidence_calibration.medium_confidence_record}</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-neutral-400 leading-relaxed">{data.confidence_calibration.insight}</p>
      </div>

      {/* Correct Calls */}
      <div className="mb-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/70 mb-2">
          <CheckCircle2 className="mr-1 inline h-3 w-3" />
          Correct Calls ({data.correct_calls.length})
        </p>
        <div className="space-y-2">
          {data.correct_calls.map((call, i) => (
            <CallCard key={i} call={call} correct />
          ))}
        </div>
      </div>

      {/* Wrong Calls */}
      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-wider text-red-400/70 mb-2">
          <XCircle className="mr-1 inline h-3 w-3" />
          Misses ({data.wrong_calls.length})
        </p>
        <div className="space-y-2">
          {data.wrong_calls.map((call, i) => (
            <CallCard key={i} call={call} correct={false} />
          ))}
        </div>
      </div>

      {/* Patterns Learned */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="h-4 w-4 text-ufc-gold/70" />
          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Patterns Learned</p>
        </div>
        <div className="space-y-2">
          {data.patterns_learned.map((pattern, i) => (
            <div key={i} className="rounded-xl bg-[#0c0c0c] border border-ufc-gold/10 p-4">
              <p className="text-sm text-white font-medium">{pattern.pattern}</p>
              <p className="mt-1 text-xs text-neutral-500">{pattern.evidence}</p>
              <div className="mt-2 flex items-start gap-1.5">
                <AlertTriangle className="h-3 w-3 text-ufc-gold flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-ufc-gold/80">{pattern.adjustment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
