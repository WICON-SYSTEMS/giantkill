import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-heading text-2xl font-bold mb-4">
              <span className="text-primary">GIANT</span>{" "}
              <span className="text-chart-2">KILL</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The best solution for capsid control and crop protection.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-sm text-muted-foreground hover:text-primary">
                  Our Product
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-primary">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-muted-foreground hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+237 680 503 113</li>
              <li>+237 678 473 434</li>
              <li>giantkillgroup@yahoo.com</li>
              <li>www.gaintkill.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VI MA Cameroon. Distributed by Douala L.T/Oversees/UK</p>
        </div>
      </div>
    </footer>
  );
}
