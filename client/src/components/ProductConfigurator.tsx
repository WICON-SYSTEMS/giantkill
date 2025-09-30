import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Zap, 
  Clock, 
  Leaf, 
  Bug, 
  CheckCircle, 
  ArrowRight,
  Package,
  Truck,
  Phone
} from "lucide-react";
import { Link } from "wouter";

interface ProductConfiguration {
  farmSize: "small" | "medium" | "large";
  pestType: "capsid" | "aphids" | "whiteflies" | "mixed";
  urgency: "preventive" | "moderate" | "urgent";
  budget: "basic" | "standard" | "premium";
  region: string;
}

const farmSizeOptions = {
  small: { label: "Small Farm", description: "1-5 hectares", icon: "🌱" },
  medium: { label: "Medium Farm", description: "5-20 hectares", icon: "🌿" },
  large: { label: "Large Farm", description: "20+ hectares", icon: "🌳" },
};

const pestTypeOptions = {
  capsid: { label: "Capsid Bugs", description: "Primary target pest", severity: "high" },
  aphids: { label: "Aphids", description: "Sucking insects", severity: "medium" },
  whiteflies: { label: "Whiteflies", description: "Flying pests", severity: "medium" },
  mixed: { label: "Mixed Infestation", description: "Multiple pest types", severity: "high" },
};

const urgencyOptions = {
  preventive: { label: "Preventive", description: "No current damage", color: "bg-green-100 text-green-800" },
  moderate: { label: "Moderate", description: "Some damage visible", color: "bg-yellow-100 text-yellow-800" },
  urgent: { label: "Urgent", description: "Severe damage", color: "bg-red-100 text-red-800" },
};

const budgetOptions = {
  basic: { label: "Basic Package", price: "15,000 CFA", features: ["500ml bottle", "Basic support"] },
  standard: { label: "Standard Package", price: "45,000 CFA", features: ["1L bottle", "Phone support", "Application guide"] },
  premium: { label: "Premium Package", price: "120,000 CFA", features: ["5L bottle", "Expert consultation", "Field visit", "Training"] },
};

const regions = [
  "Douala", "Yaoundé", "Bamenda", "Buea", "Kumba", "Limbe", 
  "Kribi", "Ebolowa", "Bertoua", "Garoua", "Maroua", "Ngaoundéré"
];

export default function ProductConfigurator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [configuration, setConfiguration] = useState<ProductConfiguration>({
    farmSize: "small",
    pestType: "capsid",
    urgency: "moderate",
    budget: "standard",
    region: "Douala",
  });

  const steps = [
    { id: "farmSize", title: "Farm Size", description: "Select your farm size" },
    { id: "pestType", title: "Pest Type", description: "What pests are you targeting?" },
    { id: "urgency", title: "Urgency", description: "How urgent is the treatment?" },
    { id: "budget", title: "Budget", description: "Choose your package" },
    { id: "region", title: "Location", description: "Select your region" },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSelection = (key: string, value: any) => {
    setConfiguration(prev => ({ ...prev, [key]: value }));
  };

  const getRecommendation = () => {
    const { farmSize, pestType, urgency, budget } = configuration;
    
    let recommendation = "Giant Kill Standard";
    let reasoning = [];
    
    if (urgency === "urgent" || pestType === "mixed") {
      recommendation = "Giant Kill Premium";
      reasoning.push("High pest pressure requires maximum strength");
    }
    
    if (farmSize === "large") {
      reasoning.push("Large farm needs bulk quantities");
    }
    
    if (budget === "premium") {
      reasoning.push("Premium package includes expert consultation");
    }
    
    return { recommendation, reasoning };
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(farmSizeOptions).map(([key, option]) => (
              <Card
                key={key}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  configuration.farmSize === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleSelection("farmSize", key)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-4xl mb-2">{option.icon}</div>
                  <h3 className="font-semibold">{option.label}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 1:
        return (
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(pestTypeOptions).map(([key, option]) => (
              <Card
                key={key}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  configuration.pestType === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleSelection("pestType", key)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Bug className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">{option.label}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                      <Badge variant="outline" className="mt-1">
                        {option.severity} severity
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            {Object.entries(urgencyOptions).map(([key, option]) => (
              <Card
                key={key}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  configuration.urgency === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleSelection("urgency", key)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${option.color}`}>
                      {option.label}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            {Object.entries(budgetOptions).map(([key, option]) => (
              <Card
                key={key}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  configuration.budget === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleSelection("budget", key)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{option.label}</h3>
                      <div className="text-2xl font-bold text-primary mt-1">{option.price}</div>
                      <ul className="mt-2 space-y-1">
                        {option.features.map((feature, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="grid md:grid-cols-3 gap-3">
            {regions.map((region) => (
              <Button
                key={region}
                variant={configuration.region === region ? "default" : "outline"}
                className="justify-start"
                onClick={() => handleSelection("region", region)}
              >
                {region}
              </Button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const { recommendation, reasoning } = getRecommendation();

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Product Configurator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Get personalized recommendations for your specific needs
        </p>
      </CardHeader>
      <CardContent>
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
          </div>
          <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />
        </div>

        {/* Current Step */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{steps[currentStep].title}</h3>
          <p className="text-muted-foreground mb-4">{steps[currentStep].description}</p>
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <div className="space-y-4 w-full">
              <div className="p-6 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Your Recommendation</h4>
                <div className="text-2xl font-bold text-primary mb-2">{recommendation}</div>
                <div className="space-y-1">
                  {reasoning.map((reason, index) => (
                    <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      {reason}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button asChild className="flex-1">
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Get Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/product">
                    <Package className="mr-2 h-4 w-4" />
                    View Product
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
