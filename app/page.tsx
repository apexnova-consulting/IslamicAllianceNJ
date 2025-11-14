import { Suspense } from 'react';
import { HomePage } from './HomePage';
import { getHomepageHero, getTiles, getFeaturedEvents } from '@/lib/sanity.queries';
import { isSanityConfigured } from '@/lib/sanity.client';

export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  // Handle case where Sanity is not configured yet
  if (!isSanityConfigured()) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <HomePage hero={null} tiles={[]} featuredEvents={[]} />
      </Suspense>
    );
  }

  const [heroData, tilesData, featuredEventsData] = await Promise.all([
    getHomepageHero().catch(() => null),
    getTiles().catch(() => []),
    getFeaturedEvents().catch(() => []),
  ]);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomePage hero={heroData} tiles={tilesData} featuredEvents={featuredEventsData} />
    </Suspense>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-sand">
      <div className="text-center">
        <div className="animate-shimmer h-64 w-64 mx-auto rounded-lg mb-4" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
