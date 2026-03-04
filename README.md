# SIMBA Landing Page

A standalone, modern landing page for SIMBA Express - Africa's fastest growing e-commerce platform.

## Features

- ⚡ **Lightning Fast**: Built with Vite for optimal performance
- 🎨 **Modern Design**: Tailwind CSS for responsive, beautiful UI
- ♿ **Accessible**: WCAG compliant components
- 📱 **Responsive**: Mobile-first design
- 🔧 **TypeScript**: Full type safety
- 🚀 **Production Ready**: Optimized for deployment

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Simba-Landing/
├── src/
│   ├── components/
│   │   └── LandingPage.tsx    # Main landing page component
│   ├── App.tsx                # Root component
│   ├── main.tsx               # React entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── index.html                 # HTML entry point
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Deployment

This landing page is ready for deployment to:
- Vercel
- Netlify
- Any static hosting provider

### Vercel Deployment

```bash
npm install -g vercel
vercel
```

## License

&copy; 2026 SIMBA Express. All rights reserved.

## Support

For support, contact support@simbaxp.com
