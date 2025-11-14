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
              Upcoming Events
            </h1>
            <p className="text-xl text-muted-foreground">
              At Islamic Alliance, we work together to bring educational and networking
              experiences to our community. Please stay tuned for all upcoming events to be
              listed here. We hope to see you there!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant={filter === 'upcoming' ? 'default' : 'outline'}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming Events ({upcomingEvents.length})
            </Button>
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All Events ({allEvents.length})
            </Button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-neutral-sand">
        <div className="container mx-auto px-4">
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

