import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Product", path: "/product" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-heading text-2xl font-bold">
              <span className="text-primary">GIANT</span>{" "}
              <span className="text-chart-2">KILL</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.path ? "text-primary" : "text-foreground"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-2 text-base font-medium transition-colors hover:text-primary ${
                  location === item.path ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
