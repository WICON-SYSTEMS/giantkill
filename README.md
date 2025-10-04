# 🌿 EcoGrocer - Giant Kill Agricultural Solutions

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.20-646CFF.svg)](https://vitejs.dev/)

> **A modern, accessible, and high-performance web application for agricultural pest control solutions, specifically designed for Giant Kill insecticide products in Cameroon.**

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technology Stack](#️-technology-stack)
- [🎨 Design System](#-design-system)
- [♿ Accessibility Features](#-accessibility-features)
- [📱 Mobile & PWA Features](#-mobile--pwa-features)
- [🔍 SEO & Performance](#-seo--performance)
- [🎭 Animations & Interactions](#-animations--interactions)
- [📊 Performance Metrics](#-performance-metrics)
- [🔧 Development](#-development)
- [🚀 Deployment](#-deployment)
- [📚 API Documentation](#-api-documentation)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🎯 Overview

EcoGrocer is a comprehensive web application built for **VI MA Cameroon**, a leading agricultural solutions provider specializing in pest control products. The platform showcases **Giant Kill**, a powerful systemic and contact regenerating insecticide designed for capsid control in cocoa farming.

### 🎯 Mission
To empower farmers with effective, safe, and affordable crop protection tools through an intuitive, accessible, and high-performance digital platform.

### 🎯 Vision
A future where every farmer enjoys abundant harvests, free from destructive pests, supported by cutting-edge agricultural technology.

## ✨ Key Features

### 🌾 **Core Business Features**
- **Product Showcase**: Interactive product information with detailed specifications
- **Dosage Calculator**: Smart calculator for optimal insecticide application
- **Product Configurator**: Multi-step configuration tool for personalized recommendations
- **Interactive Maps**: Location-based service areas and dealer networks
- **Farmer Testimonials**: Real customer success stories and reviews
- **Educational Content**: Comprehensive guides on capsid control and crop protection

### 🎨 **User Experience Features**
- **Responsive Design**: Seamless experience across all devices
- **Dark/Light Mode**: Adaptive theming with system preference detection
- **Multilingual Support**: English/French language toggle
- **Progressive Web App**: Installable with offline capabilities
- **WhatsApp Integration**: Direct communication with agricultural experts

### ♿ **Accessibility Features**
- **WCAG 2.1 AA Compliance**: Full accessibility standards adherence
- **Screen Reader Support**: Comprehensive ARIA labels and semantic HTML
- **Keyboard Navigation**: Complete keyboard-only navigation support
- **High Contrast Mode**: Enhanced visibility for users with visual impairments
- **Font Size Scaling**: Adjustable text sizing (small/medium/large)
- **Reduced Motion**: Respects user motion preferences

### 📱 **Mobile & PWA Features**
- **Touch Gestures**: Swipe, pinch, and tap gesture support
- **Mobile Navigation**: Optimized hamburger menu with full-screen overlay
- **PWA Installation**: Native app-like experience with install prompts
- **Offline Support**: Service worker caching for offline functionality
- **Touch-Friendly Targets**: 44px minimum touch targets for better usability

### 🔍 **SEO & Performance Features**
- **Meta Tags Management**: Dynamic SEO optimization with react-helmet-async
- **Structured Data**: JSON-LD schema markup for rich search results
- **Sitemap Generation**: Automatic XML sitemap and robots.txt generation
- **Performance Monitoring**: Real-time performance metrics and optimization
- **Image Optimization**: Lazy loading and progressive image enhancement

## 🏗️ Architecture

### **Frontend Architecture**
```
client/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (Radix UI + Tailwind)
│   │   ├── animations/     # Framer Motion animation components
│   │   ├── accessibility/  # Accessibility-specific components
│   │   ├── mobile/         # Mobile and PWA components
│   │   └── seo/           # SEO and meta management components
│   ├── pages/              # Route-based page components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and configurations
│   └── assets/             # Static assets and images
```

### **Backend Architecture**
```
server/
├── index.ts               # Express server entry point
├── routes.ts              # API route definitions
├── storage.ts             # Database and storage configurations
└── vite.ts                # Vite integration for development
```

### **Shared Resources**
```
shared/
└── schema.ts              # Shared TypeScript types and schemas
```

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- PostgreSQL (for production)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/ecogrocer.git
   cd ecogrocer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

### **Available Scripts**

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run check` | Run TypeScript type checking |
| `npm run db:push` | Push database schema changes |

## 📁 Project Structure

```
EcoGrocer/
├── 📁 client/                    # Frontend React application
│   ├── 📁 src/
│   │   ├── 📁 components/        # Reusable components
│   │   │   ├── 📁 ui/           # Base UI components (50+ components)
│   │   │   ├── 📁 animations/   # Animation components
│   │   │   ├── 📁 accessibility/ # Accessibility components
│   │   │   ├── 📁 mobile/       # Mobile/PWA components
│   │   │   └── 📁 seo/          # SEO components
│   │   ├── 📁 pages/            # Page components
│   │   ├── 📁 hooks/            # Custom hooks
│   │   ├── 📁 lib/              # Utilities
│   │   └── 📄 main.tsx          # App entry point
│   ├── 📁 public/               # Static assets
│   │   ├── 📄 manifest.json     # PWA manifest
│   │   ├── 📄 sw.js            # Service worker
│   │   └── 📁 icons/           # PWA icons
│   └── 📄 index.html            # HTML template
├── 📁 server/                   # Backend Express server
│   ├── 📄 index.ts             # Server entry point
│   ├── 📄 routes.ts            # API routes
│   └── 📄 storage.ts           # Database config
├── 📁 shared/                   # Shared types and schemas
├── 📁 attached_assets/          # Design assets and images
├── 📄 package.json             # Dependencies and scripts
├── 📄 tailwind.config.ts       # Tailwind configuration
├── 📄 vite.config.ts           # Vite configuration
└── 📄 README.md               # This file
```

## 🛠️ Technology Stack

### **Frontend Technologies**
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI framework with hooks and concurrent features |
| **TypeScript** | 5.6.3 | Type-safe JavaScript development |
| **Vite** | 5.4.20 | Fast build tool and development server |
| **Wouter** | 3.3.5 | Lightweight client-side routing |
| **Tailwind CSS** | 3.4.17 | Utility-first CSS framework |
| **Radix UI** | Latest | Accessible component primitives |
| **Framer Motion** | 11.13.1 | Animation and gesture library |
| **React Query** | 5.60.5 | Data fetching and caching |
| **React Hook Form** | 7.55.0 | Form handling and validation |
| **Zod** | 3.24.2 | Schema validation |

### **Backend Technologies**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18+ | JavaScript runtime |
| **Express.js** | 4.21.2 | Web application framework |
| **PostgreSQL** | Latest | Primary database |
| **Drizzle ORM** | 0.39.1 | Type-safe database ORM |
| **Passport.js** | 0.7.0 | Authentication middleware |
| **Express Session** | 1.18.1 | Session management |

### **Development Tools**
| Tool | Version | Purpose |
|------|---------|---------|
| **ESBuild** | 0.25.0 | Fast JavaScript bundler |
| **PostCSS** | 8.4.47 | CSS processing |
| **Autoprefixer** | 10.4.20 | CSS vendor prefixing |
| **Drizzle Kit** | 0.31.4 | Database migration tool |

## 🎨 Design System

### **Color Palette**
```css
/* Primary Colors */
--primary: 142 69% 58%        /* #00B14F - Forest Green */
--primary-foreground: 0 0% 100% /* #FFFFFF - White */

/* Secondary Colors */
--secondary: 210 40% 98%      /* #F8FAFC - Light Gray */
--secondary-foreground: 222 84% 5% /* #0F172A - Dark Gray */

/* Accent Colors */
--accent: 142 69% 58%         /* #00B14F - Forest Green */
--accent-foreground: 0 0% 100% /* #FFFFFF - White */

/* Status Colors */
--destructive: 0 84% 60%      /* #EF4444 - Red */
--success: 142 69% 58%        /* #00B14F - Green */
--warning: 38 92% 50%         /* #F59E0B - Amber */
```

### **Typography**
```css
/* Headings - Montserrat */
font-family: 'Montserrat', sans-serif;
font-weight: 700, 800, 900;

/* Body Text - Open Sans */
font-family: 'Open Sans', sans-serif;
font-weight: 400, 500, 600;

/* Display Text - Oswald */
font-family: 'Oswald', sans-serif;
font-weight: 600, 700;
```

### **Component Library**
The application includes **50+ reusable components** built with Radix UI and Tailwind CSS:

- **Layout**: Card, Sheet, Dialog, Drawer, Tabs
- **Forms**: Input, Textarea, Select, Checkbox, Radio Group
- **Navigation**: Navigation Menu, Breadcrumb, Pagination
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Data Display**: Table, Badge, Avatar, Separator
- **Overlay**: Popover, Tooltip, Hover Card, Context Menu

## ♿ Accessibility Features

### **WCAG 2.1 AA Compliance**
- ✅ **Perceivable**: High contrast mode, font scaling, screen reader support
- ✅ **Operable**: Keyboard navigation, focus management, touch targets
- ✅ **Understandable**: Clear language, consistent navigation, error identification
- ✅ **Robust**: Semantic HTML, ARIA labels, valid markup

### **Accessibility Components**

#### **AccessibilityProvider**
```typescript
interface AccessibilityContextType {
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  setReducedMotion: (value: boolean) => void;
  setHighContrast: (value: boolean) => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  announceToScreenReader: (message: string) => void;
}
```

#### **Key Accessibility Features**
- **Skip Navigation**: "Skip to main content" link for keyboard users
- **Focus Trap**: Modal and overlay focus management
- **Screen Reader Support**: Comprehensive ARIA labels and live regions
- **High Contrast Mode**: Enhanced visibility for visual impairments
- **Font Size Scaling**: Three size options (small/medium/large)
- **Reduced Motion**: Respects `prefers-reduced-motion` setting

### **Keyboard Navigation**
- **Tab Order**: Logical tab sequence throughout the application
- **Focus Indicators**: Clear visual focus indicators
- **Keyboard Shortcuts**: Common shortcuts for power users
- **Escape Key**: Close modals and overlays

## 📱 Mobile & PWA Features

### **Progressive Web App (PWA)**
- **Installable**: Native app-like installation experience
- **Offline Support**: Service worker caching for offline functionality
- **App Manifest**: Complete PWA configuration
- **Push Notifications**: Ready for future notification features

### **Mobile Optimizations**
- **Touch Gestures**: Swipe, pinch, tap, and double-tap support
- **Mobile Navigation**: Full-screen hamburger menu
- **Touch Targets**: Minimum 44px touch targets
- **Viewport Optimization**: Proper mobile viewport configuration

### **PWA Configuration**
```json
{
  "name": "Giant Kill - Agricultural Solutions",
  "short_name": "Giant Kill",
  "description": "The ultimate protection for your cocoa crops",
  "theme_color": "#00B14F",
  "background_color": "#ffffff",
  "display": "standalone",
  "orientation": "portrait",
  "start_url": "/",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## 🔍 SEO & Performance

### **SEO Features**
- **Meta Tags Management**: Dynamic title, description, and keyword optimization
- **Open Graph**: Facebook and social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing experience
- **Structured Data**: JSON-LD schema markup for rich search results
- **Sitemap Generation**: Automatic XML sitemap creation
- **Robots.txt**: Search engine crawling instructions

### **Performance Optimizations**
- **Image Optimization**: Lazy loading and progressive enhancement
- **Code Splitting**: Route-based code splitting for faster loading
- **Bundle Analysis**: Real-time bundle size monitoring
- **Caching Strategy**: Service worker caching for static assets
- **Performance Monitoring**: Real-time performance metrics

### **Performance Metrics**
The application includes a built-in performance monitor (development only):

```typescript
interface PerformanceMetrics {
  loadTime: number;        // Page load time in ms
  renderTime: number;      // React render time in ms
  interactionTime: number; // Time to interactive in ms
  bundleSize: number;      // Bundle size in KB
  imageCount: number;      // Number of images loaded
  resourceCount: number;   // Total resources loaded
}
```

## 🎭 Animations & Interactions

### **Animation Library**
Built with **Framer Motion** for smooth, performant animations:

- **Scroll-Triggered Animations**: Elements animate as they enter viewport
- **Staggered Animations**: Sequential element animations
- **Hover Effects**: Interactive hover states and micro-interactions
- **Page Transitions**: Smooth transitions between routes
- **Loading Animations**: Engaging loading states and spinners

### **Animation Components**

#### **AnimatedSection**
```typescript
interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}
```

#### **StaggerContainer**
```typescript
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}
```

#### **HoverCard**
```typescript
interface HoverCardProps {
  children: React.ReactNode;
  scale?: number;
  rotate?: number;
  className?: string;
}
```

### **Scroll Progress Indicator**
- **Visual Progress Bar**: Shows reading progress at the top of the page
- **Smooth Animation**: Animated progress bar with easing
- **Accessibility**: Screen reader announcements for progress

## 📊 Performance Metrics

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### **Performance Features**
- **Image Lazy Loading**: Images load only when needed
- **Code Splitting**: Route-based splitting for optimal loading
- **Bundle Optimization**: Tree shaking and dead code elimination
- **Caching Strategy**: Aggressive caching for static assets
- **Performance Monitoring**: Real-time metrics in development

## 🔧 Development

### **Development Environment Setup**

1. **Install Node.js 18+**
   ```bash
   # Using nvm (recommended)
   nvm install 18
   nvm use 18
   ```

2. **Clone and Install**
   ```bash
   git clone https://github.com/your-org/ecogrocer.git
   cd ecogrocer
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Configure your environment variables
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

### **Code Quality Tools**
- **TypeScript**: Static type checking
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality checks

### **Development Scripts**
```bash
# Development
npm run dev              # Start dev server
npm run check           # TypeScript type checking

# Building
npm run build           # Build for production
npm run start           # Start production server

# Database
npm run db:push         # Push schema changes
```

## 🚀 Deployment

### **Production Build**
```bash
# Build the application
npm run build

# Start production server
npm run start
```

### **Environment Variables**
```bash
# Required environment variables
NODE_ENV=production
DATABASE_URL=postgresql://...
SESSION_SECRET=your-secret-key
```

### **Deployment Platforms**
- **Vercel**: Recommended for frontend deployment
- **Railway**: Full-stack deployment option
- **Heroku**: Alternative deployment platform
- **Docker**: Containerized deployment

### **Docker Deployment**
```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📚 API Documentation

### **API Endpoints**

#### **Authentication**
```typescript
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

#### **Products**
```typescript
GET    /api/products           # Get all products
GET    /api/products/:id       # Get product by ID
POST   /api/products           # Create product (admin)
PUT    /api/products/:id       # Update product (admin)
DELETE /api/products/:id       # Delete product (admin)
```

#### **Contact**
```typescript
POST /api/contact              # Submit contact form
GET  /api/contact/messages     # Get contact messages (admin)
```

### **Database Schema**
```typescript
// User schema
interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

// Product schema
interface Product {
  id: string;
  name: string;
  description: string;
  activeIngredients: string[];
  specifications: Record<string, any>;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### **Getting Started**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### **Code Style**
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

### **Pull Request Process**
1. Ensure all tests pass
2. Update documentation if needed
3. Request review from maintainers
4. Address feedback promptly
5. Merge after approval

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **VI MA Cameroon** - For the vision and agricultural expertise
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations and interactions
- **React Community** - For the amazing ecosystem

---

## 📞 Support

For support, email support@giantkill.com or join our WhatsApp community.

**Built with ❤️ for farmers in Cameroon and beyond.**

---

<div align="center">

**[⬆ Back to Top](#-ecogrocer---giant-kill-agricultural-solutions)**

</div>
