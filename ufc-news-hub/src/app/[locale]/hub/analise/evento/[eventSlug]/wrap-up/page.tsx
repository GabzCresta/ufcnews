import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { WrapUpView } from '@/components/analise/WrapUpView';
import type { WrapUpData } from '@/types/wrap-up';

// ═══════════════════════════════════════════════════════════
// Wrap Up page — reads generated JSON from src/data/wrap-ups
// Existence of the JSON file is the authoritative guard.
// ═══════════════════════════════════════════════════════════

export const dynamic = 'force-dynamic';

async function loadWrapUp(eventSlug: string): Promise<WrapUpData | null> {
  const filePath = path.join(
    process.cwd(),
    'src',
    'data',
    'wrap-ups',
    `${eventSlug}.json`,
  );
  if (!fs.existsSync(filePath)) return null;
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as WrapUpData;
  } catch {
    return null;
  }
}

export default async function WrapUpPage({
  params,
}: {
  params: Promise<{ locale: string; eventSlug: string }>;
}) {
  const { eventSlug } = await params;

  const data = await loadWrapUp(eventSlug);
  if (!data) notFound();

  return <WrapUpView data={data} />;
}
