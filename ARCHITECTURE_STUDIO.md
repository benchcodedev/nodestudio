# Nodes Studio – Responsive Scandinavian Architecture Studio Website

A responsive, single-page marketing website for architecture studio **Nodes Studio** (`NODES STUDIO`), crafted strictly following the visual style, proportions, and layout of the Scandinavian modern reference design with custom typography and official brand assets.

---

## 🎨 Visual Identity & Scandinavian Modern Aesthetic

- **Brand Identity**: Features the custom lowercase **nodes studio** typography and signature curved node glyph mark.
- **Design Philosophy**: Calm, premium, Scandinavian-modern feel with generous white space, very large border radius (`24px – 32px`), and pill-shaped elements across all navigation buttons, categories, and tags.
- **Palette**:
  - Off-white: `#F4F3EE` (clean, calming canvas)
  - White: `#FFFFFF` (contrast cards & backdrops)
  - Charcoal: `#2B2D28` (rich, dark contrast)
  - Dark Charcoal: `#1E201B` / `#222420` (numbered chips, footer)
  - Olive-gray: `#6B6D62` / `#5C5E53` (dark approach section)
  - Forest green accent: `#3F5B47` (botanical accents & focus states)
  - Cream: `#E9E4D4` (warm organic starburst shapes & consultation CTA)
- **Typography**:
  - Headings: **Bricolage Grotesque** (Google Fonts) – geometric grotesk display with tight line-height and sentence case.
  - Body: **Inter** (Google Fonts) – clean readability.
- **Interactions**:
  - Subtle fade-up reveal on scroll (`IntersectionObserver`).
  - Gentle lift and elevation shadow on card hover.
  - Slow 22s rotating circular typography badge straddling the hero border with the Nodes Studio emblem at its center.
  - Floating silhouettes of birds drifting in the sky.
  - Full support for `prefers-reduced-motion: reduce`.

---

## 🏗️ Structure & Sections

### 1. Fixed / Sticky Translucent Navbar (`#main-nav`)
- **Desktop**:
  - Brand identity: Circular pill badge with Nodes Studio mark + wordmark `NODES STUDIO`.
  - Floating translucent pill menu with backdrop blur: `All items`, `Projects`, `Our approach`, `Good design`, `Sustainability`.
  - Utility actions: Search icon, Grid/Catalog icon, `EN` language selector, and `Contact` pill button.
  - Dynamically activates blur background (`nav-scrolled`) on scroll.
- **Mobile**:
  - Hamburger toggle opening a full-screen blurred drawer with quick links and studio contact info.

### 2. Full-Bleed Hero Section (`#hero`)
- Full-bleed background architectural photograph featuring a modern green-clad building with timber balconies, courtyard greenhouse, and people relaxing outdoors.
- Sky bird silhouettes with CSS drift animation.
- Left-aligned headline: **"Nodes Studio – Where Vision Meets Design!"** with subtext and pill button CTA `Let's go!`.
- Bottom-left glassmorphism pills: `Healthcare`, `Housing`, `Education`, `Culture`, `Public`.
- Bottom-right rotating circular badge: continuous CSS spin with center Nodes Studio glyph emblem, seamlessly straddling the hero and next section.

### 3. "Good Design" Section (`#good-design`)
- Two-column header:
  - Left: *"Good design is based on a deep understanding of the users' need"*
  - Right: Architectural mission statement paragraph.
- 4 staggered rounded cards (desktop staggered vertical offsets, mobile horizontal scroll-snap carousel with active dot indicators):
  1. **Healthcare Centre Hillerød**: Dark card with project photography and circular `Visit Project ↗` button.
  2. **Studio Philosophy**: Olive-charcoal card with `NODES STUDIO` logo, massive cream 8-pointed organic starburst shape bleeding off top-right, and an architectural quote.
  3. **Social Lounge**: Photo card with floating circular `Open House` badge and bottom rating card (`Average Rating 4.9` with 5 stars and `See Case Study` button).
  4. **Circular Renovation**: Dark card with `[ INNOVATION & CRAFT ]` pill badge, energy renovation photo, and caption.

