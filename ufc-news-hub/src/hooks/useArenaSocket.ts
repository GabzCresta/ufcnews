'use client';

import { useEffect, useRef, useState } from 'react';
import { io, type Socket } from 'socket.io-client';

// Module-level singleton: one socket per tab, shared across components
let sharedSocket: Socket | null = null;
let connCount = 0;

function getSocket(): Socket {
  if (sharedSocket) return sharedSocket;
  sharedSocket = io({
    // Same-origin: nginx upgrades /socket.io/ to :3011
    path: '/socket.io/',
    withCredentials: true,
    transports: ['websocket', 'polling'],
    reconnectionDelayMax: 10000,
  });
  return sharedSocket;
}

export interface UseArenaSocketReturn {
  socket: Socket;
  isConnected: boolean;
}

/**
 * Subscribe to Arena real-time events.
 * When all consumers unmount, the shared socket is disconnected.
 */
export function useArenaSocket(): UseArenaSocketReturn {
  const [isConnected, setIsConnected] = useState<boolean>(() => sharedSocket?.connected ?? false);
  const socketRef = useRef<Socket>(getSocket());

  useEffect(() => {
    const s = socketRef.current;
    connCount += 1;

    function onConnect() { setIsConnected(true); }
    function onDisconnect() { setIsConnected(false); }

    s.on('connect', onConnect);
    s.on('disconnect', onDisconnect);
    if (s.connected) setIsConnected(true);
    else s.connect();

    return () => {
      s.off('connect', onConnect);
      s.off('disconnect', onDisconnect);
      connCount -= 1;
      if (connCount <= 0 && sharedSocket) {
        sharedSocket.disconnect();
        sharedSocket = null;
        connCount = 0;
      }
    };
  }, []);

  return { socket: socketRef.current, isConnected };
}

/**
 * Join an evento room for the lifetime of the component.
 */
export function useArenaEventoRoom(eventoId: string | null | undefined) {
  const { socket } = useArenaSocket();

  useEffect(() => {
    if (!eventoId) return;
    socket.emit('evento:join', eventoId);
    return () => { socket.emit('evento:leave', eventoId); };
  }, [socket, eventoId]);

  return socket;
}
