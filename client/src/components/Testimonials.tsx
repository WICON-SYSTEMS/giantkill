import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import jeanImage from "@assets/generated_images/Farmer_testimonial_portrait_Jean_20298f97.png";
import marylineImage from "@assets/generated_images/Agronomist_testimonial_portrait_Maryline_04695a2b.png";

const testimonials = [
  {
    quote: "GIANT KILL saved my entire cocoa farm this season. Nothing else worked like this!",
    author: "Jean Paul",
    role: "Farmer – South West Cameroon",
    image: jeanImage,
  },
  {
    quote: "Easy to use, fast results, and affordable. A must-have for every cocoa grower.",
    author: "Maryline A.",
    role: "Agronomist",
    image: marylineImage,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
            What Farmers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by agricultural professionals across Cameroon
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-chart-2 mb-4" />
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-heading font-bold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
