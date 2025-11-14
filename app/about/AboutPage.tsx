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
      {/* Modern Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-primary">
        <div className="absolute inset-0 bg-geometric-pattern opacity-10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block glass px-6 py-2 rounded-full mb-8">
              <span className="text-sm font-semibold text-gold">Who We Are</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg">
              About Us
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-gold via-accent to-gold rounded-full mb-8" />
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Our Mission, Values & Community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Tabs Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-sand/30 to-white" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Tabs defaultValue="mission" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="glass-card p-2 grid w-full max-w-3xl grid-cols-4 gap-2">
                <TabsTrigger value="mission" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-float transition-all duration-300">Mission</TabsTrigger>
                <TabsTrigger value="programs" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-float transition-all duration-300">Programs</TabsTrigger>
                <TabsTrigger value="story" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-float transition-all duration-300">Our Story</TabsTrigger>
                <TabsTrigger value="team" className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-float transition-all duration-300">Team</TabsTrigger>
              </TabsList>
            </div>

            {/* Mission & Values Tab */}
            <TabsContent value="mission">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
              >
                <div className="glass-card p-8 md:p-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                    <span className="gradient-text">Our Mission and Values</span>
                  </h2>
                  <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                    <p className="text-xl">
                      At Islamic Alliance, our mission is to unite and empower the Ummah by providing
                      high-quality educational resources, mentorship programs, and networking
                      opportunities.
                    </p>
                    <p className="text-xl">
                      Our vision is a global community where Muslims thrive academically,
                      professionally, and personally while upholding their faith.
                    </p>
                  </div>

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
                        : undefined;
                      return (
                        <TeamMemberCard
                          key={member._id}
                          name={member.name}
                          title={member.title}
                          photo={photoUrl ? {
                            asset: { url: photoUrl },
                            alt: member.photo?.alt || `Photo of ${member.name}`,
                          } : undefined}
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

