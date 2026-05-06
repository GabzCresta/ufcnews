'use client';

import { Loader2 } from 'lucide-react';
import type { WarRoomAgent } from '@/lib/war-room/types';
import { AgentAvatar } from './AgentAvatar';

export function AgentList({
  agents, activeAgent, selectedAgent, onSelect, onActivate,
}: {
  agents: WarRoomAgent[];
  activeAgent: string;
  selectedAgent: string | null;
  onSelect: (id: string) => void;
  onActivate: (id: string) => void;
}) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold px-2 mb-2">Equipe</p>
      {agents.map(agent => {
        const isActive = agent.id === activeAgent;
        const isSelected = agent.id === selectedAgent;
        const isRunning = agent.status === 'running';
        const xpPercent = agent.xp_to_next_level > 0
          ? Math.min(100, Math.round((agent.xp / agent.xp_to_next_level) * 100))
          : 0;

        return (
          <button
            key={agent.id}
            onClick={() => { onSelect(agent.id); onActivate(agent.id); }}
            className={`w-full text-left px-3 py-2.5 rounded-xl transition-all ${
              isSelected ? 'bg-[#1a1a2e] border border-ufc-red/20' :
              isActive ? 'bg-[#1a1a2e] border border-[#2a2a3a]' :
              'hover:bg-[#1a1a2e] border border-transparent'
            }`}
          >
            <div className="flex items-center gap-2.5">
              {/* Avatar */}
              <AgentAvatar agentId={agent.id} size="md" isRunning={isRunning} />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-white truncate">{agent.human_name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold"
                    style={{ backgroundColor: `${agent.color}15`, color: agent.color }}>
                    L{agent.agent_level}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <p className="text-[10px] text-gray-600 truncate flex-1">{agent.role}</p>
                  {agent.weekly_score > 0 && (
                    <span className={`text-[9px] font-bold ${
                      agent.weekly_score >= 4 ? 'text-emerald-400' :
                      agent.weekly_score >= 3 ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {agent.weekly_score.toFixed(1)}
                    </span>
                  )}
                  {agent.tasks_completed > 0 && (
                    <span className="text-[9px] text-gray-600">
                      {agent.tasks_completed}t
                    </span>
                  )}
                </div>

                {/* XP Bar */}
                <div className="mt-1 h-1 bg-[#1e1e2e] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${xpPercent}%`, backgroundColor: agent.color }}
                  />
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
