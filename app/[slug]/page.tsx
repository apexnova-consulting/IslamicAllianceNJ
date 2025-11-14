import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/lib/sanity.queries';
import { DynamicPage } from './DynamicPage';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug).catch(() => null);

  if (!page) {
    return {
      title: 'Page Not Found | Islamic Alliance',
    };
  }

  return {
    title: `${page.title} | Islamic Alliance`,
    description: page.content?.[0]?.children?.[0]?.text || page.title,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug).catch(() => null);

  if (!page) {
    notFound();
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <DynamicPage page={page} />
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

