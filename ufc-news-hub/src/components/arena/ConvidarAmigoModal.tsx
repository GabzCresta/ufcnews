'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, Copy, MessageCircle, X } from 'lucide-react';

interface ConvidarAmigoModalProps {
  open: boolean;
  onClose: () => void;
  ownerUsername: string;
  ownerDisplayName: string;
}

export function ConvidarAmigoModal({
  open,
  onClose,
  ownerUsername,
  ownerDisplayName,
}: ConvidarAmigoModalProps) {
  const [copiado, setCopiado] = useState(false);

  const inviteUrl = useMemo(() => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}/hub/arena/convite/${ownerUsername}`;
  }, [ownerUsername]);

  const mensagemWhatsapp = useMemo(() => {
    const msg = `${ownerDisplayName} te convidou para a Arena UFC — palpites, ligas e ranking real.\n\n${inviteUrl}`;
    return encodeURIComponent(msg);
  }, [inviteUrl, ownerDisplayName]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onEsc);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // ignora
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm animate-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md border border-dark-border bg-dark-bg px-7 py-8"
      >
        <button
          type="button"
          aria-label="Fechar"
          onClick={onClose}
          className="absolute right-3 top-3 rounded p-1.5 text-dark-textMuted transition hover:text-dark-text"
        >
          <X className="h-5 w-5" strokeWidth={2.2} />
        </button>

        <div className="mb-6 flex items-center gap-3 border-b border-dark-border pb-4">
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ufc-red">
            Convite
          </span>
          <span className="h-px flex-1 bg-dark-border" />
          <span className="font-display text-[10px] uppercase tracking-[0.3em] text-dark-textMuted">
            Arena UFC
          </span>
        </div>

        <h2 className="font-display text-3xl uppercase leading-[0.9] tracking-tight text-dark-text">
          Convide um amigo.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-dark-textMuted">
          Envie o link pelo WhatsApp. Quando seu amigo abrir, ele vê seu perfil
          com a opção de adicionar você como amigo em um clique.
        </p>

        <a
          href={`https://wa.me/?text=${mensagemWhatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-3 bg-[#25D366] px-5 py-3.5 font-display text-sm uppercase tracking-[0.18em] text-white transition hover:bg-[#1EBD5A]"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
          Enviar no WhatsApp
        </a>

        <div className="mt-3 flex items-stretch gap-0 border border-dark-border">
          <input
            readOnly
            value={inviteUrl}
            className="flex-1 truncate bg-transparent px-3 py-2.5 font-mono text-xs text-dark-textMuted outline-none"
          />
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-2 border-l border-dark-border px-4 font-display text-[10px] uppercase tracking-[0.2em] text-dark-textMuted transition hover:bg-dark-border/40 hover:text-dark-text"
          >
            {copiado ? (
              <>
                <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                Copiado
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" strokeWidth={2.2} />
                Copiar
              </>
            )}
          </button>
        </div>

        <p className="mt-5 font-display text-[10px] uppercase tracking-[0.22em] text-dark-textMuted">
          Ao aceitar o convite, seu amigo envia uma solicitação que você aprova
          na Arena.
        </p>
      </div>
    </div>
  );
}
