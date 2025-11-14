import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getGlobalSettings, getFooterPages } from '@/lib/sanity.queries';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Islamic Alliance | Empowering the Ummah through Education and Engagement',
  description:
    'At Islamic Alliance, we are committed to fostering personal and academic growth within the Ummah. Through education, mentorship, and networking opportunities, we empower individuals to achieve success while staying true to Islamic values.',
  keywords: [
    'Islamic Alliance',
    'Muslim community',
    'Islamic education',
    'mentorship',
    'networking',
    'New Jersey',
    'Ummah',
  ],
  authors: [{ name: 'Islamic Alliance' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://islamicalliancenj.org',
    siteName: 'Islamic Alliance',
    title: 'Islamic Alliance | Empowering the Ummah',
    description:
      'Fostering personal and academic growth within the Ummah through education, mentorship, and networking.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Islamic Alliance | Empowering the Ummah',
    description:
      'Fostering personal and academic growth within the Ummah through education, mentorship, and networking.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [globalSettings, footerPages] = await Promise.all([
    getGlobalSettings().catch(() => null),
    getFooterPages().catch(() => []),
  ]);

  return (
    <html lang="en" className={josefinSans.variable}>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header
          logo={globalSettings?.logo}
          donateUrl={globalSettings?.donateUrl}
          showDonationBanner={globalSettings?.showDonationBanner}
          donationBannerText={globalSettings?.donationBannerText}
        />
        <main id="main-content">{children}</main>
        <Footer
          aboutText={globalSettings?.footerText}
          instagramUrl={globalSettings?.instagramUrl}
          contactEmail={globalSettings?.contactEmail}
          footerPages={footerPages}
        />
      </body>
    </html>
  );
}
