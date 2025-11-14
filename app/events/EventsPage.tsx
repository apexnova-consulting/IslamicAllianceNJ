'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EventCard } from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { urlForImage } from '@/lib/sanity.image';

interface EventsPageProps {
  allEvents: any[];
  upcomingEvents: any[];
}

export function EventsPage({ allEvents, upcomingEvents }: EventsPageProps) {
  const [filter, setFilter] = useState<'upcoming' | 'all'>('upcoming');
  const now = new Date();

  const displayEvents = filter === 'upcoming' ? upcomingEvents : allEvents;
  const pastEvents = allEvents.filter(
    (event) => new Date(event.dateTime) < now
  );

  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-primary">
        <div className="absolute inset-0 bg-geometric-pattern opacity-10" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block glass px-6 py-2 rounded-full mb-8">
              <span className="text-sm font-semibold text-gold">Join Us</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-white mb-8 drop-shadow-lg">
              Upcoming Events
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-gold via-accent to-gold rounded-full mb-8" />
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <p className="text-xl text-white/90 leading-relaxed">
                At Islamic Alliance, we work together to bring educational and networking
                experiences to our community. Please stay tuned for all upcoming events to be
                listed here. We hope to see you there!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Filter Section */}
      <section className="py-10 relative bg-gradient-to-b from-white to-neutral-sand/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <Button
              variant={filter === 'upcoming' ? 'default' : 'outline'}
              onClick={() => setFilter('upcoming')}
              className={filter === 'upcoming' ? 'shadow-glow' : 'glass-hover'}
              size="lg"
            >
              Upcoming Events ({upcomingEvents.length})
            </Button>
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'shadow-glow' : 'glass-hover'}
              size="lg"
            >
              All Events ({allEvents.length})
            </Button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-sand/30 via-white to-neutral-sand/30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {displayEvents && displayEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayEvents.map((event: any, index: number) => {
                const imageUrl = event.flyerImage?.asset
                  ? urlForImage(event.flyerImage).url()
                  : undefined;
                return (
                  <motion.div
                    key={event._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <EventCard
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
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                {filter === 'upcoming'
                  ? 'No upcoming events at this time. Check back soon!'
                  : 'No events found.'}
              </p>
              {filter === 'upcoming' && pastEvents.length > 0 && (
                <Button variant="outline" onClick={() => setFilter('all')}>
                  View Past Events
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

