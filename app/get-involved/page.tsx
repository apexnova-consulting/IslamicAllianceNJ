import { VolunteerForm } from '@/components/VolunteerForm';

export const metadata = {
  title: 'Get Involved | Islamic Alliance',
  description: 'Join us in building a better future. Volunteer with Islamic Alliance and make a positive impact in the Ummah.',
};

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-primary">
        <div className="absolute inset-0 bg-geometric-pattern opacity-10" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" style={{animation: 'float 6s ease-in-out infinite'}} />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" style={{animation: 'float 6s ease-in-out infinite', animationDelay: '2s'}} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block glass px-6 py-2 rounded-full mb-8">
              <span className="text-sm font-semibold text-gold">Make A Difference</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-white mb-8 drop-shadow-lg">
              Get Involved
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-gold via-accent to-gold rounded-full mb-8" />
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <p className="text-2xl text-white/90 font-light mb-6">
                Join Us in Building a Better Future
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                At Islamic Alliance, we believe in the power of community. Whether you&apos;re a student, professional, or simply someone who wants to make a difference, there&apos;s a place for you on our team.
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
            <div className="glass-card p-8 md:p-12 shadow-elegant mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                <span className="gradient-text">Volunteer Application</span>
              </h2>
              <p className="text-foreground/80 mb-8 text-lg">
                Fill out the form below and we&apos;ll get in touch with you about volunteer opportunities.
              </p>
              <VolunteerForm />
            </div>

            {/* Benefits Section */}
            <div className="glass-card p-8 md:p-10 shadow-elegant">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                <span className="gradient-text">Why Volunteer With Us?</span>
              </h3>
              <ul className="space-y-4 text-foreground/90">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Make a meaningful impact in the Muslim community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Develop leadership and professional skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Connect with like-minded individuals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Gain valuable experience in event planning, outreach, and more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Flexible commitment that works with your schedule</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
