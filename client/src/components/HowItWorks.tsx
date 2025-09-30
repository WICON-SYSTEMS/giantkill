import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import HoverCard from "@/components/animations/HoverCard";
import capsidImage from "@assets/generated_images/Capsid_bug_pest_identification_0a96bcdb.png";

const steps = [
  {
    number: "1",
    title: "Absorbed by Plant",
    description: "Active ingredients are absorbed into the plant's vascular system",
  },
  {
    number: "2",
    title: "Contact Elimination",
    description: "Destroys pests on contact when they touch treated surfaces",
  },
  {
    number: "3",
    title: "Prevents Infestation",
    description: "Creates a protective barrier against future pest attacks",
  },
  {
    number: "4",
    title: "Plant Recovery",
    description: "Promotes regeneration and boosts plant productivity",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-how-it-works-title">
            How GIANT KILL Protects Your Crops
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the science behind effective capsid control
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`card-step-${index}`}>
              <HoverCard scale={1.05} rotate={1}>
                <Card className="hover-elevate h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 group">
                      <span className="group-hover:scale-110 transition-transform duration-200">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </HoverCard>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-primary h-6 w-6 animate-pulse" />
              )}
            </div>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.5}>
          <Card className="bg-destructive/10 border-destructive/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-4 text-destructive">
                    Know the Enemy: The Capsid Bug
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                      <span>Sucks sap from tender shoots causing plant damage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                      <span>Causes wilting, black pod disease, and crop death</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                      <span>Spreads rapidly without proper control measures</span>
                    </li>
                  </ul>
                </div>
                <HoverCard scale={1.05}>
                  <img
                    src={capsidImage}
                    alt="Capsid Bug"
                    className="rounded-md w-full"
                    data-testid="img-capsid-bug"
                  />
                </HoverCard>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
