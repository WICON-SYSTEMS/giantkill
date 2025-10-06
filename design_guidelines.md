# Giant Kill Insecticide Website - Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing from agricultural e-commerce and product showcase websites, combining the visual storytelling of agricultural brands with the clarity of product-focused sites.

## Core Design Elements

### A. Color Palette
**User-Specified Colors (Strictly Follow):**
- Primary Green: `#00B14F` - Nature, agriculture, freshness (use for CTAs, headers, emphasis)
- Yellow-Orange: `#FFC107` - Highlighting, call-to-action buttons
- Deep Blue: `#1A237E` - Trust, professionalism (use for informational sections)
- White: `#FFFFFF` - Clean backgrounds
- Red: `#D32F2F` - Warning indicators, capsid bug identification

**Color Application:**
- Hero section: Primary green with white text overlays
- CTA buttons: Yellow-orange primary, green secondary
- Information cards: White backgrounds with green/blue borders
- Before/After imagery: Red borders for damaged crops, green for healthy
- Dark mode: Maintain green/yellow accents on dark backgrounds (bg-gray-900)

### B. Typography
**Fonts (Load via Google Fonts CDN):**
- Headings: Oswald Bold or Montserrat ExtraBold (700-800 weight)
- Subheadings: Montserrat SemiBold (600 weight)
- Body Text: Open Sans or Roboto (400-500 weight)
- Special Callouts: Impact/bold treatment for "GIANT KILL" branding

**Type Scale:**
- Hero headline: text-5xl md:text-7xl font-bold
- Section headings: text-3xl md:text-4xl font-bold
- Subsections: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg

### C. Layout System
**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24
- Component spacing: gap-6 md:gap-8
- Card padding: p-6 md:p-8
- Button padding: px-6 py-3 md:px-8 md:py-4

**Container Strategy:**
- Full-width hero: w-full with inner max-w-7xl mx-auto px-4
- Content sections: max-w-6xl mx-auto px-4
- Contact forms: max-w-2xl mx-auto

### D. Component Library

**Navigation:**
- Sticky header with logo, menu items (Home | About | Product | How It Works | Testimonials | Contact)
- Mobile: Hamburger menu, full-screen overlay
- Language toggle: English/French flags (top-right)
- WhatsApp floating button (bottom-right, green circle with icon)

**Hero Section:**
- Large background image: Healthy cocoa plants/pods with product bottle overlay
- Centered content: Bold headline + subheadline + 3 CTA buttons
- Image overlay: Dark gradient (from black/60% to transparent) for text readability
- Buttons with blurred backgrounds when on images (backdrop-blur-sm bg-white/20)

**Product Cards:**
- White cards with subtle shadow (shadow-lg hover:shadow-xl transition)
- Green accent borders (border-l-4 border-green-600)
- Icon top-left, title, description, optional CTA
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

**Before/After Gallery:**
- Split-screen comparison cards
- Red border for damaged crops, green for healthy
- Percentage improvements displayed prominently
- Image captions in Montserrat font

**Testimonials:**
- Card-based with farmer photos (circular avatars)
- Quote marks in yellow-orange
- Farmer name + location in smaller text
- 2-column grid on desktop, single on mobile

**Contact Form:**
- Left column: Form fields (name, email, phone, message)
- Right column: Contact details, WhatsApp buttons, map placeholder
- Green submit button with hover effect
- Form validation with red error states

**Features Section (How It Works):**
- Icon-based step cards (numbered 1-4)
- Circular green backgrounds for icons
- Arrows between steps on desktop
- Infographic style with visual flow

### E. Images
**Required Images:**
1. **Hero Background:** Vibrant cocoa plantation or healthy cocoa pods with Giant Kill product bottle (full-width, 70vh height)
2. **Product Showcase:** Giant Kill bottle on transparent/white background (product page center)
3. **Before/After Gallery:** 
   - Damaged cocoa crops with capsid damage (red-bordered cards)
   - Healthy recovered crops (green-bordered cards)
   - Field application demonstrations
4. **Team/Lab Photos:** Scientists or farmers in field/laboratory setting (About Us page)
5. **Testimonial Avatars:** Farmer portraits (circular, 80px diameter)
6. **Capsid Bug Visual:** Educational diagram/photo showing capsid insect (How It Works section)
7. **Icons:** Use Heroicons or Font Awesome for:
   - Checkmarks (features)
   - Shield (protection)
   - Leaf (regeneration)
   - Phone/WhatsApp (contact)

### F. Mobile Optimization
**Critical Requirements:**
- Lightweight images: WebP format, lazy loading
- Single column layouts on mobile (stack all grids)
- Large tap targets: min 44px for buttons/links
- WhatsApp click-to-chat integration
- Compress hero images for 2G/3G (max 200KB)
- Hamburger menu: Full-screen overlay with large touch targets

### G. Special Features
**WhatsApp Integration:**
- Floating button (fixed bottom-right): `` and `+237 678 473 434`
- Green circular button (bg-green-600) with WhatsApp icon
- Click opens WhatsApp chat with pre-filled message

**PDF Download:**
- Product brochure download button (yellow-orange, prominent)
- Icon: Download symbol from Font Awesome

**Bilingual Toggle:**
- EN/FR flags in header
- Switch content dynamically (implement with simple state management)

### H. Animation Guidelines
**Use Sparingly:**
- Fade-in on scroll for section reveals (once)
- Hover scale on product cards (scale-105)
- Button hover: Slight lift + shadow increase
- NO auto-playing carousels or distracting animations
- Smooth scroll for anchor navigation

### I. Accessibility
- Color contrast ratios: 4.5:1 minimum (green on white, white on green/blue)
- Alt text for all images (especially before/after comparisons)
- ARIA labels for navigation, form fields
- Focus states: Ring-2 ring-green-500 for keyboard navigation

## Page-Specific Notes
- **Homepage:** 6 sections (Hero, Features overview, Product highlight, Testimonials snippet, Stats, Contact CTA)
- **Product Page:** Detailed feature grid, ingredient display (Thiamen 45%, Emamectine 20% in large text), before/after gallery
- **Gallery Page:** Masonry grid (2-3 columns) with lightbox functionality
- **Contact Page:** Two-column form layout with map integration placeholder