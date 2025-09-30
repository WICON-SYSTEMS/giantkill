import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star, MapPin, Calendar, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import jeanImage from "@assets/generated_images/Farmer_testimonial_portrait_Jean_20298f97.png";
import marylineImage from "@assets/generated_images/Agronomist_testimonial_portrait_Maryline_04695a2b.png";

const testimonials = [
  {
    id: 1,
    quote: "GIANT KILL saved my entire cocoa farm this season. Nothing else worked like this! I went from losing 60% of my crop to having the best harvest in 5 years.",
    author: "Jean Paul",
    role: "Cocoa Farmer",
    location: "South West Cameroon",
    farmSize: "5 hectares",
    experience: "15 years",
    image: jeanImage,
    rating: 5,
    results: {
      yieldIncrease: "85%",
      pestReduction: "95%",
      timeSaved: "40%"
    }
  },
  {
    id: 2,
    quote: "Easy to use, fast results, and affordable. A must-have for every cocoa grower. My clients have seen remarkable improvements in their crop health.",
    author: "Maryline A.",
    role: "Agricultural Consultant",
    location: "Douala",
    farmSize: "Multiple clients",
    experience: "12 years",
    image: marylineImage,
    rating: 5,
    results: {
      clientSatisfaction: "98%",
      recommendationRate: "100%",
      repeatUsage: "95%"
    }
  },
  {
    id: 3,
    quote: "I was skeptical at first, but Giant Kill proved me wrong. My cocoa trees are healthier than ever, and I'm getting premium prices for my beans.",
    author: "Pierre M.",
    role: "Cocoa Farmer",
    location: "Central Region",
    farmSize: "8 hectares",
    experience: "20 years",
    image: jeanImage, // Using same image as placeholder
    rating: 5,
    results: {
      yieldIncrease: "70%",
      qualityImprovement: "Excellent",
      profitIncrease: "60%"
    }
  },
  {
    id: 4,
    quote: "The best investment I've made for my farm. Giant Kill not only controls pests but also helps my plants recover faster from damage.",
    author: "Fatima K.",
    role: "Cocoa Farmer",
    location: "North West Region",
    farmSize: "3 hectares",
    experience: "8 years",
    image: marylineImage, // Using same image as placeholder
    rating: 5,
    results: {
      yieldIncrease: "90%",
      plantRecovery: "Fast",
      costSavings: "30%"
    }
  },
  {
    id: 5,
    quote: "As an agronomist, I've tested many products. Giant Kill stands out for its effectiveness and safety. Highly recommended for professional use.",
    author: "Dr. Samuel N.",
    role: "Agronomist",
    location: "Yaoundé",
    farmSize: "Research Station",
    experience: "18 years",
    image: jeanImage, // Using same image as placeholder
    rating: 5,
    results: {
      effectiveness: "95%",
      safety: "Excellent",
      reliability: "Consistent"
    }
  },
  {
    id: 6,
    quote: "My family has been farming cocoa for generations. Giant Kill is the first product that actually delivered on its promises. Game changer!",
    author: "Grace T.",
    role: "Cocoa Farmer",
    location: "East Region",
    farmSize: "12 hectares",
    experience: "25 years",
    image: marylineImage, // Using same image as placeholder
    rating: 5,
    results: {
      yieldIncrease: "75%",
      pestControl: "Complete",
      sustainability: "Improved"
    }
  }
];

const caseStudies = [
  {
    title: "Large Scale Farm Success",
    farmer: "Jean Paul",
    location: "South West Cameroon",
    farmSize: "5 hectares",
    challenge: "Severe capsid infestation threatening entire crop",
    solution: "Giant Kill application program",
    results: [
      "85% increase in yield",
      "95% reduction in pest damage",
      "40% reduction in labor costs",
      "Premium quality beans achieved"
    ],
    timeline: "6 months",
    investment: "CFA 150,000",
    return: "CFA 450,000"
  },
  {
    title: "Small Farm Transformation",
    farmer: "Fatima K.",
    location: "North West Region",
    farmSize: "3 hectares",
    challenge: "Low yield due to persistent pest problems",
    solution: "Targeted Giant Kill treatment",
    results: [
      "90% increase in healthy pods",
      "Complete pest elimination",
      "30% cost savings on inputs",
      "Improved soil health"
    ],
    timeline: "4 months",
    investment: "CFA 75,000",
    return: "CFA 200,000"
  }
];

const stats = [
  {
    number: "1,000+",
    label: "Farmers Served",
    description: "Across all major cocoa-growing regions"
  },
  {
    number: "95%",
    label: "Success Rate",
    description: "Effective capsid control achieved"
  },
  {
    number: "85%",
    label: "Average Yield Increase",
    description: "Compared to untreated crops"
  },
  {
    number: "98%",
    label: "Customer Satisfaction",
    description: "Would recommend to other farmers"
  }
];

export default function Testimonials() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What Farmers <span className="text-primary">Say</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real stories from real farmers who have transformed their cocoa farms with Giant Kill
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Join Our Success Stories</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/product">Learn About Our Product</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak to our success and farmer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Farmer Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear directly from farmers who have experienced the Giant Kill difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-chart-2 text-chart-2" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-chart-2 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-heading font-bold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {testimonial.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      {testimonial.farmSize} • {testimonial.experience} experience
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(testimonial.results).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-primary/5 rounded">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed case studies showing real farm transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-4">{study.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium">Farmer:</span>
                      <span className="text-muted-foreground">{study.farmer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Location:</span>
                      <span className="text-muted-foreground">{study.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Farm Size:</span>
                      <span className="text-muted-foreground">{study.farmSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Timeline:</span>
                      <span className="text-muted-foreground">{study.timeline}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Challenge:</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Investment</div>
                      <div className="font-bold text-destructive">{study.investment}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Return</div>
                      <div className="font-bold text-primary">{study.return}</div>
                    </div>
                  </div>
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
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your journey to better crop protection and higher yields today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-primary">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/product">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
