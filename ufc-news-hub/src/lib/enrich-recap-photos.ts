import { prisma } from '@/lib/prisma';
import type { RecapData } from '@/types/recap';

/**
 * Enriches recap data with fighter photos from the database.
 * Same pattern as enrich-event-photos but for RecapData.
 */
export async function enrichRecapWithPhotos(
  data: RecapData,
): Promise<RecapData> {
  const allFights = [...data.main_card, ...data.prelims];
  const names = [
    ...allFights.flatMap((f) => [f.fighter1.nome, f.fighter2.nome]),
    data.star_of_the_night.fighter,
  ];

  const fighters = await prisma.lutadores.findMany({
    where: { nome: { in: [...new Set(names)] } },
    select: { nome: true, imagem_url: true },
  });

  const photoMap = new Map(
    fighters
      .filter((f) => f.imagem_url)
      .map((f) => [f.nome, f.imagem_url!]),
  );

  const missing = names.filter((n) => !photoMap.has(n));
  if (missing.length > 0) {
    console.warn(
      `[enrich-recap-photos] Photos not found for: ${[...new Set(missing)].join(', ')}`,
    );
  }

  function enrichFight<T extends { fighter1: { nome: string; record: string; foto_url?: string }; fighter2: { nome: string; record: string; foto_url?: string } }>(fight: T): T {
    return {
      ...fight,
      fighter1: { ...fight.fighter1, foto_url: photoMap.get(fight.fighter1.nome) },
      fighter2: { ...fight.fighter2, foto_url: photoMap.get(fight.fighter2.nome) },
    };
  }

  return {
    ...data,
    main_card: data.main_card.map(enrichFight),
    prelims: data.prelims.map(enrichFight),
    star_of_the_night: {
      ...data.star_of_the_night,
      foto_url: photoMap.get(data.star_of_the_night.fighter),
    },
  };
}
