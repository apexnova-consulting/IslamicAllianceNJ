import { VolunteerForm } from '@/components/VolunteerForm';

export const metadata = {
  title: 'Get Involved | Islamic Alliance',
  description: 'Join us in building a better future. Volunteer with Islamic Alliance and make a positive impact in the Ummah.',
};

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-muted-foreground">
              Join Us in Building a Better Future
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Islamic Alliance, we believe in the power of community. Whether you&apos;re a student, professional, or simply someone who wants to make a difference, there&apos;s a place for you on our team. Join us in our mission to empower the Ummah through education, mentorship, and networking.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-neutral-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                Volunteer Application
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we&apos;ll get in touch with you about volunteer opportunities.
              </p>
              <VolunteerForm />
            </div>

            {/* Benefits Section */}
            <div className="mt-12 bg-white rounded-lg p-8">
              <h3 className="text-xl font-heading font-semibold mb-4 text-center">
                Why Volunteer With Us?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
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
