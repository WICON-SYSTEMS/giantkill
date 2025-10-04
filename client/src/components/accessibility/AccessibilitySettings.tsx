import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings, Eye, Type, Volume2, VolumeX } from 'lucide-react';
import { useAccessibility } from './AccessibilityProvider';

export default function AccessibilitySettings() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    reducedMotion, 
    highContrast, 
    fontSize, 
    setReducedMotion, 
    setHighContrast, 
    setFontSize,
    announceToScreenReader 
  } = useAccessibility();

  const handleReducedMotionChange = (checked: boolean) => {
    setReducedMotion(checked);
    announceToScreenReader(checked ? 'Reduced motion enabled' : 'Reduced motion disabled');
  };

  const handleHighContrastChange = (checked: boolean) => {
    setHighContrast(checked);
    announceToScreenReader(checked ? 'High contrast enabled' : 'High contrast disabled');
  };

  const handleFontSizeChange = (size: string) => {
    setFontSize(size as 'small' | 'medium' | 'large');
    announceToScreenReader(`Font size changed to ${size}`);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50"
        aria-label="Open accessibility settings"
      >
        <Settings className="h-4 w-4 mr-2" />
        Accessibility
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Accessibility Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="reduced-motion" className="flex items-center gap-2">
                    <VolumeX className="h-4 w-4" />
                    Reduced Motion
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Reduce animations and transitions
                  </p>
                </div>
                <Switch
                  id="reduced-motion"
                  checked={reducedMotion}
                  onCheckedChange={handleReducedMotionChange}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="high-contrast" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    High Contrast
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Increase color contrast for better visibility
                  </p>
                </div>
                <Switch
                  id="high-contrast"
                  checked={highContrast}
                  onCheckedChange={handleHighContrastChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="font-size" className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  Font Size
                </Label>
                <Select value={fontSize} onValueChange={handleFontSizeChange}>
                  <SelectTrigger id="font-size">
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
