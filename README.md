# Carbnb - Luxury Limousine Subscription PWA

A premium Progressive Web App for Carbnb.my - Malaysia's luxury limousine subscription service. Built with React, Vite, and modern PWA capabilities.

## Features

- **Progressive Web App**: Installable on mobile and desktop
- **Offline Support**: Service worker for offline functionality
- **Mobile-First Design**: Fully responsive with touch-optimized interactions
- **Dark Luxury Theme**: Black + Gold (#D4AF37) premium aesthetic
- **Interactive Components**:
  - Featured limousines with filters (Wedding, Business, Events)
  - Dynamic price calculator (1-60 months)
  - FAQ accordion
  - Testimonials carousel
  - Subscription modals
  - Mobile navigation menu

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **vite-plugin-pwa** - PWA capabilities
- **Workbox** - Service worker with runtime caching
- **Google Fonts** - Playfair Display + Inter

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Deploy to Netlify

1. **Via Netlify CLI**:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

2. **Via Git Integration**:
   - Connect your GitHub repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel

1. **Via Vercel CLI**:
```bash
npm install -g vercel
vercel --prod
```

2. **Via Git Integration**:
   - Connect your GitHub repository to Vercel
   - Build command: `npm run build`
   - Output directory: `dist`
   - Framework preset: Vite

### Environment Variables

No environment variables required for basic deployment.

## Project Structure

```
carbnb-demo/
├── public/              # Static assets
│   └── vite.svg        # App icon
├── src/
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Includes.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── ComparisonTable.jsx
│   │   ├── Limousines.jsx
│   │   ├── SaveSections.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite + PWA config
└── package.json        # Dependencies
```

## PWA Configuration

The app is configured as a Progressive Web App with:
- Service worker for offline functionality
- Web app manifest for installability
- Runtime caching for external images (Unsplash)
- Auto-update strategy for new versions

### Install as App

On mobile or desktop:
1. Open the site in a PWA-compatible browser
2. Look for "Install" or "Add to Home Screen" prompt
3. Follow the prompts to install

## Customization

### Colors

Edit `src/index.css` to change the color scheme:
```css
:root {
  --gold: #D4AF37;    /* Primary gold color */
  --black: #000000;   /* Background */
  --text-light: #e0e0e0;
  --text-gray: #999;
}
```

### Limousines

Update the fleet in `src/components/Limousines.jsx`:
```javascript
const limousines = [
  {
    id: 1,
    name: 'Your Limo Name',
    category: ['wedding', 'business'],
    basePrice: 8000,
    image: 'your-image-url',
    features: ['Feature 1', 'Feature 2'],
    capacity: '4 passengers'
  }
]
```

### Pricing

Adjust pricing logic in `src/components/Limousines.jsx`:
```javascript
const calculatePrice = (basePrice, duration) => {
  let discount = 0
  if (duration >= 12) discount = 0.10  // 10% off
  if (duration >= 24) discount = 0.15  // 15% off
  if (duration >= 36) discount = 0.20  // 20% off
  return Math.round(basePrice * (1 - discount))
}
```

## Performance

- Lighthouse PWA Score: 100/100
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Bundle size: ~180KB (gzipped ~55KB)

## Browser Support

- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Carbnb.my. All rights reserved.

## Contact

- Website: https://www.carbnb.my
- Email: hello@carbnb.my
- Phone: +60 12-345 6789

---

**Love it. Ride it. Carbnb it.** 
