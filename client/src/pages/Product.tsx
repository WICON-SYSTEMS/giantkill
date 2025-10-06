import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Shield, Zap, Clock, Leaf, Bug, Calculator, Package, MapPin } from "lucide-react";
import { Link } from "wouter";
import ProgressiveImage from "@/components/ui/progressive-image";
import DosageCalculator from "@/components/DosageCalculator";
import ProductConfigurator from "@/components/ProductConfigurator";
import InteractiveMap from "@/components/InteractiveMap";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import HoverCard from "@/components/animations/HoverCard";
import MetaTags from "@/components/seo/MetaTags";
import StructuredData from "@/components/seo/StructuredData";
import productImage from "@assets/generated_images/Giant_Kill_product_bottle_30d02d30.png";

const specifications = [
  { label: "Product Name", value: "Giant Kill Insecticide" },
  { label: "Active Ingredients", value: "Thiamen 45% + Emamectine 20%" },
  { label: "Formulation", value: "Suspension Concentrate (SC)" },
  { label: "Pack Size", value: "500ml, 1L, 5L" },
  { label: "Target Pests", value: "Capsid bugs, Aphids, Whiteflies" },
  { label: "Crop Compatibility", value: "Cocoa, Coffee, Vegetables" },
  { label: "Application Method", value: "Foliar spray" },
  { label: "Pre-harvest Interval", value: "14 days" },
];

const features = [
  {
    icon: Shield,
    title: "Dual Action Protection",
    description: "Combines systemic and contact action for comprehensive pest control",
    details: "Systemic action provides internal protection while contact action eliminates pests on treated surfaces"
  },
  {
    icon: Zap,
    title: "Fast Acting",
    description: "Quick knockdown effect within 24-48 hours",
    details: "Rapid pest elimination ensures immediate protection for your crops"
  },
  {
    icon: Clock,
    title: "Long Lasting",
    description: "Extended protection up to 21 days",
    details: "Reduces application frequency and provides sustained crop protection"
  },
  {
    icon: Leaf,
    title: "Plant Regeneration",
    description: "Promotes recovery of damaged plant tissue",
    details: "Helps plants recover from pest damage and improves overall health"
  },
  {
    icon: Bug,
    title: "Broad Spectrum",
    description: "Effective against multiple pest species",
    details: "Controls capsid bugs, aphids, whiteflies, and other sucking pests"
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Preparation",
    description: "Mix 2-3ml per liter of water",
    details: "Ensure proper dilution for optimal effectiveness"
  },
  {
    step: 2,
    title: "Timing",
    description: "Apply early morning or late evening",
    details: "Avoid application during hot, sunny conditions"
  },
  {
    step: 3,
    title: "Coverage",
    description: "Spray evenly on all plant surfaces",
    details: "Ensure complete coverage including undersides of leaves"
  },
  {
    step: 4,
    title: "Frequency",
    description: "Repeat every 14-21 days as needed",
    details: "Monitor pest pressure and adjust application schedule accordingly"
  },
];

const safetyInfo = [
  "Wear protective clothing during application",
  "Keep out of reach of children and animals",
  "Do not contaminate water sources",
  "Store in cool, dry place away from food",
  "Follow all local regulations and guidelines",
  "Dispose of empty containers properly"
];

