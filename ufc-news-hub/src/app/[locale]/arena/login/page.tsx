'use client';

import { Link } from '@/i18n/routing';
import { MessageCircle, Mail, ArrowLeft, Lock } from 'lucide-react';
import { OctagonPortalLayout } from '@/components/arena/OctagonPortalLayout';

export default function ArenaLoginPage() {
  return (
    <OctagonPortalLayout>
      <div className="neu-card p-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-ufc-red/10 border border-ufc-red/20">
            <Lock className="h-8 w-8 text-ufc-red" />
          </div>
          <h2 className="font-display text-3xl uppercase tracking-wide text-dark-text">
            Acesso Exclusivo
          </h2>
          <p className="mt-2 text-sm text-dark-textMuted text-center max-w-xs">
            O Arena esta disponivel para parceiros e clientes. Entre em contato para ativar o acesso.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/16463549521?text=Oi!%20Quero%20acesso%20ao%20Arena%20do%20Crenas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 py-3 font-display uppercase text-white hover:bg-emerald-500 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>

          <a
            href="mailto:contato@crenas.site?subject=Acesso%20ao%20Arena%20Crenas"
            className="flex items-center justify-center gap-2 w-full rounded-xl border border-dark-border bg-dark-card py-3 font-display uppercase text-dark-text hover:border-ufc-red/40 transition-all"
          >
            <Mail className="h-4 w-4" />
            contato@crenas.site
          </a>
        </div>

        {/* Back link */}
        <div className="mt-6 text-center">
          <Link href="/arena" className="inline-flex items-center gap-2 text-sm text-dark-textMuted hover:text-ufc-red transition-colors">
            <ArrowLeft className="h-3 w-3" />
            Voltar ao Arena
          </Link>
        </div>
      </div>
    </OctagonPortalLayout>
  );
}
