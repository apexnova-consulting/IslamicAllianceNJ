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
          'sticky top-0 z-40 w-full transition-all duration-300',
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              {logo?.asset ? (
                <Image
                  src={logo.asset._ref}
                  alt={logo.alt || 'Islamic Alliance Logo'}
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              ) : (
                <span className="text-2xl font-heading font-bold text-primary">
                  Islamic Alliance
                </span>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild variant="default" size="lg">
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
          <div className="lg:hidden border-t bg-white">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="default" size="lg" className="w-full">
                <Link href={donateUrl}>Donate Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

