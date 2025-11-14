import { Suspense } from 'react';
import { EventsPage } from './EventsPage';
import { getAllEvents, getUpcomingEvents } from '@/lib/sanity.queries';

export const metadata = {
  title: 'Events | Islamic Alliance',
  description:
    'At Islamic Alliance, we work together to bring educational and networking experiences to our community. View our upcoming events and programs.',
};

export const revalidate = 1800; // Revalidate every 30 minutes

export default async function Page() {
  const [allEvents, upcomingEvents] = await Promise.all([
    getAllEvents().catch(() => []),
    getUpcomingEvents().catch(() => []),
  ]);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <EventsPage allEvents={allEvents} upcomingEvents={upcomingEvents} />
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