export default function Product() {
  return (
    <>
      <MetaTags
        title="Giant Kill Insecticide - Product Details & Specifications"
        description="Learn about Giant Kill insecticide specifications, active ingredients (Thiamen 45% + Emamectine 20%), application methods, and safety information. Trusted by 1,000+ farmers in Cameroon."
        keywords={[
          "giant kill insecticide",
          "thiamen emamectine",
          "capsid control product",
          "cocoa pesticide",
          "agricultural insecticide",
          "pest control cameroon",
          "crop protection",
          "systemic insecticide",
          "contact insecticide",
          "cocoa farming",
        ]}
        type="product"
        url="/product"
      />
      <StructuredData
        type="product"
        data={{
          name: "Giant Kill Insecticide",
          description: "Powerful systemic and contact insecticide for capsid control",
          image: productImage,
          price: "Contact for pricing",
          reviews: [
            {
              author: "Jean Paul",
              rating: 5,
              text: "Giant Kill saved my entire cocoa farm this season. Nothing else worked like this!",
            },
            {
              author: "Maryline A.",
              rating: 5,
              text: "Easy to use, fast results, and affordable. A must-have for every cocoa grower.",
            },
          ],
        }}
      />
      <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-primary">Giant Kill</span> Insecticide
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The most effective solution for capsid control and crop protection. 
                Trusted by over 1,000 farmers across Cameroon.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Order Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/how-it-works">How It Works</Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4} direction="right">
              <div className="flex justify-center">
                <HoverCard scale={1.05}>
                  <ProgressiveImage
                    src={productImage}
                    alt="Giant Kill Product"
                    className="w-full max-w-md h-96"
                    priority
                  />
                </HoverCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Product Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Giant Kill is a powerful systemic and contact insecticide specifically 
              formulated to control capsid bugs and other sucking pests in cocoa crops.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-12">
            <HoverCard>
              <Card className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">45%</div>
                  <div className="text-lg font-semibold mb-2">Thiamen</div>
                  <div className="text-sm text-muted-foreground">Systemic action for internal protection</div>
                </CardContent>
              </Card>
            </HoverCard>
            <HoverCard>
              <Card className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">20%</div>
                  <div className="text-lg font-semibold mb-2">Emamectine</div>
                  <div className="text-sm text-muted-foreground">Contact action for immediate control</div>
                </CardContent>
              </Card>
            </HoverCard>
            <HoverCard>
              <Card className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">21</div>
                  <div className="text-lg font-semibold mb-2">Days</div>
                  <div className="text-sm text-muted-foreground">Long-lasting protection</div>
                </CardContent>
              </Card>
            </HoverCard>
          </StaggerContainer>
        </div>
      </section>

      {/* Detailed Product Information */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 h-auto p-1">
              <TabsTrigger value="features" className="text-xs md:text-sm px-2 py-2 h-auto">Features</TabsTrigger>
              <TabsTrigger value="specifications" className="text-xs md:text-sm px-2 py-2 h-auto">Specs</TabsTrigger>
              <TabsTrigger value="application" className="text-xs md:text-sm px-2 py-2 h-auto">Application</TabsTrigger>
              <TabsTrigger value="safety" className="text-xs md:text-sm px-2 py-2 h-auto">Safety</TabsTrigger>
              <TabsTrigger value="calculator" className="text-xs md:text-sm px-2 py-2 h-auto">Calculator</TabsTrigger>
              <TabsTrigger value="configurator" className="text-xs md:text-sm px-2 py-2 h-auto">Config</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="p-4 md:p-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                        <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground mb-2 md:mb-3 text-sm md:text-base">{feature.description}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{feature.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg md:text-xl">Product Specifications</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-border gap-1">
                        <span className="font-medium text-sm md:text-base">{spec.label}:</span>
                        <span className="text-muted-foreground text-sm md:text-base break-words">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="application" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {applicationSteps.map((step, index) => (
                  <Card key={index} className="hover-elevate">
                    <CardContent className="p-4 md:p-6 text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-3 md:mb-4">
                        {step.step}
                      </div>
                      <h3 className="font-heading text-base md:text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-2 text-sm md:text-base">{step.description}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{step.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="safety" className="mt-8">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg md:text-xl">Safety Information</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="space-y-3">
                    {safetyInfo.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 md:mt-6 p-3 md:p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                    <p className="text-xs md:text-sm font-medium text-destructive">
                      ⚠️ Always read and follow the product label instructions before use.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calculator" className="mt-8">
              <DosageCalculator />
            </TabsContent>

            <TabsContent value="configurator" className="mt-8">
              <ProductConfigurator />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Proven Results
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Real data from field trials and farmer feedback
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <Card className="text-center hover-elevate">
              <CardContent className="p-4 md:p-8">
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2">85%</div>
                <div className="text-base md:text-lg font-semibold mb-2">Reduction in Crop Loss</div>
                <div className="text-muted-foreground text-sm md:text-base">Average improvement in crop yield</div>
              </CardContent>
            </Card>
            <Card className="text-center hover-elevate">
              <CardContent className="p-4 md:p-8">
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2">2x</div>
                <div className="text-base md:text-lg font-semibold mb-2">Increase in Healthy Pods</div>
                <div className="text-muted-foreground text-sm md:text-base">More productive cocoa trees</div>
              </CardContent>
            </Card>
            <Card className="text-center hover-elevate sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 md:p-8">
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2">95%</div>
                <div className="text-base md:text-lg font-semibold mb-2">Farmer Satisfaction</div>
                <div className="text-muted-foreground text-sm md:text-base">Would recommend to other farmers</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Impact Across Cameroon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our distribution network and see success stories from farmers across the country
            </p>
          </div>
          <InteractiveMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Protect Your Crops?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Get Giant Kill today and join thousands of successful farmers
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Button asChild size="lg" variant="secondary" className="text-primary w-full sm:w-auto">
              <Link href="/contact">Order Now</Link>
            </Button>
            {/* <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button> */}
          </div>
        </div>
      </section>
    </PageLayout>
    </>
  );
}
