'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

interface TileCardProps {
  title: string;
  description: string;
  image: {
    asset: { url?: string };
    alt?: string;
  };
  targetUrl: string;
  index?: number;
}

export function TileCard({ title, description, image, targetUrl, index = 0 }: TileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={targetUrl}>
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
          {image?.asset?.url && (
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.asset.url}
                alt={image.alt || title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <CardTitle className="text-2xl mb-2">{title}</CardTitle>
              </div>
            </div>
          )}
          <CardContent className="p-6">
            <CardDescription className="text-base">{description}</CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

