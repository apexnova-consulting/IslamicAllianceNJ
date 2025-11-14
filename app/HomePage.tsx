'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TileCard } from '@/components/TileCard';
import { EventCard } from '@/components/EventCard';
import { urlForImage } from '@/lib/sanity.image';

interface HomePageProps {
  hero: any;
  tiles: any[];
  featuredEvents: any[];
}

export function HomePage({ hero, tiles, featuredEvents }: HomePageProps) {
  const getButtonVariant = (style: string) => {
    if (style === 'primary') return 'default';
    if (style === 'accent') return 'accent';
    return 'outline';
  };

  return (
    <div className="min-h-screen">
      {/* Full-Screen Logo Hero */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="absolute inset-0 bg-[url('/geometric-pattern.svg')] opacity-5" />
        {hero?.logoImage && (
          <div className="absolute inset-0">
            <Image
              src={urlForImage(hero.logoImage).url()}
              alt="Islamic Alliance Logo"
              fill
              className="object-contain p-8"
              priority
            />
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          {!hero?.logoImage && (
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-4">
                Islamic Alliance
              </h1>
              <p className="text-xl md:text-2xl text-neutral-slate italic">Ummah in Action</p>
            </div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="animate-bounce mt-12"
          >
            <a
              href="#welcome"
              className="inline-block text-primary hover:text-accent transition-colors"
              aria-label="Scroll to content"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-20 bg-neutral-sand">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              {hero?.welcomeHeadline || 'Welcome To Islamic Alliance'}
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {hero?.welcomeBody ||
                'At Islamic Alliance, we are committed to fostering personal and academic growth within the Ummah. Through education, mentorship, and networking opportunities, we empower individuals to achieve success while staying true to Islamic values.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {hero?.ctaButtons?.map((button: any, index: number) => (
                <motion.div
                  key={button.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Button asChild variant={getButtonVariant(button.style)} size="lg">
                    <Link href={button.url}>{button.label}</Link>
                  </Button>
                </motion.div>
              )) || (
                <>
                  <Button asChild variant="default" size="lg">
                    <Link href="/get-involved">Join The Alliance</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/events">View Upcoming Events</Link>
                  </Button>
                  <Button asChild variant="accent" size="lg">
                    <Link href="#donate">Donate Now</Link>
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tiles Section */}
      {tiles && tiles.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiles.map((tile: any, index: number) => {
                const imageUrl = tile.image?.asset
                  ? urlForImage(tile.image).url()
                  : undefined;
                return (
                  <TileCard
                    key={tile.title}
                    title={tile.title}
                    description={tile.description}
                    image={imageUrl ? {
                      asset: { url: imageUrl },
                      alt: tile.image?.alt || tile.title,
                    } : undefined}
                    targetUrl={tile.targetUrl}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Featured Events Section (if any) */}
      {featuredEvents && featuredEvents.length > 0 && (
        <section className="py-20 bg-neutral-sand">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-heading font-bold text-primary mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground">
                Join us for our latest events and programs
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredEvents.map((event: any) => {
                const imageUrl = event.flyerImage?.asset
                  ? urlForImage(event.flyerImage).url()
                  : undefined;
                return (
                  <EventCard
                    key={event.slug.current}
                    title={event.title}
                    slug={event.slug.current}
                    dateTime={event.dateTime}
                    location={event.location}
                    flyerImage={imageUrl ? {
                      asset: { url: imageUrl },
                      alt: event.flyerImage?.alt || event.title,
                    } : undefined}
                    featured={event.featured}
                  />
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

