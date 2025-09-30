import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import damagedImage from "@assets/generated_images/Damaged_cocoa_crops_before_aab99e93.png";
import healthyImage from "@assets/generated_images/Healthy_cocoa_crops_after_e6a56131.png";
import fieldImage from "@assets/generated_images/Field_application_demonstration_51ad5748.png";

const galleryItems = [
  {
    image: damagedImage,
    title: "Before Treatment",
    badge: "Damaged",
    badgeVariant: "destructive" as const,
  },
  {
    image: healthyImage,
    title: "After Treatment",
    badge: "Healthy",
    badgeVariant: "default" as const,
  },
  {
    image: fieldImage,
    title: "Field Application",
    badge: "Training",
    badgeVariant: "secondary" as const,
  },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-testid="text-gallery-title">
            See the Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real transformations from farms across Cameroon
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-gallery-${index}`}>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge
                    variant={item.badgeVariant}
                    className="absolute top-4 right-4"
                  >
                    {item.badge}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
