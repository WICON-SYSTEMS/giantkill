import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    details: ["", "+237 678 473 434"],
    description: "Call or WhatsApp us for immediate assistance",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["giantkillgroup@yahoo.com"],
    description: "Send us an email and we'll respond within 24 hours",
    action: "Send Email"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123", "Anywhere, Cameroon"],
    description: "Visit our office for in-person consultation",
    action: "Get Directions"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
    description: "We're here to help during business hours",
    action: "View Hours"
  }
];

const faqs = [
  {
    question: "How quickly can I get Giant Kill delivered?",
    answer: "We offer same-day delivery in Douala and 2-3 day delivery to other regions in Cameroon. Contact us for specific delivery times to your location."
  },
  {
    question: "What is the recommended dosage for Giant Kill?",
    answer: "Mix 2-3ml per liter of water for foliar application. For specific recommendations based on your crop and pest pressure, consult with our agronomists."
  },
  {
    question: "Is Giant Kill safe for organic farming?",
    answer: "Giant Kill is a conventional pesticide. If you're practicing organic farming, please contact us to discuss alternative solutions that meet your certification requirements."
  },
  {
    question: "Do you provide training on proper application?",
    answer: "Yes! We offer free training sessions for farmers on proper application techniques, safety measures, and integrated pest management strategies."
  },
  {
    question: "What if Giant Kill doesn't work for my specific situation?",
    answer: "We stand behind our product with a satisfaction guarantee. If you're not satisfied with the results, contact us and we'll work with you to find the right solution."
  },
  {
    question: "Can I get a bulk discount for large orders?",
    answer: "Yes, we offer volume discounts for orders over 50 liters. Contact our sales team for a customized quote based on your requirements."
  }
];

const regions = [
  "Douala",
  "Yaoundé", 
  "Bamenda",
  "Buea",
  "Kumba",
  "Limbe",
  "Kribi",
  "Ebolowa",
  "Bertoua",
  "Garoua",
  "Maroua",
  "Ngaoundéré",
  "Other"
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    region: "",
    farmSize: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      region: "", 
      farmSize: "", 
      subject: "", 
      message: "" 
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "237680503113";
    const message = encodeURIComponent("Hello! I'm interested in Giant Kill insecticide. Can you help me?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about Giant Kill? We're here to help you protect your crops and improve your yields.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={handleWhatsAppClick} size="lg" className="bg-[#25D366] hover:bg-[#25D366]">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+237680503113">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the most convenient way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-elevate text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{method.title}</h3>
                  <div className="space-y-1 mb-3">
                    {method.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+237..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="region">Region</Label>
                      <Select value={formData.region} onValueChange={(value) => setFormData({ ...formData, region: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your region" />
                        </SelectTrigger>
                        <SelectContent>
                          {regions.map((region) => (
                            <SelectItem key={region} value={region}>
                              {region}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="farmSize">Farm Size</Label>
                    <Select value={formData.farmSize} onValueChange={(value) => setFormData({ ...formData, farmSize: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your farm size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Less than 1 hectare</SelectItem>
                        <SelectItem value="medium">1-5 hectares</SelectItem>
                        <SelectItem value="large">5-20 hectares</SelectItem>
                        <SelectItem value="commercial">More than 20 hectares</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your needs, questions, or concerns..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-4">Office Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Address</div>
                        <div className="text-sm text-muted-foreground">
                          123 Anywhere, Cameroon
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Phone Numbers</div>
                        <div className="text-sm text-muted-foreground">
                          <br />
                          +237 678 473 434
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">
                          giantkillgroup@yahoo.com
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Business Hours</div>
                        <div className="text-sm text-muted-foreground">
                          Mon-Fri: 8:00 AM - 6:00 PM<br />
                          Sat: 9:00 AM - 2:00 PM<br />
                          Sun: Closed
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-4">Quick Response</h3>
                  <p className="text-muted-foreground mb-4">
                    For immediate assistance, use WhatsApp or call us directly. 
                    We typically respond within 2 hours during business hours.
                  </p>
                  <Button onClick={handleWhatsAppClick} className="w-full bg-[#25D366] hover:bg-[#25D366]">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about Giant Kill and our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today and let's discuss how Giant Kill can help your farm
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={handleWhatsAppClick} size="lg" variant="secondary" className="text-primary bg-white hover:bg-gray-100">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+237680503113">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
