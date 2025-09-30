import { useState, useRef, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export default function ProgressiveImage({
  src,
  alt,
  className,
  placeholder,
  priority = false,
  onLoad,
  onError,
  ...props
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    onError?.();
  };

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)} {...props}>
      {/* Skeleton placeholder */}
      {!loaded && !error && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}

      {/* Low-quality placeholder */}
      {placeholder && !loaded && !error && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
            error && "hidden"
          )}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-center text-muted-foreground">
            <div className="text-4xl mb-2">📷</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}
    </div>
  );
}
