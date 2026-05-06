'use client';

import { Loader2 } from 'lucide-react';
import { getAgentConfig } from './agent-config';

interface AgentAvatarProps {
  agentId: string;
  size?: 'sm' | 'md' | 'lg';
  isRunning?: boolean;
}

const SIZES = {
  sm: { box: 'h-6 w-6', loader: 'w-3 h-3' },
  md: { box: 'h-8 w-8', loader: 'w-4 h-4' },
  lg: { box: 'h-10 w-10', loader: 'w-5 h-5' },
};

export function AgentAvatar({ agentId, size = 'md', isRunning = false }: AgentAvatarProps) {
  const config = getAgentConfig(agentId);
  const s = SIZES[size];

  if (isRunning) {
    return (
      <div
        className={`${s.box} rounded-full flex items-center justify-center border-2 shrink-0`}
        style={{ backgroundColor: `${config.color}20`, borderColor: `${config.color}60` }}
      >
        <Loader2 className={`${s.loader} animate-spin`} style={{ color: config.color }} />
      </div>
    );
  }

  return (
    <div
      className={`${s.box} rounded-full overflow-hidden border-2 shrink-0 bg-[#0a0a14]`}
      style={{ borderColor: `${config.color}40` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={config.avatarUrl}
        alt={config.name}
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
}
