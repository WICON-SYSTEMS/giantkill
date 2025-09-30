import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Shield, Zap, Clock, Leaf, Bug, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import capsidImage from "@assets/generated_images/Capsid_bug_pest_identification_0a96bcdb.png";
import damagedImage from "@assets/generated_images/Damaged_cocoa_crops_before_aab99e93.png";
import healthyImage from "@assets/generated_images/Healthy_cocoa_crops_after_e6a56131.png";

const processSteps = [
  {
    number: 1,
    title: "Absorption",
    description: "Active ingredients are absorbed through the plant's vascular system",
    details: "Thiamen and Emamectine penetrate the plant tissues and move throughout the system",
    icon: Shield,
    color: "bg-blue-500"
  },
  {
    number: 2,
    title: "Contact Elimination",
    description: "Destroys pests immediately upon contact with treated surfaces",
    details: "Direct contact with the insecticide causes rapid pest mortality",
    icon: Zap,
    color: "bg-yellow-500"
  },
  {
    number: 3,
    title: "Systemic Protection",
    description: "Creates a protective barrier throughout the plant",
    details: "Pests feeding on treated plants ingest the active ingredients and die",
    icon: Clock,
    color: "bg-green-500"
  },
  {
    number: 4,
    title: "Plant Recovery",
    description: "Promotes regeneration and boosts plant productivity",
    details: "Helps damaged plants recover and improves overall crop health",
    icon: Leaf,
    color: "bg-emerald-500"
  },
];

const capsidFacts = [
  {
    icon: Bug,
    title: "Rapid Reproduction",
    description: "Can produce multiple generations per year",
    impact: "High"
  },
  {
    icon: AlertTriangle,
    title: "Plant Damage",
    description: "Sucks sap from tender shoots and pods",
    impact: "Severe"
  },
  {
    icon: Clock,
    title: "Quick Spread",
    description: "Can infest entire plantations within weeks",
    impact: "High"
  },
  {
    icon: Shield,
    title: "Resistance Building",
    description: "Develops resistance to single-mode pesticides",
    impact: "Moderate"
  },
];

const applicationTimeline = [
  {
    phase: "Pre-Application",
    duration: "1-2 days",
    activities: [
      "Inspect crop for pest presence",
      "Check weather conditions",
      "Prepare application equipment",
      "Calculate required dosage"
    ]
  },
  {
    phase: "Application",
    duration: "2-4 hours",
    activities: [
      "Mix product according to label",
      "Apply evenly to all plant surfaces",
      "Ensure complete coverage",
      "Record application details"
    ]
  },
  {
    phase: "Post-Application",
    duration: "24-48 hours",
    activities: [
      "Monitor pest mortality",
      "Check for any adverse effects",
      "Document results",
      "Plan follow-up if needed"
    ]
  },
  {
    phase: "Protection Period",
    duration: "14-21 days",
    activities: [
      "Monitor crop health",
      "Check for new infestations",
      "Assess plant recovery",
      "Plan next application"
    ]
  },
];

const benefits = [
  {
    title: "Immediate Control",
    description: "Rapid knockdown of existing pest populations",
    icon: Zap
  },
  {
    title: "Long-term Protection",
    description: "Extended residual activity prevents reinfestation",
    icon: Clock
  },
  {
    title: "Plant Health",
    description: "Promotes recovery and improves crop vigor",
    icon: Leaf
  },
  {
    title: "Cost Effective",
    description: "Reduces application frequency and labor costs",
    icon: Shield
  },
];

export default function HowItWorks() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How <span className="text-primary">Giant Kill</span> Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Understanding the science behind effective capsid control and crop protection
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/product">Learn About Our Product</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get Expert Advice</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              The 4-Step Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How Giant Kill provides comprehensive protection for your cocoa crops
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="hover-elevate h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-4`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">Step {step.number}</div>
                    <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <p className="text-sm text-muted-foreground">{step.details}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary h-6 w-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding the Enemy */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Know Your Enemy: The Capsid Bug
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Understanding capsid bug behavior is crucial for effective control. 
                These pests can cause devastating damage to cocoa crops if left unchecked.
              </p>

              <div className="space-y-6">
                {capsidFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <fact.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-1">{fact.title}</h3>
                      <p className="text-muted-foreground mb-2">{fact.description}</p>
                      <Badge variant={fact.impact === "Severe" ? "destructive" : fact.impact === "High" ? "default" : "secondary"}>
                        {fact.impact} Impact
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src={capsidImage}
                alt="Capsid Bug Identification"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before and After */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              See the Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from farms using Giant Kill for capsid control
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-destructive/30">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={damagedImage}
                    alt="Damaged Cocoa Crops"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Badge variant="destructive" className="absolute top-4 right-4">
                    Before Treatment
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2 text-destructive">
                    Damaged Crops
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Wilting and stunted growth</li>
                    <li>• Black pod disease</li>
                    <li>• Reduced yield potential</li>
                    <li>• Economic losses</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={healthyImage}
                    alt="Healthy Cocoa Crops"
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4">
                    After Treatment
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2 text-primary">
                    Healthy Crops
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Vigorous growth and development</li>
                    <li>• Healthy pod formation</li>
                    <li>• Increased yield potential</li>
                    <li>• Improved profitability</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Application Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What to expect during and after Giant Kill application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationTimeline.map((phase, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                      {index + 1}
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-1">{phase.phase}</h3>
                    <Badge variant="outline" className="text-xs">{phase.duration}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose Giant Kill?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The advantages of using Giant Kill for capsid control
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Crops?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Learn more about Giant Kill and how it can help your farm
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-primary">
              <Link href="/product">View Product Details</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
