import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calculator, Info, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface DosageCalculation {
  farmSize: number;
  pestSeverity: "low" | "medium" | "high";
  cropType: "cocoa" | "coffee" | "vegetables";
  dosage: number;
  waterAmount: number;
  totalCost: number;
  applicationFrequency: number;
}

const pestSeverityMultipliers = {
  low: 1.0,
  medium: 1.5,
  high: 2.0,
};

const cropTypeMultipliers = {
  cocoa: 1.0,
  coffee: 0.8,
  vegetables: 1.2,
};

const baseDosage = 2.5; // ml per liter
const productPrice = 15000; // CFA per liter

export default function DosageCalculator() {
  const [calculation, setCalculation] = useState<DosageCalculation>({
    farmSize: 1,
    pestSeverity: "medium",
    cropType: "cocoa",
    dosage: 0,
    waterAmount: 0,
    totalCost: 0,
    applicationFrequency: 14,
  });

  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    calculateDosage();
  }, [calculation.farmSize, calculation.pestSeverity, calculation.cropType]);

  const calculateDosage = () => {
    const { farmSize, pestSeverity, cropType } = calculation;
    
    // Calculate dosage per liter
    const dosagePerLiter = baseDosage * 
      pestSeverityMultipliers[pestSeverity] * 
      cropTypeMultipliers[cropType];
    
    // Calculate water amount (10-15 liters per hectare)
    const waterPerHectare = 12.5; // Average
    const waterAmount = farmSize * waterPerHectare;
    
    // Calculate total dosage needed
    const totalDosage = (dosagePerLiter * waterAmount) / 1000; // Convert to liters
    
    // Calculate cost
    const totalCost = totalDosage * productPrice;
    
    // Calculate application frequency based on pest severity
    const applicationFrequency = pestSeverity === "high" ? 10 : 
                                pestSeverity === "medium" ? 14 : 21;

    setCalculation(prev => ({
      ...prev,
      dosage: Math.round(dosagePerLiter * 100) / 100,
      waterAmount: Math.round(waterAmount),
      totalCost: Math.round(totalCost),
      applicationFrequency,
    }));
  };

  const handleCalculate = () => {
    setIsCalculated(true);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low": return "bg-green-100 text-green-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "high": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Dosage Calculator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Calculate the exact amount of Giant Kill needed for your farm
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="farmSize">Farm Size (hectares)</Label>
            <Input
              id="farmSize"
              type="number"
              min="0.1"
              step="0.1"
              value={calculation.farmSize}
              onChange={(e) => setCalculation(prev => ({
                ...prev,
                farmSize: parseFloat(e.target.value) || 0
              }))}
              placeholder="Enter farm size"
            />
          </div>

          <div>
            <Label htmlFor="pestSeverity">Pest Severity</Label>
            <Select
              value={calculation.pestSeverity}
              onValueChange={(value: "low" | "medium" | "high") => 
                setCalculation(prev => ({ ...prev, pestSeverity: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low (Minor damage)</SelectItem>
                <SelectItem value="medium">Medium (Moderate damage)</SelectItem>
                <SelectItem value="high">High (Severe damage)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="cropType">Crop Type</Label>
            <Select
              value={calculation.cropType}
              onValueChange={(value: "cocoa" | "coffee" | "vegetables") => 
                setCalculation(prev => ({ ...prev, cropType: value }))
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cocoa">Cocoa</SelectItem>
                <SelectItem value="coffee">Coffee</SelectItem>
                <SelectItem value="vegetables">Vegetables</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={handleCalculate} className="w-full" size="lg">
          Calculate Dosage
        </Button>

        {isCalculated && (
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Based on your inputs, here's your recommended application:
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-medium">Dosage per liter:</span>
                  <Badge variant="outline" className="text-lg">
                    {calculation.dosage} ml
                  </Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-medium">Water needed:</span>
                  <Badge variant="outline" className="text-lg">
                    {calculation.waterAmount} L
                  </Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-medium">Total Giant Kill:</span>
                  <Badge variant="outline" className="text-lg">
                    {(calculation.dosage * calculation.waterAmount / 1000).toFixed(2)} L
                  </Badge>
                </div>

                <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                  <span className="font-medium">Estimated Cost:</span>
                  <Badge className="text-lg">
                    {calculation.totalCost.toLocaleString()} CFA
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Application Schedule</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Frequency:</span>
                      <span>{calculation.applicationFrequency} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pest Severity:</span>
                      <Badge className={getSeverityColor(calculation.pestSeverity)}>
                        {calculation.pestSeverity.charAt(0).toUpperCase() + calculation.pestSeverity.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Crop Type:</span>
                      <span className="capitalize">{calculation.cropType}</span>
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    Apply early morning or late evening. Avoid application during hot, sunny conditions.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-2">Application Instructions:</h4>
              <ol className="text-sm text-muted-foreground space-y-1">
                <li>1. Mix {calculation.dosage}ml of Giant Kill per liter of water</li>
                <li>2. Apply evenly to all plant surfaces</li>
                <li>3. Ensure complete coverage including undersides of leaves</li>
                <li>4. Repeat every {calculation.applicationFrequency} days as needed</li>
                <li>5. Monitor pest pressure and adjust schedule accordingly</li>
              </ol>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
