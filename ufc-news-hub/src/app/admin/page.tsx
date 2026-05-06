import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Crenas — Redirecionando...',
};

export default function AdminPage() {
  redirect('/dashboard');
}
