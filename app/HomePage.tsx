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
      {/* Full-Screen Modern Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        <div className="absolute inset-0 bg-[url('/geometric-pattern.svg')] opacity-5" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        
        {hero?.logoImage && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative w-full h-full max-w-2xl max-h-2xl p-12">
              <Image
                src={urlForImage(hero.logoImage).url()}
                alt="Islamic Alliance Logo"
                fill
                className="object-contain floating"
                priority
              />
            </div>
          </motion.div>
        )}
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {!hero?.logoImage && (
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6">
                <span className="gradient-text">Islamic Alliance</span>
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-accent to-primary rounded-full mb-6" />
              <p className="text-2xl md:text-3xl text-white font-light italic drop-shadow-lg">
                Ummah in Action
              </p>
            </motion.div>
          )}
          
          {/* Glass Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 glass-card p-8 max-w-2xl mx-auto"
          >
            <p className="text-lg text-white/90 leading-relaxed">
              Empowering the Ummah through education, mentorship, and community
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="animate-bounce mt-16"
          >
            <a
              href="#welcome"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full glass hover:shadow-glow transition-all duration-300"
              aria-label="Scroll to content"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-sand/50 to-white" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Section Badge */}
            <motion.div 
              className="inline-block mx-auto mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="glass px-6 py-2 rounded-full">
                <span className="text-sm font-semibold gradient-text">Welcome</span>
              </div>
            </motion.div>

            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8">
                <span className="gradient-text">
                  {hero?.welcomeHeadline || 'Welcome To Islamic Alliance'}
                </span>
              </h2>
              <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light">
                  {hero?.welcomeBody ||
                    'At Islamic Alliance, we are committed to fostering personal and academic growth within the Ummah. Through education, mentorship, and networking opportunities, we empower individuals to achieve success while staying true to Islamic values.'}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {hero?.ctaButtons?.map((button: any, index: number) => (
                <motion.div
                  key={button.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    asChild 
                    variant={getButtonVariant(button.style)} 
                    size="lg"
                    className="shadow-elegant hover:shadow-float transition-all duration-300"
                  >
                    <Link href={button.url}>{button.label}</Link>
                  </Button>
                </motion.div>
              )) || (
                <>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    <Button asChild variant="default" size="lg" className="shadow-glow hover:shadow-float">
                      <Link href="/get-involved">Join The Alliance</Link>
                    </Button>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                    <Button asChild variant="outline" size="lg" className="glass-hover">
                      <Link href="/events">View Upcoming Events</Link>
                    </Button>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                    <Button asChild variant="accent" size="lg" className="shadow-elegant hover:shadow-float">
                      <Link href="#donate">Donate Now</Link>
                    </Button>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tiles Section */}
      {tiles && tiles.length > 0 && (
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-sand/30 via-white to-neutral-sand/30" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
                Explore Our Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover how we're making a difference in the community
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
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
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-neutral-sand/50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block glass px-6 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold gradient-text">What's Next</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join us for our latest events and programs that bring our community together
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

