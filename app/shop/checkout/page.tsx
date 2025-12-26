import { Suspense } from 'react';
import { CheckoutPage } from './CheckoutPage';

export const metadata = {
  title: 'Checkout | Islamic Alliance',
  description: 'Complete your order from Islamic Alliance',
};

export default async function Page({
  searchParams,
}: {
  searchParams: { product?: string; size?: string };
}) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CheckoutPage 
        productId={searchParams.product} 
        selectedSize={searchParams.size}
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

