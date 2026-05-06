import { redirect } from 'next/navigation';

const RECAP_REDIRECTS: Record<string, string> = {
  'ufc-fight-night-della-maddalena-vs-prates': '/recap/della-maddalena-vs-prates',
  'ufc-fight-night-emmett-vs-vallejos': '/recap/emmett-vs-vallejos',
  'ufc-fight-night-evloev-vs-murphy': '/recap/evloev-vs-murphy',
};

export default async function PostCardSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const target = RECAP_REDIRECTS[slug] ?? '/dashboard/post-card';
  redirect(target);
}
