import { Suspense } from 'react';
import { AboutPage } from './AboutPage';
import {
  getAllPrograms,
  getAllInitiatives,
  getTeamMembers,
} from '@/lib/sanity.queries';

export const metadata = {
  title: 'About Us | Islamic Alliance',
  description:
    'Learn about Islamic Alliance, our mission to unite and empower the Ummah, our programs, initiatives, and meet our team.',
};

export const revalidate = 3600;

export default async function Page() {
  const [programs, initiatives, team] = await Promise.all([
    getAllPrograms().catch(() => []),
    getAllInitiatives().catch(() => []),
    getTeamMembers().catch(() => []),
  ]);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <AboutPage programs={programs} initiatives={initiatives} team={team} />
    </Suspense>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-shimmer h-32 w-32 rounded-lg" />
    </div>
  );
}

