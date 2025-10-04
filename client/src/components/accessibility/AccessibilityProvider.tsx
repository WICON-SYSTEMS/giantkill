import React, { createContext, useContext, useEffect, useState } from 'react';

interface AccessibilityContextType {
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  setReducedMotion: (value: boolean) => void;
  setHighContrast: (value: boolean) => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  announceToScreenReader: (message: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export default function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');

  // Screen reader announcements
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Load user preferences from localStorage
  useEffect(() => {
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = localStorage.getItem('fontSize') as 'small' | 'medium' | 'large' || 'medium';

    setReducedMotion(savedReducedMotion);
    setHighContrast(savedHighContrast);
    setFontSize(savedFontSize);

    // Apply reduced motion preference
    if (savedReducedMotion) {
      document.documentElement.style.setProperty('--motion-reduce', '1');
    }

    // Apply high contrast preference
    if (savedHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    // Apply font size preference
    document.documentElement.setAttribute('data-font-size', savedFontSize);
  }, []);

  // Save preferences to localStorage
  const handleSetReducedMotion = (value: boolean) => {
    setReducedMotion(value);
    localStorage.setItem('reducedMotion', value.toString());
    document.documentElement.style.setProperty('--motion-reduce', value ? '1' : '0');
  };

  const handleSetHighContrast = (value: boolean) => {
    setHighContrast(value);
    localStorage.setItem('highContrast', value.toString());
    if (value) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const handleSetFontSize = (size: 'small' | 'medium' | 'large') => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    document.documentElement.setAttribute('data-font-size', size);
  };

  const value: AccessibilityContextType = {
    reducedMotion,
    highContrast,
    fontSize,
    setReducedMotion: handleSetReducedMotion,
    setHighContrast: handleSetHighContrast,
    setFontSize: handleSetFontSize,
    announceToScreenReader,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}
