import React from 'react';
import { Link } from 'wouter';

const skipLinks = [
  { href: '#main-content', label: 'Skip to main content' },
  { href: '#navigation', label: 'Skip to navigation' },
  { href: '#footer', label: 'Skip to footer' },
];

export default function SkipNavigation() {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <ul className="fixed top-0 left-0 z-50 bg-primary text-primary-foreground p-2 space-y-1">
        {skipLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block px-4 py-2 text-sm font-medium hover:bg-primary-foreground/20 focus:bg-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
