import Image from 'next/image';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

interface TeamMemberCardProps {
  name: string;
  title: string;
  photo: {
    asset: { url?: string };
    alt?: string;
  };
  bio?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

export function TeamMemberCard({
  name,
  title,
  photo,
  bio,
  linkedinUrl,
  facebookUrl,
  instagramUrl,
}: TeamMemberCardProps) {
  const hasSocial = linkedinUrl || facebookUrl || instagramUrl;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {photo?.asset?.url && (
        <div className="relative aspect-square overflow-hidden bg-neutral-100">
          <Image
            src={photo.asset.url}
            alt={photo.alt || `Photo of ${name}`}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardContent className="p-6 text-center">
        <CardTitle className="mb-1">{name}</CardTitle>
        <CardDescription className="mb-4 text-primary font-medium">{title}</CardDescription>
        
        {bio && <p className="text-sm text-muted-foreground mb-4">{bio}</p>}

        {hasSocial && (
          <div className="flex items-center justify-center space-x-3">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${name} on LinkedIn`}
              >
                <Linkedin size={20} />
              </a>
            )}
            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${name} on Facebook`}
              >
                <Facebook size={20} />
              </a>
            )}
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${name} on Instagram`}
              >
                <Instagram size={20} />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

