import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { EventDetailPage } from './EventDetailPage';
import { getEventBySlug, getAllEvents } from '@/lib/sanity.queries';

export const revalidate = 1800; // Revalidate every 30 minutes

export async function generateStaticParams() {
  const events = await getAllEvents().catch(() => []);
  return events.map((event: any) => ({
    slug: event.slug.current,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug).catch(() => null);

  if (!event) {
    return {
      title: 'Event Not Found | Islamic Alliance',
    };
  }

  return {
    title: `${event.title} | Islamic Alliance`,
    description: event.description?.[0]?.children?.[0]?.text || 'Join us for this event',
    openGraph: {
      title: event.title,
      description: event.description?.[0]?.children?.[0]?.text,
      type: 'website',
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug).catch(() => null);

  if (!event) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <EventDetailPage event={event} />
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

