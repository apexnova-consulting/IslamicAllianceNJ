'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { PortableText } from '@/components/PortableText';
import { Button } from '@/components/ui/button';
import { urlForImage } from '@/lib/sanity.image';

interface AboutPageProps {
  programs: any[];
  initiatives: any[];
  team: any[];
}

export function AboutPage({ programs, initiatives, team }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Our Mission and Values
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="mission" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-4">
                <TabsTrigger value="mission">Mission</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
                <TabsTrigger value="story">Our Story</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>
            </div>

            {/* Mission & Values Tab */}
            <TabsContent value="mission">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                    Our Mission and Values
                  </h2>
                  <p className="text-lg leading-relaxed mb-6">
                    At Islamic Alliance, our mission is to unite and empower the Ummah by providing
                    high-quality educational resources, mentorship programs, and networking
                    opportunities.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Our vision is a global community where Muslims thrive academically,
                    professionally, and personally while upholding their faith.
                  </p>

                  {/* Initiatives Section */}
                  {initiatives && initiatives.length > 0 && (
                    <div className="mt-12" id="initiatives">
                      <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                        Our Initiatives
                      </h3>
                      <p className="text-lg mb-6">Creating Positive Impact in the Ummah</p>
                      {initiatives.map((initiative: any) => (
                        <div key={initiative._id} className="mb-8">
                          <h4 className="text-xl font-semibold mb-3">{initiative.title}</h4>
                          {initiative.description && (
                            <PortableText value={initiative.description} />
                          )}
                          {initiative.images && initiative.images.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                              {initiative.images.map((image: any, idx: number) => (
                                <div key={idx} className="relative aspect-video rounded-lg overflow-hidden">
                                  <Image
                                    src={urlForImage(image).url()}
                                    alt={image.alt || initiative.title}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </TabsContent>

            {/* Programs Tab */}
            <TabsContent value="programs">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Programs & Services
                </h2>
                {programs && programs.length > 0 ? (
                  <div className="space-y-8">
                    {programs.map((program: any) => (
                      <div key={program._id} className="border-b pb-8 last:border-b-0">
                        <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>
                        <p className="text-lg text-muted-foreground mb-4">{program.summary}</p>
                        {program.longDescription && (
                          <div className="prose max-w-none">
                            <PortableText value={program.longDescription} />
                          </div>
                        )}
                        {program.images && program.images.length > 0 && (
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            {program.images.map((image: any, idx: number) => (
                              <div key={idx} className="relative aspect-video rounded-lg overflow-hidden">
                                <Image
                                  src={urlForImage(image).url()}
                                  alt={image.alt || program.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="bg-neutral-sand p-8 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Want to make a difference?</h3>
                      <p className="mb-4">Join our volunteer team and help us create positive change.</p>
                      <Button asChild>
                        <Link href="/get-involved">Reach out today</Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground">No programs available at this time.</p>
                )}
              </motion.div>
            </TabsContent>

            {/* Our Story Tab */}
            <TabsContent value="story">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                    Our Story
                  </h2>
                  <p className="text-lg leading-relaxed">
                    Islamic Alliance was founded with a simple yet powerful goal: to create a
                    platform that nurtures the growth and success of Muslims worldwide. Recognizing
                    the need for stronger networks and opportunities, we established this initiative
                    to connect students, professionals, and community leaders.
                  </p>
                  <p className="text-lg leading-relaxed mt-6">
                    Join us in shaping a brighter future for the Ummah.
                  </p>
                </div>
              </motion.div>
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
                  Meet The Team
                </h2>
                {team && team.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {team.map((member: any) => {
                      const photoUrl = member.photo?.asset
                        ? urlForImage(member.photo).url()
                        : null;
                      return (
                        <TeamMemberCard
                          key={member._id}
                          name={member.name}
                          title={member.title}
                          photo={{
                            asset: { url: photoUrl },
                            alt: member.photo?.alt || `Photo of ${member.name}`,
                          }}
                          bio={member.bio}
                          linkedinUrl={member.linkedinUrl}
                          facebookUrl={member.facebookUrl}
                          instagramUrl={member.instagramUrl}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground">
                    Team information will be available soon.
                  </p>
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

