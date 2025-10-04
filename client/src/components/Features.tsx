import { Card, CardContent } from "@/components/ui/card";
import { Shield, Sprout, Clock, Bug } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import HoverCard from "@/components/animations/HoverCard";

const features = [
  {
    icon: Shield,
    title: "Dual Action Protection",
    description: "Combines systemic and contact action for comprehensive pest control",
  },
  {
    icon: Sprout,
    title: "Plant Regeneration",
    description: "Helps damaged plants recover and promotes healthy growth",
  },
  {
    icon: Clock,
    title: "Long-lasting Effect",
    description: "Provides extended protection to keep your crops safe",
  },
  {
    icon: Bug,
    title: "Effective Against Capsid",
    description: "Targets all stages of capsid bugs and related pests",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%2300B14F%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-features-title">
            Why Choose Giant Kill?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by over 1,000 farmers for superior crop protection and proven results
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <HoverCard key={index} scale={1.05} rotate={2}>
              <Card className="hover-elevate h-full" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group">
                    <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </HoverCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
