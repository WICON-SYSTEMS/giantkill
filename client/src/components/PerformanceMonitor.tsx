import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Zap, Clock, Database } from "lucide-react";

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
  bundleSize: number;
  imageCount: number;
  resourceCount: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    interactionTime: 0,
    bundleSize: 0,
    imageCount: 0,
    resourceCount: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== "development") return;

    const measurePerformance = () => {
      // Measure page load time
      const loadTime = performance.timing
        ? performance.timing.loadEventEnd - performance.timing.navigationStart
        : 0;

      // Measure render time
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderEnd = performance.now();
        setMetrics(prev => ({
          ...prev,
          renderTime: renderEnd - renderStart,
        }));
      });

      // Count resources
      const resources = performance.getEntriesByType("resource");
      const images = resources.filter(resource => 
        resource.name.includes(".png") || 
        resource.name.includes(".jpg") || 
        resource.name.includes(".jpeg") || 
        resource.name.includes(".webp")
      );

      // Estimate bundle size (this is a simplified calculation)
      const scripts = resources.filter(resource => 
        resource.name.includes(".js") && !resource.name.includes("node_modules")
      );
      const bundleSize = scripts.reduce((total, script) => {
        return total + (script as PerformanceResourceTiming).transferSize || 0;
      }, 0);

      setMetrics(prev => ({
        ...prev,
        loadTime,
        imageCount: images.length,
        resourceCount: resources.length,
        bundleSize: Math.round(bundleSize / 1024), // Convert to KB
      }));
    };

    // Measure after page load
    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }

    // Show/hide based on key combination (Ctrl+Shift+P)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("load", measurePerformance);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isVisible || process.env.NODE_ENV !== "development") return null;

  const getPerformanceGrade = (loadTime: number) => {
    if (loadTime < 1000) return { grade: "A", color: "bg-green-500" };
    if (loadTime < 2000) return { grade: "B", color: "bg-yellow-500" };
    if (loadTime < 3000) return { grade: "C", color: "bg-orange-500" };
    return { grade: "D", color: "bg-red-500" };
  };

  const { grade, color } = getPerformanceGrade(metrics.loadTime);

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80">
      <Card className="shadow-lg border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Performance Monitor
            <Badge className={`${color} text-white text-xs`}>
              Grade {grade}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-blue-500" />
              <span>Load: {metrics.loadTime}ms</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-green-500" />
              <span>Render: {metrics.renderTime.toFixed(1)}ms</span>
            </div>
            <div className="flex items-center gap-1">
              <Database className="h-3 w-3 text-purple-500" />
              <span>Bundle: {metrics.bundleSize}KB</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-orange-500">📷</span>
              <span>Images: {metrics.imageCount}</span>
            </div>
          </div>
          
          <div className="pt-2 border-t text-xs text-muted-foreground">
            Press Ctrl+Shift+P to toggle
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
