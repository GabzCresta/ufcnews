import type { Metadata } from 'next';
import { MmaBetiqKitView } from '@/components/creator-kit/mma_betiq/MmaBetiqKitView';
import { prisma } from '@/lib/prisma';
import { kitData } from './data';
import type { MmaBetiqKitData } from '@/types/mma-betiq-kit';

export const metadata: Metadata = {
  title: 'MMA Bet IQ Kit · UFC Della Maddalena vs Prates · Crenas',
  description:
    'Branded creator kit for @mma_betiq — pick grid (Locks/Risky/Winner/Underdog), Lock of the Week, Method Combo Parlay, Fade of the Week, Arena private league playbook, and Discord conversion engine for UFC Fight Night: Della Maddalena vs Prates.',
};

export const dynamic = 'force-dynamic';

async function enrichKitWithPhotos(data: MmaBetiqKitData): Promise<MmaBetiqKitData> {
  const names = [
    ...data.pick_grid.flatMap((p) => [p.fighter1_name, p.fighter2_name]),
    data.lock_of_the_week.pick,
  ];
  const uniqueNames = Array.from(new Set(names));

  const fighters = await prisma.lutadores.findMany({
    where: { nome: { in: uniqueNames } },
    select: { nome: true, imagem_url: true },
  });

  const photoMap = new Map(
    fighters.filter((f) => f.imagem_url).map((f) => [f.nome, f.imagem_url as string]),
  );

  return {
    ...data,
    pick_grid: data.pick_grid.map((p) => ({
      ...p,
      fighter1_photo: photoMap.get(p.fighter1_name),
      fighter2_photo: photoMap.get(p.fighter2_name),
    })),
    lock_of_the_week: {
      ...data.lock_of_the_week,
      fighter_photo: photoMap.get(data.lock_of_the_week.pick),
    },
  };
}

export default async function Page() {
  const enriched = await enrichKitWithPhotos(kitData);
  return <MmaBetiqKitView data={enriched} />;
}
