'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { urlForImage } from '@/lib/sanity.image';

interface ShopPageProps {
  items: any[];
}

interface ShopItemCardProps {
  item: any;
  imageUrl: string | null;
  index: number;
}

function ShopItemCard({ item, imageUrl, index }: ShopItemCardProps) {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState('');

  const handleOrderClick = () => {
    if (!selectedSize) {
      alert('Please select a size before ordering');
      return;
    }
    router.push(`/shop/checkout?product=${item._id}&size=${selectedSize}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        {imageUrl && (
          <div className="relative aspect-square bg-neutral-100">
            <Image
              src={imageUrl}
              alt={item.image?.alt || item.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardContent className="p-6 flex-grow">
          <CardTitle className="mb-2">{item.title}</CardTitle>
          <CardDescription className="mb-4 whitespace-pre-line">{item.description}</CardDescription>
          <div className="text-2xl font-bold text-primary mb-4">
            ${item.price.toFixed(2)}
          </div>
          
          {item.sizes && item.sizes.length > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Select Size:</label>
              <div className="grid grid-cols-3 gap-2">
                {item.sizes.map((size: string) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 border rounded-md text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-foreground border-input hover:bg-accent'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="p-6 pt-0 flex-col space-y-3">
          <Button
            className="w-full"
            onClick={handleOrderClick}
            disabled={!item.active}
          >
            {item.active ? 'Order Now' : 'Coming Soon'}
          </Button>
          {item.active && item.fulfillmentOptions && (
            <p className="text-xs text-muted-foreground text-center">
              {item.fulfillmentOptions}
            </p>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function ShopPage({ items }: ShopPageProps) {
  const activeItems = items.filter((item) => item.active);

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-primary">
        <div className="absolute inset-0 bg-geometric-pattern opacity-10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block glass px-6 py-2 rounded-full mb-8">
              <span className="text-sm font-semibold text-gold">Merchandise</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-white mb-8 drop-shadow-lg">
              Shop
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-gold via-accent to-gold rounded-full mb-8" />
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <p className="text-xl text-white/90 leading-relaxed">
                Support Islamic Alliance by purchasing our merchandise
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop Items Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-sand/30 to-white" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {activeItems.length === 0 ? (
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-12 md:p-16 shadow-elegant"
              >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  <span className="gradient-text">Coming Soon!</span>
                </h2>
                <p className="text-xl text-foreground/90 mb-8 leading-relaxed">
                  We&apos;re working on bringing you high-quality Islamic Alliance merchandise including hoodies, t-shirts, and more. Check back soon!
                </p>
                <div className="space-y-4 text-left max-w-md mx-auto">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold mb-2">Fulfillment Options:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pay on Delivery (NJ only)</li>
                      <li>• Zelle</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      For any inquiries, please{' '}
                      <Link
                        href="/contact"
                        className="text-primary hover:text-accent transition-colors underline"
                      >
                        contact us
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeItems.map((item: any, index: number) => {
                const imageUrl = item.image?.asset ? urlForImage(item.image).url() : null;
                return (
                  <ShopItemCard
                    key={item._id}
                    item={item}
                    imageUrl={imageUrl}
                    index={index}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

