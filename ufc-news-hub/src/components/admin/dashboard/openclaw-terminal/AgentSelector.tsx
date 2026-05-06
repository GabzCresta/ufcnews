'use client';

import { Bot } from 'lucide-react';
import type { AgentInfo } from './types';

export function AgentSelector({ agents, activeAgent, onChange, disabled }: {
  agents: AgentInfo[];
  activeAgent: string;
  onChange: (id: string) => void;
  disabled: boolean;
}) {
  return (
    <div className="flex items-center gap-3 px-1">
      <Bot className="w-4 h-4 text-gray-500 shrink-0" />
      <select
        value={activeAgent}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled || agents.length === 0}
        className="flex-1 bg-[#0a0a0f] border border-[#2a2a3a] rounded-xl px-3 py-2 text-sm text-white
          focus:border-ufc-red/50 focus:outline-none transition-colors
          disabled:opacity-40 disabled:cursor-not-allowed
          appearance-none cursor-pointer"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23666\' stroke-width=\'2\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
      >
        {agents.length === 0 && <option value="">Carregando agentes...</option>}
        {agents.map(a => (
          <option key={a.id} value={a.id}>{a.id}</option>
        ))}
      </select>
    </div>
  );
}
