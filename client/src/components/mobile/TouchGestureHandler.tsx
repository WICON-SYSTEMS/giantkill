import React, { useEffect, useRef, useState } from 'react';

interface TouchGestureHandlerProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onPinch?: (scale: number) => void;
  onTap?: () => void;
  onDoubleTap?: () => void;
  swipeThreshold?: number;
  tapThreshold?: number;
  doubleTapDelay?: number;
}

export default function TouchGestureHandler({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onPinch,
  onTap,
  onDoubleTap,
  swipeThreshold = 50,
  tapThreshold = 10,
  doubleTapDelay = 300,
}: TouchGestureHandlerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);
  const [lastTap, setLastTap] = useState<number>(0);
  const [pinchStart, setPinchStart] = useState<{ distance: number; scale: number } | null>(null);

  const getDistance = (touch1: Touch, touch2: Touch) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getAngle = (touch1: Touch, touch2: Touch) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.atan2(dy, dx) * 180 / Math.PI;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    });

    // Handle pinch start
    if (e.touches.length === 2) {
      const distance = getDistance(e.touches[0], e.touches[1]);
      setPinchStart({ distance, scale: 1 });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();

    // Handle pinch
    if (e.touches.length === 2 && pinchStart) {
      const distance = getDistance(e.touches[0], e.touches[1]);
      const scale = distance / pinchStart.distance;
      onPinch?.(scale);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const deltaTime = Date.now() - touchStart.time;

    // Handle tap
    if (Math.abs(deltaX) < tapThreshold && Math.abs(deltaY) < tapThreshold) {
      const now = Date.now();
      if (now - lastTap < doubleTapDelay) {
        onDoubleTap?.();
        setLastTap(0);
      } else {
        setLastTap(now);
        setTimeout(() => {
          if (now === lastTap) {
            onTap?.();
          }
        }, doubleTapDelay);
      }
      return;
    }

    // Handle swipe
    if (deltaTime < 500) { // Only consider swipes under 500ms
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (Math.abs(deltaX) > swipeThreshold) {
          if (deltaX > 0) {
            onSwipeRight?.();
          } else {
            onSwipeLeft?.();
          }
        }
      } else {
        // Vertical swipe
        if (Math.abs(deltaY) > swipeThreshold) {
          if (deltaY > 0) {
            onSwipeDown?.();
          } else {
            onSwipeUp?.();
          }
        }
      }
    }

    setTouchStart(null);
    setPinchStart(null);
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-x pan-y pinch-zoom' }}
    >
      {children}
    </div>
  );
}
