# CAMI Website - Project Context

## Project Overview
This is a Next.js 16.0.8 website for Dr. Camila Santos Castilho, a healthcare professional's personal website. The site is built using:
- Next.js 16.0.8 (App Router)
- React 19.2.1
- TypeScript
- Tailwind CSS v4 with PostCSS
- Google Fonts (Lora and Nunito)
- react-icons for iconography
- lucide-react for additional icons

## Project Structure
```
cami-website/
├── app/                    # Next.js App Router pages
│   ├── favicon.ico
│   ├── globals.css         # Global styles and Tailwind configuration
│   ├── layout.tsx          # Root layout with font loading
│   └── page.tsx            # Main home page
├── components/             # Reusable React components
│   ├── sections/           # Page section components
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Highlights.tsx
│   │   └── Location.tsx
│   └── ui/                 # Reusable UI components
│       ├── Card.tsx
│       ├── FAQItem.tsx
│       ├── FooterItem.tsx
│       ├── Header.tsx
│       └── HeaderMenuItem.tsx
├── public/                 # Static assets
└── package.json            # Dependencies and scripts
```

## Key Features
- Responsive design using Tailwind CSS
- Smooth scrolling navigation
- Scroll-aware header with shadow effect
- Contact section with Instagram, phone, and email links
- FAQ section with expandable items
- About section highlighting professional expertise
- Location section for clinic information

## Building and Running

### Development Server
```bash
bun dev
# or
npm run dev
# or
yarn dev
# or
pnpm dev
```
Then open http://localhost:3000 in your browser.

### Production Build
```bash
bun run build
# or
npm run build
```

### Production Start
```bash
bun run start
# or
npm run start
```

### Linting
```bash
bun run lint
# or
npm run lint
```

## Styling
- Uses Tailwind CSS v4 with custom theme variables defined in globals.css
- Custom color palette with brand colors (purple/pink tones)
- Two Google fonts: Nunito (primary) and Lora (accent)
- Dark/light theme support with custom color definitions

## Components Architecture
- **Sections**: Major page sections (Hero, About, FAQ, Footer, etc.)
- **UI Components**: Reusable elements (Header, FooterItem, FAQItem, etc.)
- Uses a clean separation between layout components and content sections

## Navigation
- Sticky header with scroll detection
- Smooth scrolling to page sections
- Hover animations and transitions

## Development Conventions
- Client-side React hooks used for interactivity (useState, useEffect)
- TypeScript for type safety
- ES Modules for imports/exports
- Component-based architecture with clear separation of concerns
- Accessibility considerations (semantic HTML, ARIA attributes)

## Deployment
- Ready for deployment on Vercel (Next.js platform)
- Standard Next.js build process
- Optimized for performance with automatic font optimization

## Contact Information Integration
- Instagram integration with link to profile
- WhatsApp link for phone consultations
- Email contact form with pre-filled subject and body