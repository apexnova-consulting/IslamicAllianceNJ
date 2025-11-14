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
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {flyerImage?.asset?.url && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={flyerImage.asset.url}
            alt={flyerImage.alt || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
        </div>
      )}
      <CardContent className="p-6">
        <CardTitle className="mb-3 line-clamp-2">{title}</CardTitle>
        <CardDescription className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>
              {formattedDate} at {formattedTime}
            </span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{location}</span>
          </div>
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/events/${slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

