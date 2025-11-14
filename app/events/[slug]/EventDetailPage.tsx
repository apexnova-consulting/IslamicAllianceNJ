'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { PortableText } from '@/components/PortableText';
import { urlForImage } from '@/lib/sanity.image';

interface EventDetailPageProps {
  event: any;
}

export function EventDetailPage({ event }: EventDetailPageProps) {
  const eventDate = new Date(event.dateTime);
  const formattedDate = format(eventDate, 'EEEE, MMMM d, yyyy');
  const formattedTime = format(eventDate, 'h:mm a');
  const imageUrl = event.flyerImage?.asset ? urlForImage(event.flyerImage).url() : null;

  // JSON-LD Schema for Event
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    startDate: event.dateTime,
    location: {
      '@type': 'Place',
      name: event.location,
      ...(event.locationMapUrl && { url: event.locationMapUrl }),
    },
    ...(imageUrl && { image: imageUrl }),
    ...(event.registerUrl && { url: event.registerUrl }),
    description: event.description?.[0]?.children?.[0]?.text || '',
    organizer: {
      '@type': 'Organization',
      name: 'Islamic Alliance',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero Section with Flyer */}
        {imageUrl && (
          <section className="relative h-[60vh] bg-neutral-slate">
            <Image
              src={imageUrl}
              alt={event.flyerImage?.alt || event.title}
              fill
              className="object-contain"
              priority
            />
          </section>
        )}

        {/* Event Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="mb-8">
                <Link
                  href="/events"
                  className="text-primary hover:text-accent transition-colors inline-flex items-center mb-4"
                >
                  ← Back to Events
                </Link>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                  {event.title}
                </h1>

                {/* Event Meta */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <div className="flex items-center text-lg">
                    <Calendar className="mr-3 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">{formattedDate}</div>
                      <div className="text-muted-foreground">{formattedTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-lg">
                    <MapPin className="mr-3 h-5 w-5 text-primary" />
                    <div>
                      {event.locationMapUrl ? (
                        <a
                          href={event.locationMapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors inline-flex items-center"
                        >
                          {event.location}
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      ) : (
                        <span>{event.location}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {event.tags && event.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {event.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Register Button */}
                {event.registerUrl && (
                  <Button asChild size="lg" className="w-full md:w-auto">
                    <a href={event.registerUrl} target="_blank" rel="noopener noreferrer">
                      Register on Eventbrite
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>

              {/* Event Description */}
              {event.description && (
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-heading font-bold mb-4">About This Event</h2>
                  <PortableText value={event.description} />
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

