import type { Metadata } from 'next';
import { HayJiveKitProView } from '@/components/creator-kit/hayjive/HayJiveKitProView';
import { kitData } from './data';

export const metadata: Metadata = {
  title: 'HayJive Picks · UFC Della Maddalena vs Prates · Crenas',
  description:
    'Premium creator kit for @hayjivepicks — UFC Fight Night: Della Maddalena vs Prates. 14 sections, R6-audited picks.',
};

export default function Page() {
  return <HayJiveKitProView data={kitData} />;
}
