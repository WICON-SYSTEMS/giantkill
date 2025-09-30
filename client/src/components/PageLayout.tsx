import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
