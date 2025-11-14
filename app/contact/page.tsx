import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Islamic Alliance',
  description: 'Get in touch with Islamic Alliance. We are here to help and answer any questions you may have.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              We are here to help and answer any questions you may have. Reach out to us and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-neutral-sand rounded-lg p-8 md:p-12">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Other ways to reach us
              </h3>
              <p className="text-muted-foreground mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:islamicalliance.nj@gmail.com"
                  className="text-primary hover:text-accent transition-colors"
                >
                  islamicalliance.nj@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                We typically respond within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
