'use client';

import { AgentLane } from './AgentLane';
import type { AgentSession } from './types';

export function LaneView({ sessions, mainSessionKey }: {
  sessions: AgentSession[];
  mainSessionKey: string;
}) {
  if (sessions.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-center px-6">
        <p className="text-sm text-gray-500">Pipeline sera exibido aqui quando iniciado.</p>
      </div>
    );
  }

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 h-full scrollbar-hide">
      {sessions.map(session => (
        <AgentLane
          key={session.sessionKey}
          session={session}
          isMain={session.sessionKey === mainSessionKey}
        />
      ))}
    </div>
  );
}
