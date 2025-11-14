'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

interface TileCardProps {
  title: string;
  description: string;
  image?: {
    asset: { url?: string };
    alt?: string;
  };
  targetUrl: string;
  index?: number;
}

export function TileCard({ title, description, image, targetUrl, index = 0 }: TileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Link href={targetUrl}>
        <Card className="group relative overflow-hidden glass-card glass-hover cursor-pointer h-full border-2 border-white/40">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          </div>

          {image?.asset?.url && (
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.asset.url}
                alt={image.alt || title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              
              {/* Floating Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <CardTitle className="text-3xl mb-2 text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {title}
                </CardTitle>
              </div>
            </div>
          )}
          
          <CardContent className="p-6 relative">
            <CardDescription className="text-base leading-relaxed text-foreground/80">
              {description}
            </CardDescription>
            
            {/* Hover Arrow */}
            <div className="mt-4 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
              <span className="text-sm">Learn More</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

