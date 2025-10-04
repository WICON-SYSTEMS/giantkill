import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import ScrollProgress from "@/components/animations/ScrollProgress";
import AccessibilityProvider from "@/components/accessibility/AccessibilityProvider";
import AccessibilitySettings from "@/components/accessibility/AccessibilitySettings";
import SkipNavigation from "@/components/accessibility/SkipNavigation";
import PWAInstallPrompt from "@/components/mobile/PWAInstallPrompt";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import About from "@/pages/About";
import Product from "@/pages/Product";
import HowItWorks from "@/pages/HowItWorks";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/product" component={Product} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <AccessibilityProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <SkipNavigation />
            <Toaster />
            <ScrollProgress />
            <Router />
            <PerformanceMonitor />
            <AccessibilitySettings />
            <PWAInstallPrompt />
          </TooltipProvider>
        </QueryClientProvider>
      </AccessibilityProvider>
    </HelmetProvider>
  );
}

export default App;
