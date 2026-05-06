'use client';

import { PIPELINE_PHASES } from './types';
import type { AgentSession } from './types';

function getPhaseStatus(phase: typeof PIPELINE_PHASES[number], sessions: AgentSession[]): 'pending' | 'running' | 'completed' | 'failed' {
  const agentSessions = sessions.filter(s => (phase.agents as readonly string[]).includes(s.agentId));
  if (agentSessions.length === 0) return 'pending';
  if (agentSessions.some(s => s.status === 'failed')) return 'failed';
  if (agentSessions.every(s => s.status === 'completed')) return 'completed';
  if (agentSessions.some(s => s.status === 'running' || s.status === 'spawning')) return 'running';
  return 'pending';
}

export function PipelineProgress({ sessions }: { sessions: AgentSession[] }) {
  return (
    <div className="flex items-center justify-between px-4">
      {PIPELINE_PHASES.map((phase, i) => {
        const status = getPhaseStatus(phase, sessions);
        return (
          <div key={phase.id} className="flex items-center flex-1">
            {/* Phase dot + label */}
            <div className="flex flex-col items-center gap-1">
              <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                status === 'completed' ? 'bg-emerald-400 border-emerald-400' :
                status === 'running' ? 'bg-ufc-red border-ufc-red animate-pulse' :
                status === 'failed' ? 'bg-red-500 border-red-500' :
                'bg-transparent border-gray-600'
              }`} />
              <span className={`text-[10px] font-semibold uppercase whitespace-nowrap ${
                status === 'completed' ? 'text-emerald-400' :
                status === 'running' ? 'text-ufc-red' :
                status === 'failed' ? 'text-red-400' :
                'text-gray-600'
              }`}>
                {phase.label}
              </span>
            </div>
            {/* Connector line */}
            {i < PIPELINE_PHASES.length - 1 && (
              <div className={`flex-1 h-0.5 mx-2 mt-[-14px] transition-colors duration-300 ${
                status === 'completed' ? 'bg-emerald-400/40' : 'bg-[#1e1e2e]'
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
