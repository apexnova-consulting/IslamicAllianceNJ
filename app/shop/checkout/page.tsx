import { Suspense } from 'react';
import { CheckoutPage } from './CheckoutPage';

export const metadata = {
  title: 'Checkout | Islamic Alliance',
  description: 'Complete your order from Islamic Alliance',
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; size?: string }>;
}) {
  const params = await searchParams;
  
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CheckoutPage 
        productId={params.product} 
        selectedSize={params.size}
      />
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

