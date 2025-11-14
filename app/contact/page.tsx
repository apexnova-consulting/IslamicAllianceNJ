import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Islamic Alliance',
  description: 'Get in touch with Islamic Alliance. We are here to help and answer any questions you may have.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-primary">
        <div className="absolute inset-0 bg-geometric-pattern opacity-10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" style={{animation: 'float 6s ease-in-out infinite'}} />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" style={{animation: 'float 6s ease-in-out infinite', animationDelay: '2s'}} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block glass px-6 py-2 rounded-full mb-8">
              <span className="text-sm font-semibold text-gold">Get In Touch</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-white mb-8 drop-shadow-lg">
              Contact Us
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-gold via-accent to-gold rounded-full mb-8" />
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <p className="text-xl text-white/90 leading-relaxed">
                We are here to help and answer any questions you may have. Reach out to us and we&apos;ll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-sand/30 to-white" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-12 shadow-elegant">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                <span className="gradient-text">Send us a message</span>
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
