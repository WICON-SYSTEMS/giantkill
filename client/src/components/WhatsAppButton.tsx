import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "237680503113";
    const message = encodeURIComponent("Hello! I'm interested in Giant Kill insecticide.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#25D366] shadow-lg z-50"
      onClick={handleWhatsAppClick}
      data-testid="button-whatsapp"
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  );
}
