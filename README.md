# Nodes Studio — Modern Architecture & Urban Design

> **"Where Vision Meets Design!"**  
> Responsive single-page marketing website for **Nodes Studio**, an architecture and computational design practice based in Semarang, Indonesia.

---

## 🏛️ Studio Identity

- **Studio Name:** Nodes Studio
- **Disciplines:**
  - 📐 **Architecture**
  - 🏙️ **Urban Design**
  - 💻 **Computational & Parametric Design**
- **Location:** 📍 Semarang, Central Java, Indonesia
- **Contact:** ✉️ [nodes.architect@gmail.com](mailto:nodes.architect@gmail.com)
- **Crafted by:** **BENCHCODE™**

---

## ✨ Design Aesthetics & Philosophy

The website follows a calm, quiet-luxury, Scandinavian-modern aesthetic:
- **Generous White Space & Proportions:** Clean layouts, breathable margins, and balanced hierarchy.
- **Organic Curvature:** Deep border radius (24px–32px) on cards, hero tags, and buttons.
- **Glassmorphic Elements:** Frosted translucent pills with `backdrop-filter: blur(16px)` and subtle borders.
- **Staggered Grids:** Off-grid vertical offsets reflecting architectural rhythm and movement.
- **Interactive Micro-Interactions:**
  - Slowly rotating circular badge (*"• NODES STUDIO • WHERE VISION MEETS DESIGN • SEMARANG •"*).
  - Multi-tab philosophy switcher (*Nature*, *Social*, *Materials*) with smooth fade transitions.
  - Responsive horizontal swipe carousel on mobile viewports.
  - Scroll-triggered reveal animations via `IntersectionObserver`.

---

## 🎨 Design Tokens & Palette

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Off-White (Canvas)** | `#F4F3EE` | Page background, cards, light contrast |
| **Pure White** | `#FFFFFF` | Hero tags, card surfaces, clean sections |
| **Charcoal** | `#2B2D28` | Primary text, dark cards, footer background |
| **Olive Gray** | `#6B6D62` | Deep section background ("Created Together") |
| **Olive Dark** | `#5C5E53` | Background variant |
| **Forest Green** | `#3F5B47` | Subtle nature accent, indicator dots |
| **Warm Cream** | `#E9E4D4` | Organic starburst glyphs, primary CTA buttons |

### Typography
- **Headings:** `Bricolage Grotesque` (Google Fonts) — Geometric grotesk display font with quirky architectural letterforms.
- **Body & Captions:** `Inter` (Google Fonts) — Crisp, legible Scandinavian sans-serif.

---

## 🚀 Quick Start (Zero Build Step)

This website is built with vanilla web technologies and requires **no build step**, Node.js bundling, or compiler to run.

### Option 1: Double-Click
Simply open `index.html` in any modern web browser (Google Chrome, Safari, Microsoft Edge, Mozilla Firefox).

### Option 2: Local HTTP Server
Run with Python:
```bash
python -m http.server 8089
```
Then visit [http://localhost:8089](http://localhost:8089) in your browser.

Or run with PHP:
```bash
php -S localhost:8089
```

---

## 📂 Project Structure

```
nodestudio/
├── index.html                   # Semantic HTML5 single-page website
├── README.md                    # Project overview & documentation
├── ARCHITECTURE_STUDIO.md       # Comprehensive architecture & design reference
├── css/
│   └── style.css                # Custom CSS tokens, glassmorphism, animations
├── js/
│   └── main.js                  # Centralized STUDIO_CONFIG, navigation, tabs, animations
└── assets/
    ├── brand/                   # Transparent retina logos & geometric SVG marks
    │   ├── nodes-studio-white@2x.png
    │   ├── nodes-studio-charcoal@2x.png
    │   ├── nodes-studio-cream@2x.png
    │   ├── nodes-mark-white.png
    │   ├── nodes-mark-charcoal.png
    │   ├── nodes-mark-cream.png
    │   ├── starburst-cream.svg
    │   └── starburst-white.svg
    └── images/                  # High-resolution architectural photography
        ├── hero-building.jpg
        ├── card1_arch.jpg
        ├── card3_scandi_clean.jpg
        ├── card4_arch.jpg
        ├── sust_clean_1.jpg
        ├── sust_clean_2.jpg
        ├── sust_clean_3.jpg
        └── sust_clean_4.jpg
```

---

## ⚙️ Content Customization

All studio text, disciplines, contact information, and tab switcher items can be easily updated in one central location inside `js/main.js`:

```javascript
const STUDIO_CONFIG = {
  studioName: "Nodes Studio",
  shortName: "NODES STUDIO",
  tagline: "Where Vision Meets Design!",
  description: "...",
  contactEmail: "nodes.architect@gmail.com",
  heroPills: ["Architecture", "Urban Design", "Computational and Parametric Design"],
  craftedBy: "BENCHCODE™",
  // ...
};
```

---

## 🌐 Deployment

### GitHub Pages
1. Go to repository **Settings** → **Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Set branch to `main` and folder to `/(root)`.
4. Click **Save**. The website will be live in seconds!

### Vercel / Netlify
Deploy directly by importing this GitHub repository. No build command or output directory configuration needed (`index.html` is at root).

---

## 📄 License & Attribution

- **Client:** Nodes Studio (Semarang, Indonesia)
- **Engineered & Crafted by:** **BENCHCODE™**
- All rights reserved © 2026 Nodes Studio.
