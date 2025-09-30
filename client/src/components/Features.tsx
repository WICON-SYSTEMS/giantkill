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
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
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
