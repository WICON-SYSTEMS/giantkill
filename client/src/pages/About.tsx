import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Globe } from "lucide-react";
import { Link } from "wouter";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import HoverCard from "@/components/animations/HoverCard";

const teamMembers = [
  {
    name: "Dr. Jean Paul",
    role: "Chief Agronomist",
    experience: "15+ years",
    specialization: "Crop Protection & Pest Management",
  },
  {
    name: "Maryline A.",
    role: "Research Director",
    experience: "12+ years",
    specialization: "Agricultural Research & Development",
  },
  {
    name: "Pierre M.",
    role: "Field Operations Manager",
    experience: "10+ years",
    specialization: "Farm Implementation & Training",
  },
];

const achievements = [
  {
    icon: Shield,
    title: "1,000+ Farmers Served",
    description: "Successfully protected cocoa farms across Cameroon",
  },
  {
    icon: Award,
    title: "95% Success Rate",
    description: "Proven effectiveness against capsid infestations",
  },
  {
    icon: Globe,
    title: "Regional Coverage",
    description: "Serving farmers in all major cocoa-growing regions",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified agronomists and agricultural specialists",
  },
];

export default function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-primary">Giant Kill</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Leading the fight against capsid bugs and protecting cocoa crops across Cameroon since 2010
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link href="/product">Learn About Our Product</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To provide effective, sustainable solutions for cocoa farmers facing capsid bug 
                infestations, ensuring healthy crops and improved yields across Cameroon.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that every farmer deserves access to reliable pest control solutions 
                that protect their livelihood and contribute to food security.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To become the leading provider of agricultural pest control solutions in West Africa, 
                helping farmers achieve sustainable, profitable cocoa production.
              </p>
              <p className="text-lg text-muted-foreground">
                We envision a future where capsid bugs no longer threaten cocoa crops, and farmers 
                can focus on growing healthy, productive plantations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak to our commitment and success in protecting cocoa crops
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <HoverCard key={index} scale={1.05} rotate={2}>
                <Card className="text-center hover-elevate">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group">
                      <achievement.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </HoverCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced agricultural professionals dedicated to your success
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <HoverCard key={index} scale={1.05} rotate={1}>
                <Card className="hover-elevate">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group">
                      <Users className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>{member.experience}</strong> of experience
                    </p>
                    <p className="text-sm text-muted-foreground">{member.specialization}</p>
                  </CardContent>
                </Card>
              </HoverCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded in 2010 by a team of agricultural experts who witnessed the devastating 
                impact of capsid bugs on cocoa crops across Cameroon, Giant Kill was born out of 
                necessity and passion for protecting farmers' livelihoods.
              </p>
              <p>
                After years of research and field testing, we developed our flagship product - 
                a powerful combination of systemic and contact action that effectively controls 
                capsid bugs while promoting plant regeneration.
              </p>
              <p>
                Today, we're proud to serve over 1,000 farmers across Cameroon, helping them 
                protect their crops and improve their yields. Our commitment to quality, 
                effectiveness, and farmer education continues to drive our mission forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Protect Your Crops?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of farmers who trust Giant Kill for effective capsid control
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="text-primary">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="/product">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}
