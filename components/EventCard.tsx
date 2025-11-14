import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { format } from 'date-fns';

interface EventCardProps {
  title: string;
  slug: string;
  dateTime: string;
  location: string;
  flyerImage?: {
    asset: { url?: string };
    alt?: string;
  };
  featured?: boolean;
}

export function EventCard({
  title,
  slug,
  dateTime,
  location,
  flyerImage,
  featured = false,
}: EventCardProps) {
  const eventDate = new Date(dateTime);
  const formattedDate = format(eventDate, 'PPP');
  const formattedTime = format(eventDate, 'p');

  return (
    <Card className="group relative overflow-hidden glass-card glass-hover border-2 border-white/40 h-full flex flex-col">
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>

      {flyerImage?.asset?.url && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={flyerImage.asset.url}
            alt={flyerImage.alt || title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          {featured && (
            <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full animate-scale-in">
              <span className="text-xs font-bold text-accent">✨ Featured</span>
            </div>
          )}
        </div>
      )}
      
      <CardContent className="p-6 flex-1 relative z-10">
        <CardTitle className="mb-4 line-clamp-2 text-2xl group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="space-y-3">
          <div className="flex items-center text-sm text-foreground/70 group-hover:text-primary/80 transition-colors">
            <Calendar className="mr-3 h-5 w-5 flex-shrink-0" />
            <span className="font-medium">
              {formattedDate} at {formattedTime}
            </span>
          </div>
          <div className="flex items-center text-sm text-foreground/70 group-hover:text-primary/80 transition-colors">
            <MapPin className="mr-3 h-5 w-5 flex-shrink-0" />
            <span className="font-medium line-clamp-1">{location}</span>
          </div>
        </CardDescription>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 relative z-10">
        <Button asChild className="w-full shadow-elegant hover:shadow-float group/btn">
          <Link href={`/events/${slug}`} className="flex items-center justify-center">
            <span>View Details</span>
            <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

