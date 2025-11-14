import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { getGlobalSettings, getFooterPages } from '@/lib/sanity.queries';

interface LayoutProps {
  children: ReactNode;
}

export async function Layout({ children }: LayoutProps) {
  const [globalSettings, footerPages] = await Promise.all([
    getGlobalSettings(),
    getFooterPages(),
  ]);

  return (
    <>
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
    </>
  );
}

