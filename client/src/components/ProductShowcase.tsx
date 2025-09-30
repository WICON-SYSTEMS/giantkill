import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import productImage from "@assets/generated_images/Giant_Kill_product_bottle_30d02d30.png";

export default function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={productImage}
              alt="Giant Kill Product"
              className="w-full max-w-md mx-auto"
              data-testid="img-product"
            />
          </div>

          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" data-testid="text-product-title">
              What is GIANT KILL?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              GIANT KILL is a powerful insecticide combining systemic and contact action to eradicate capsid bugs and other pests. It works fast, lasts long, and supports crop regeneration.
            </p>

            <div className="space-y-4 mb-8">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-heading text-lg font-bold mb-2">Active Ingredients</h3>
                  <div className="flex gap-6">
                    <div>
                      <div className="text-2xl font-bold text-primary">45%</div>
                      <div className="text-sm text-muted-foreground">Thiamen</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">20%</div>
                      <div className="text-sm text-muted-foreground">Emamectine</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-primary">2x</div>
                    <div className="text-sm text-muted-foreground">Increase in healthy pods</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-primary">85%</div>
                    <div className="text-sm text-muted-foreground">Reduction in crop loss</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-primary">1,000+</div>
                    <div className="text-sm text-muted-foreground">Trusted farmers</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Button className="bg-chart-2 hover:bg-chart-2 text-black font-semibold" data-testid="button-download-brochure">
              <Download className="mr-2 h-5 w-5" />
              Download Product Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
