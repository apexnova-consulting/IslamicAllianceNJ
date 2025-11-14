import Link from 'next/link';
import { Instagram } from 'lucide-react';

interface FooterProps {
  aboutText?: string;
  instagramUrl?: string;
  contactEmail?: string;
  footerPages?: Array<{
    title: string;
    slug: { current: string };
  }>;
}

export function Footer({
  aboutText = 'At Islamic Alliance, our mission is to unite and empower the Ummah by providing high-quality educational resources, mentorship programs, and networking opportunities.',
  instagramUrl,
  contactEmail = 'islamicalliance.nj@gmail.com',
  footerPages = [],
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-slate text-neutral-sand py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-heading font-semibold mb-4">About Us</h3>
            <p className="text-neutral-sand/90 text-sm leading-relaxed">{aboutText}</p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-neutral-sand/90 hover:text-accent transition-colors text-sm"
                >
                  {contactEmail}
                </a>
              </p>
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-neutral-sand/90 hover:text-accent transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                  <span className="text-sm">Follow us on Instagram</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-sand/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-sand/80">
              © {currentYear} Islamic Alliance. All rights reserved.
            </p>
            {footerPages.length > 0 && (
              <div className="flex flex-wrap items-center gap-4">
                {footerPages.map((page) => (
                  <Link
                    key={page.slug.current}
                    href={`/${page.slug.current}`}
                    className="text-sm text-neutral-sand/80 hover:text-accent transition-colors"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

