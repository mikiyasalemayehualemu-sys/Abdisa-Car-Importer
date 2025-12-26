# Abdisa Car Importer - Technical Documentation

An elite, premium automotive importer web application built for the Ethiopian market, featuring high-end animations, localized support, and a modern design system.

## 🚀 Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | React 18 + Vite | Optimized build tool and component architecture. |
| **Language** | TypeScript | Type-safe development for enterprise stability. |
| **Styling** | Tailwind CSS v4 | Cutting-edge CSS engine with dynamic variable support. |
| **Animations** | Framer Motion | Elite-grade micro-interactions and staggered reveals. |
| **Icons** | Lucide React | Minimalist, sharp SVG icons. |
| **Internationalization** | i18next | 100% coverage for English, Amharic, Afaan Oromo, and Tigrinya. |
| **Image Generation** | Google DeepMind DALL-E 3 | Custom-generated 8K automotive studio photography. |

## ✨ Key Features

### 1. Premium Aesthetic Passes
- **Glassmorphism**: Custom `.glass-premium` utility for high-end transparency and blur.
- **Micro-animations**: Smooth hover transitions, scale effects, and staggered revelation of content.
- **Theme Awareness**: Seamless switching between Light and Dark modes with persistent state.

### 2. Multi-Language Intelligence
- **Full Localization**: Every string (including car specs and form placeholders) is translated.
- **Dynamic Content**: Language detection and fallback systems are fully configured.

### 3. Inventory System
- **Local Asset Hosting**: All vehicle images are stored locally in `/public/images/` for instant loading and zero broken links.
- **Premium Photography**: Replaced generic placeholders with professional studio shots for every model in stock.

## 📁 Project Structure

```text
Abdisa-Car-Importer/
├── src/
│   ├── components/       # Layout, ThemeToggle, LanguageSwitcher
│   ├── data/             # Car inventory data (cars.ts)
│   ├── pages/            # Home, About, AvailableCars, Contact, Gallery
│   ├── i18n.ts           # Translation resources (EN, AM, OM, TI)
│   ├── index.css         # Global styles & Tailwind v4 config
│   └── main.tsx          # Application entry point
├── public/
│   └── images/           # High-resolution local car assets
├── package.json          # Dependencies and scripts
└── vite.config.ts        # Build configuration
```

## 🛠️ Performance & Build
- **Build Command**: `npm run build` - Generates a highly optimized production bundle.
- **Development**: `npm run dev` - Instant HMR for rapid iteration.
- **Asset Optimization**: Uses WebP-ready high-resolution PNGs for the best balance of quality and weight.

## 🏁 How to Run
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Access at: `http://localhost:5174`

---
*Created with elite standards for Abdisa Car Importer. 2024.*