### 4. "Created Together" Section (`#created-together`)
- Olive-gray (`#5C5E53`) background with off-white typography.
- Giant 8-pointed organic cream starburst SVG bleeding off the left edge.
- Two-column layout:
  - Left: *"Our projects are created together with the users and customers"*
  - Right: Three numbered items (1, 2, 3) in circular badges.
- Bottom center:
  - Dual circular decorative badges (starburst & concentric rings).
  - Mission statement.
  - Interactive 3-pill tab switcher (`Nature`, `Social`, `Materials`) with smooth fade transitions updating the 3 numbered items dynamically.

### 5. "Sustainability" Section (`#sustainability`)
- Centered header: *"We integrate knowledge about environmental issues, sustainability and healthy materials"* with description.
- 4 tall rounded cards with staggered heights and smooth hover zoom:
  1. **Curved Vertical Timber Facade** with tags `Healthcare`, `Wood Life`, `Sports – Living`.
  2. **Urban Courtyard with Pergolas** (tallest card) with tag `Nodes Urban Living`.
  3. **Warm Timber Community Interior** with badges `Nodes Innovation` and `Cul de Sac Team 24 Residences`.
  4. **Curving Public Park Bench Landscape** with tag `Public Landscape & Biodiversity`.
- Bottom fine-print quote and social pill links (`+ LINKEDIN`, `+ FACEBOOK`, `+ INSTAGRAM`).

### 6. Footer & Closing CTA (`#contact`)
- Dark charcoal (`#222420`) closing section.
- Large closing CTA: *"Let's build something together"* with cream consultation pill button.
- 4-column studio footer:
  1. Studio identity & mission with Nodes Studio mark.
  2. Semarang studio office address & contact info (`nodes.architect@gmail.com`).
  3. Architecture disciplines & navigation (Architecture, Urban Design, Computational & Parametric).
  4. Newsletter subscription form.
- Bottom bar: Studio copyright, **BENCHCODE&trade;** trademark pill badge (`Crafted by BENCHCODE™`), and smooth `Back to top ↑` button.

---

## 📂 File Architecture

```
benchcode dev/
├── index.html                   # Semantic HTML5 single-page structure
├── ARCHITECTURE_STUDIO.md       # Full documentation & customization guide
├── css/
│   └── style.css                # Design tokens, animations, glassmorphism, stagger offsets
├── js/
│   └── main.js                  # Centralized STUDIO_CONFIG, navigation, tab switcher, carousels
└── assets/
    ├── brand/
    │   ├── nodes-studio-original.png # Original uploaded logo asset
    │   ├── nodes-studio-charcoal@2x.png # Retina transparent charcoal logotype
    │   ├── nodes-studio-white@2x.png    # Retina transparent white logotype
    │   ├── nodes-mark-charcoal.png      # High-res charcoal glyph mark
    │   ├── nodes-mark-white.png         # High-res white glyph mark
    │   └── nodes-mark-cream.png         # High-res cream glyph mark
    ├── icons/
    │   ├── starburst-cream.svg  # Mathematical 8-point organic spiky star (#E9E4D4)
    │   └── starburst-white.svg  # White variant
    └── images/
        ├── hero-building.jpg    # Full-bleed green-clad building with garden & greenhouse
        ├── card1_arch.jpg       # Healthcare Centre Hillerød bridge architecture
        ├── card3_scandi_clean.jpg # Scandinavian wood interior lounge with green acoustic alcove
        ├── card4_arch.jpg       # 70s energy renovation facade
        ├── sust_clean_1.jpg     # Curved vertical timber facade
        ├── sust_clean_2.jpg     # Courtyard with timber pergolas
        ├── sust_clean_3.jpg     # Sunlit Scandinavian community interior
        └── sust_clean_4.jpg     # Public park with serpentine concrete bench
```

---

## ⚡ Quick Start & Preview

### Option A: Local HTTP Server (Active on port 8089)
```
http://localhost:8089
```

Or start a server anytime:
```bash
python -m http.server 8089
```

### Option B: Direct Browser Open
No build step is required! Double-click and open `index.html` directly in any modern browser (Chrome, Safari, Edge, Firefox).
