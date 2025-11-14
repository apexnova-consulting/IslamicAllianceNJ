import { Suspense } from 'react';
import { ShopPage } from './ShopPage';
import { getShopItems } from '@/lib/sanity.queries';

export const metadata = {
  title: 'Shop | Islamic Alliance',
  description: 'Shop Islamic Alliance merchandise. Coming soon: hoodies, t-shirts, and more.',
};

export const revalidate = 3600;

export default async function Page() {
  const shopItems = await getShopItems().catch(() => []);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShopPage items={shopItems} />
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

