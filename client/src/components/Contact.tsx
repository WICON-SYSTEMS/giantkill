import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MotionButton from "@/components/ui/motion-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/animations/AnimatedSection";
import StaggerContainer from "@/components/animations/StaggerContainer";
import HoverCard from "@/components/animations/HoverCard";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you protect your crops
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.2} >
            <HoverCard scale={1.02}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                        data-testid="input-name"
                        className="transition-all duration-200 "
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                        data-testid="input-email"
                        className="transition-all duration-200 "
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+237..."
                        data-testid="input-phone"
                        className="transition-all duration-200 "
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help?"
                        rows={4}
                        required
                        data-testid="input-message"
                        className="transition-all duration-200 "
                      />
                    </div>
                    <MotionButton 
                      type="submit" 
                      className="w-full group p-3 " 
                      data-testid="button-submit-contact"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(0, 177, 79, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
                      Send Message
                    </MotionButton>
                  </form>
                </CardContent>
              </Card>
            </HoverCard>
          </AnimatedSection>

          <StaggerContainer className="space-y-6">
            <HoverCard scale={1.02} rotate={1}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <Phone className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-200" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold mb-2">Phone / WhatsApp</h3>
                      <p className="text-muted-foreground"></p>
                      <p className="text-muted-foreground">+237 678 473 434</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </HoverCard>

            <HoverCard scale={1.02} rotate={1}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <Mail className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-200" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">giantkillgroup@yahoo.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </HoverCard>

            <HoverCard scale={1.02} rotate={1}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <MapPin className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-200" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold mb-2">Location</h3>
                      <p className="text-muted-foreground">123 Anywhere, Cameroon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </HoverCard>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
