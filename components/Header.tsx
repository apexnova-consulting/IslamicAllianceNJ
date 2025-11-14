'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  logo?: { asset: { _ref: string }; alt?: string };
  donateUrl?: string;
  showDonationBanner?: boolean;
  donationBannerText?: string;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/events', label: 'Events' },
  { href: '/sadaqah-nafilah', label: 'Sadaqah Nafilah' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/shop', label: 'Shop' },
];

export function Header({
  logo,
  donateUrl = '#',
  showDonationBanner = false,
  donationBannerText,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Donation Banner */}
      {showDonationBanner && donationBannerText && (
        <div className="bg-accent text-white text-center py-2 px-4 text-sm">
          <p>{donationBannerText}</p>
        </div>
      )}

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-500',
          scrolled 
            ? 'glass shadow-elegant border-b border-white/20' 
            : 'bg-white/60 backdrop-blur-md'
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              {logo?.asset ? (
                <Image
                  src={logo.asset._ref}
                  alt={logo.alt || 'Islamic Alliance Logo'}
                  width={200}
                  height={60}
                  className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <span className="text-2xl font-heading font-bold gradient-text">
                  Islamic Alliance
                </span>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-foreground rounded-lg transition-all duration-300 hover:text-primary hover:bg-primary/5 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild variant="default" size="lg" className="shadow-glow hover:shadow-float transition-all duration-300">
                <Link href={donateUrl}>Donate Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 glass animate-slide-up">
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="default" size="lg" className="w-full mt-4 shadow-glow">
                <Link href={donateUrl}>Donate Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

