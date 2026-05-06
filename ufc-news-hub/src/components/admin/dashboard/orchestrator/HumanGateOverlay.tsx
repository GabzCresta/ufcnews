'use client';

import { AlertTriangle, CheckCircle2, MessageSquare } from 'lucide-react';

export function HumanGateOverlay({ onConfirm, onCorrect }: {
  onConfirm: () => void;
  onCorrect: () => void;
}) {
  return (
    <div className="neu-card border border-yellow-500/30 bg-yellow-500/5 p-4 rounded-xl">
      <div className="flex items-center gap-3 mb-3">
        <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0" />
        <div>
          <h3 className="text-sm font-semibold text-yellow-400">HUMAN GATE — Confirmacao Necessaria</h3>
          <p className="text-xs text-gray-500 mt-0.5">O card foi coletado. Revise na lane do Card Scraper e confirme para prosseguir.</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onConfirm}
          className="neu-button px-4 py-2 text-sm font-semibold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 transition-colors flex items-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4" />
          Confirmar Card
        </button>
        <button
          onClick={onCorrect}
          className="neu-button px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          Corrigir
        </button>
      </div>
    </div>
  );
}
