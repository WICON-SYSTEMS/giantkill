import { useState, useEffect, useRef, useCallback } from "react";

interface UseLazyLoadingOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useLazyLoading(options: UseLazyLoadingOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "50px",
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce) {
          setHasTriggered(true);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    },
    [triggerOnce]
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element || (triggerOnce && hasTriggered)) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [handleIntersection, threshold, rootMargin, triggerOnce, hasTriggered]);

  return { elementRef, isVisible: isVisible || hasTriggered };
}

// Hook for preloading critical resources
export function usePreload() {
  const [preloadedResources, setPreloadedResources] = useState<Set<string>>(new Set());

  const preloadImage = useCallback((src: string) => {
    if (preloadedResources.has(src)) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        setPreloadedResources(prev => new Set([...prev, src]));
        resolve(src);
      };
      img.onerror = reject;
      img.src = src;
    });
  }, [preloadedResources]);

  const preloadImages = useCallback((srcs: string[]) => {
    return Promise.all(srcs.map(preloadImage));
  }, [preloadImage]);

  return { preloadImage, preloadImages, preloadedResources };
}

// Hook for performance monitoring
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    interactionTime: 0,
  });

  useEffect(() => {
    // Measure page load time
    const measureLoadTime = () => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }
    };

    // Measure render time
    const measureRenderTime = () => {
      const renderStart = performance.now();
      requestAnimationFrame(() => {
        const renderEnd = performance.now();
        setMetrics(prev => ({ ...prev, renderTime: renderEnd - renderStart }));
      });
    };

    // Measure interaction time
    const measureInteraction = () => {
      const interactionStart = performance.now();
      return () => {
        const interactionEnd = performance.now();
        setMetrics(prev => ({ 
          ...prev, 
          interactionTime: interactionEnd - interactionStart 
        }));
      };
    };

    if (document.readyState === "complete") {
      measureLoadTime();
    } else {
      window.addEventListener("load", measureLoadTime);
    }

    measureRenderTime();

    return () => {
      window.removeEventListener("load", measureLoadTime);
    };
  }, []);

  return { metrics, measureInteraction: () => performance.now() };
}
