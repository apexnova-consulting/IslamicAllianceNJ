'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { urlForImage } from '@/lib/sanity.image';

interface ShopPageProps {
  items: any[];
}

export function ShopPage({ items }: ShopPageProps) {
  const activeItems = items.filter((item) => item.active);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Shop
            </h1>
            <p className="text-xl text-muted-foreground">
              Support Islamic Alliance by purchasing our merchandise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Items Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {activeItems.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-neutral-sand rounded-lg p-12"
              >
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  Coming Soon!
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
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
              {items.map((item: any, index: number) => {
                const imageUrl = item.image?.asset ? urlForImage(item.image).url() : null;
                return (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
                      <CardContent className="p-6">
                        <CardTitle className="mb-2">{item.title}</CardTitle>
                        <CardDescription className="mb-4">{item.description}</CardDescription>
                        <div className="text-2xl font-bold text-primary">
                          ${item.price.toFixed(2)}
                        </div>
                        {!item.active && (
                          <div className="mt-2 text-sm text-muted-foreground">
                            Currently unavailable
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button
                          className="w-full"
                          disabled={!item.active}
                          asChild={item.active}
                        >
                          {item.active ? (
                            <Link href="/contact">Order Now</Link>
                          ) : (
                            <span>Coming Soon</span>
                          )}
                        </Button>
                      </CardFooter>
                      {item.active && item.fulfillmentOptions && (
                        <div className="px-6 pb-6">
                          <p className="text-xs text-muted-foreground">
                            {item.fulfillmentOptions}
                          </p>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

