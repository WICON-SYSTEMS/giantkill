import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "237678473434";
    const message = encodeURIComponent("Hello! I'm interested in Giant Kill insecticide.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] text-center">
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        onClick={handleWhatsAppClick}
        data-testid="button-whatsapp"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        
      </Button>
      <p className="text-xs">Whatsapp Us</p>
    </div>
  );
}
