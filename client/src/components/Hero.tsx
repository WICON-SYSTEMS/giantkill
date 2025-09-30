import { Button } from "@/components/ui/button";
import { ShoppingCart, BookOpen, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/Healthy_cocoa_plantation_background_bf1ceda3.png";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4" data-testid="text-hero-title">
          <span className="text-primary">GIANT KILL</span> – The Ultimate Protection for Your Cocoa Crops
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          Powerful systemic and contact regenerating insecticide – The best solution for capsid control.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-chart-2 hover:bg-chart-2 text-black font-semibold"
            data-testid="button-buy-now"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Buy Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="backdrop-blur-sm bg-white/20 border-white/40 text-white hover:bg-white/30"
            data-testid="button-learn-more"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Learn More
          </Button>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary"
            data-testid="button-contact-us"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
