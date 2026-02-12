# ArcadiaB Website

**Public marketing site for ArcadiaB — Mexico's Bitcoin Treasury Company**

## Stack

- **Static HTML/CSS/JS** — No build process, deploys instantly
- **Hosted on:** Netlify
- **Domain:** arcadiab.com (to be configured)

## Structure

```
arcadiab-website/
├── index.html              # Homepage
├── productos/              # Product pages (Phase 2)
├── css/
│   ├── global.css          # Design system, variables, typography
│   ├── components.css      # Reusable components (buttons, cards, forms)
│   ├── nav.css             # Navigation and mobile menu
│   └── pages.css           # Page-specific layouts
├── js/
│   ├── nav.js              # Navigation interactions
│   ├── animations.js       # Scroll-triggered animations
│   └── maxi-widget.js      # Chat widget functionality
├── assets/
│   ├── screenshots/        # App screenshots
│   ├── logo/               # Brand assets
│   └── icons/              # UI icons
└── netlify.toml            # Netlify configuration
```

## Design System

### Colors
- **Primary BG:** `#0B0B1A` (deep navy)
- **Gold Accent:** `#D4A843` (signature ArcadiaB color)
- **Orange:** `#E8863A` (app action color)

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** DM Sans (sans-serif)

### Components
- Buttons: Primary (gold gradient), Ghost (transparent), Text (link)
- Cards: Dark card background with gold border on hover
- Phone mockups: Rounded with glow effect

## Deployment

### Netlify

1. Connect GitHub repo to Netlify
2. Build command: (none - static site)
3. Publish directory: `/`
4. Domain: Configure `arcadiab.com` DNS on GoDaddy

### Manual Deploy

```bash
cd arcadiab-website
netlify deploy --prod
```

## Phase 1 Status (Week 1-2)

✅ Homepage complete with all sections
✅ Design system implemented
✅ Navigation with mobile menu
✅ Product showcase (6 products)
✅ Trust & authority section
✅ Content bridges to ecosystem
✅ Footer with sitemap
✅ Maxi chat widget
✅ Responsive mobile design
✅ App screenshots integrated

⏳ Product detail pages (Phase 2)
⏳ Clientes Privados page (Phase 2)
⏳ Empresas page (Phase 2)
⏳ About/Security/Regulation pages (Phase 3)

## Notes

- All app screenshots are from the new ArcadiaB app
- Homepage uses real app visuals (no placeholders needed)
- Cross-links to capitalduro.mx and aprenderbitcoin.mx are in place
- GA4 tracking to be added once measurement ID is configured

## Contact

Built by Maxi ₿ — ArcadiaB's AI agent
Questions? Pregúntale a Maxi at maximoon.netlify.app
