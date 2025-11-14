export const metadata = {
  title: 'Sadaqah Nafilah | Islamic Alliance',
  description: 'Learn about Sadaqah Nafilah and how you can contribute to Islamic Alliance initiatives.',
};

export default function SadaqahNafilahPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Sadaqah Nafilah
            </h1>
            <p className="text-xl text-muted-foreground">
              Supporting the Ummah through Voluntary Charity
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              What is Sadaqah Nafilah?
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Sadaqah Nafilah refers to voluntary charity given beyond obligatory Zakat. It is a
              beautiful way to support the community and earn continuous rewards from Allah (SWT).
            </p>

            <h3 className="text-2xl font-heading font-semibold text-primary mt-8 mb-4">
              How Your Contribution Helps
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Your Sadaqah Nafilah contributions support Islamic Alliance's mission to:
            </p>
            <ul className="space-y-2 mb-6">
              <li>Provide educational resources and mentorship programs</li>
              <li>Organize community events and networking opportunities</li>
              <li>Support students and professionals in their faith journey</li>
              <li>Create lasting positive impact in the Muslim community</li>
            </ul>

            <div className="bg-neutral-sand p-8 rounded-lg my-8">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Make a Contribution Today
              </h3>
              <p className="text-muted-foreground mb-4">
                Your support, no matter the amount, makes a significant difference in empowering
                the Ummah.
              </p>
              <a
                href="#donate"
                className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-semibold"
              >
                Donate Now
              </a>
            </div>

            <p className="text-sm text-muted-foreground italic">
              "The example of those who spend their wealth in the way of Allah is like a seed [of
              grain] which grows seven spikes; in each spike is a hundred grains. And Allah
              multiplies [His reward] for whom He wills." - Quran 2:261
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

