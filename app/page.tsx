import { Suspense } from 'react';
import { HomePage } from './HomePage';
import { getHomepageHero, getTiles, getFeaturedEvents } from '@/lib/sanity.queries';

export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  const [heroData, tilesData, featuredEventsData] = await Promise.all([
    getHomepageHero(),
    getTiles(),
    getFeaturedEvents(),
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
