import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Users, TrendingUp, Star } from "lucide-react";

interface MapLocation {
  id: string;
  name: string;
  coordinates: { lat: number; lng: number };
  type: "distributor" | "success-story" | "office";
  data: {
    phone?: string;
    farmersServed?: number;
    successRate?: number;
    rating?: number;
    testimonial?: string;
    farmerName?: string;
  };
}

const locations: MapLocation[] = [
  {
    id: "douala",
    name: "Douala Office",
    coordinates: { lat: 4.0483, lng: 9.7043 },
    type: "office",
    data: {
      phone: "+237 680 503 113",
      farmersServed: 250,
      successRate: 95,
    },
  },
  {
    id: "yaounde",
    name: "Yaoundé Distributor",
    coordinates: { lat: 3.848, lng: 11.5021 },
    type: "distributor",
    data: {
      phone: "+237 678 473 434",
      farmersServed: 180,
      successRate: 92,
    },
  },
  {
    id: "bamenda",
    name: "Bamenda Success Story",
    coordinates: { lat: 5.9597, lng: 10.1519 },
    type: "success-story",
    data: {
      farmersServed: 45,
      successRate: 98,
      rating: 5,
      testimonial: "Giant Kill transformed our cocoa farm completely!",
      farmerName: "Jean Paul",
    },
  },
  {
    id: "buea",
    name: "Buea Distributor",
    coordinates: { lat: 4.1551, lng: 9.2371 },
    type: "distributor",
    data: {
      phone: "+237 680 123 456",
      farmersServed: 120,
      successRate: 90,
    },
  },
  {
    id: "kumba",
    name: "Kumba Success Story",
    coordinates: { lat: 4.6363, lng: 9.4469 },
    type: "success-story",
    data: {
      farmersServed: 35,
      successRate: 96,
      rating: 5,
      testimonial: "Best investment we made for our farm!",
      farmerName: "Maryline A.",
    },
  },
];

const regionStats = {
  "South West": { farmers: 320, successRate: 94, growth: 15 },
  "Central": { farmers: 280, successRate: 91, growth: 12 },
  "North West": { farmers: 150, successRate: 89, growth: 8 },
  "Littoral": { farmers: 200, successRate: 93, growth: 18 },
};

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const getLocationIcon = (type: string) => {
    switch (type) {
      case "office":
        return "🏢";
      case "distributor":
        return "🏪";
      case "success-story":
        return "⭐";
      default:
        return "📍";
    }
  };

  const getLocationColor = (type: string) => {
    switch (type) {
      case "office":
        return "bg-blue-500";
      case "distributor":
        return "bg-green-500";
      case "success-story":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleLocationClick = (location: MapLocation) => {
    setSelectedLocation(location);
  };

  const handleRegionClick = (region: string) => {
    setSelectedRegion(selectedRegion === region ? null : region);
  };

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Our Impact Across Cameroon
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Explore our distribution network and success stories
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Map Visualization */}
            <div className="lg:col-span-2">
              <div 
                ref={mapRef}
                className="relative h-96 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border-2 border-dashed border-muted-foreground/20 overflow-hidden"
              >
                {/* Simplified map representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Interactive Map</p>
                    <p className="text-xs">Click on locations below to explore</p>
                  </div>
                </div>

                {/* Location markers */}
                {locations.map((location, index) => (
                  <div
                    key={location.id}
                    className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
                      hoveredLocation === location.id ? "z-10" : "z-0"
                    }`}
                    style={{
                      left: `${20 + (index * 15) % 60}%`,
                      top: `${30 + (index * 20) % 40}%`,
                    }}
                    onClick={() => handleLocationClick(location)}
                    onMouseEnter={() => setHoveredLocation(location.id)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    <div className={`w-8 h-8 rounded-full ${getLocationColor(location.type)} flex items-center justify-center text-white text-sm shadow-lg`}>
                      {getLocationIcon(location.type)}
                    </div>
                    {hoveredLocation === location.id && (
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg text-xs whitespace-nowrap z-20">
                        {location.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">Locations</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedLocation?.id === location.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => handleLocationClick(location)}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{getLocationIcon(location.type)}</span>
                        <span className="font-medium text-sm">{location.name}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {location.data.farmersServed} farmers • {location.data.successRate}% success
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Region Stats */}
              <div>
                <h3 className="font-semibold mb-3">Regional Statistics</h3>
                <div className="space-y-2">
                  {Object.entries(regionStats).map(([region, stats]) => (
                    <div
                      key={region}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedRegion === region
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => handleRegionClick(region)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{region}</span>
                        <Badge variant="outline" className="text-xs">
                          +{stats.growth}%
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {stats.farmers} farmers • {stats.successRate}% success
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Selected Location Details */}
          {selectedLocation && (
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <span className="text-lg">{getLocationIcon(selectedLocation.type)}</span>
                    {selectedLocation.name}
                  </h4>
                  <p className="text-sm text-muted-foreground capitalize">
                    {selectedLocation.type.replace("-", " ")}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedLocation(null)}
                >
                  ×
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{selectedLocation.data.farmersServed} farmers served</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span>{selectedLocation.data.successRate}% success rate</span>
                  </div>
                  {selectedLocation.data.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{selectedLocation.data.phone}</span>
                    </div>
                  )}
                  {selectedLocation.data.rating && (
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{selectedLocation.data.rating}/5 rating</span>
                    </div>
                  )}
                </div>

                {selectedLocation.data.testimonial && (
                  <div className="p-3 bg-white rounded border-l-4 border-primary">
                    <p className="text-sm italic">"{selectedLocation.data.testimonial}"</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      — {selectedLocation.data.farmerName}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
