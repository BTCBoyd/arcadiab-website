# Mobile Responsiveness Audit
**Date:** 2026-02-16
**Auditor:** Maxi
**Scope:** arcadiab.com homepage + all product pages
**Test Viewports:** 375px (iPhone SE), 390px (iPhone 14), 360px (Samsung Galaxy), 768px (iPad)

---

## Executive Summary

The site has a `mobile-fixes.css` file with many responsive improvements already implemented. However, several critical issues remain that hurt mobile conversion:

**Critical Issues (P0):**
1. Hero phone mockup sizing not confirmed to work at 375px
2. Products grid may not stack properly to single column
3. Stacker Inmobiliario iPhone frame adds visual clutter on mobile
4. CTA buttons need full-width treatment confirmed
5. Trust bar wrapping behavior unverified

**High Priority (P1):**
6. Navigation mega-menu mobile behavior needs testing
7. Typography scale may need additional reduction for smallest screens
8. Product page hero sections need vertical stacking verification
9. Footer accordion functionality not implemented (currently just stacks)
10. Maxi chat widget positioning relative to mobile browser chrome

---

## Section-by-Section Findings

### 1. Navigation

**Current State:**
- Has hamburger toggle button (`nav-toggle`)
- Mobile menu implemented in CSS (fixed position, slides down)
- Mega-menu has mobile styling
- BTC price widget visible in nav-actions

**Issues:**
- ⚠️ BTC price widget may need to hide or move into hamburger at <768px
- ⚠️ Nav-actions div has 4 elements (price, lang toggle, login, register) - may be cramped
- ⚠️ Mega-menu mobile dropdown behavior not verified
- ⚠️ Touch target sizes for hamburger icon not confirmed (needs 44x44px minimum)

**Recommended Fixes:**
```css
@media (max-width: 768px) {
  .btc-price { display: none; } /* Hide on mobile, show in hamburger menu instead */
  .nav-actions { gap: 0.5rem; } /* Reduce spacing between elements */
  .nav-toggle { min-width: 44px; min-height: 44px; } /* Confirm touch target */
}
```

### 2. Hero Section

**Current State:**
- Uses `.hero-grid .grid-2` class
- Hero title: Large text with gold span
- Hero subtitle: text-lg text-secondary
- CTA section with 2 buttons + trust pills
- Phone mockup in second grid column

**Issues:**
- ✅ mobile-fixes.css has hero h1 at 2.25rem on mobile (good)
- ✅ CTA buttons set to stack vertically and full-width (good)
- ⚠️ `.grid-2` class stacking to single column NOT verified in mobile-fixes.css
- ⚠️ Phone mockup sizing not addressed - may overflow at 375px
- ⚠️ Trust pills layout after buttons not confirmed

**Recommended Fixes:**
```css
@media (max-width: 768px) {
  .hero-grid { 
    display: flex; 
    flex-direction: column; 
    gap: 2rem; 
  }
  .hero-phone-mockup { 
    max-width: 250px; 
    margin: 0 auto; 
  }
  .trust-pills { 
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 0.5rem; 
  }
}
```

### 3. Trust Bar / Stats Section

**Current State:**
- Likely uses grid or flex layout
- Contains trust signals/badges

**Issues:**
- ⚠️ Wrapping behavior not confirmed
- ⚠️ May need to hide less important badges at smallest screens
- ⚠️ Text size scaling not verified

**Recommended Fixes:**
```css
@media (max-width: 768px) {
  .trust-bar { 
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 1rem; 
  }
  .trust-badge:nth-child(n+4) { 
    display: none; /* Show only top 3 on small mobile */
  }
}
@media (min-width: 480px) and (max-width: 768px) {
  .trust-badge:nth-child(n+4) { 
    display: flex; /* Show all on larger mobile */
  }
}
```

### 4. Products Grid Section

**Current State:**
- HTML structure unclear without seeing full markup
- mobile-fixes.css has `.grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }`
- Product cards defined with padding and sizing

**Issues:**
- ✅ Grid stacking to single column implemented
- ⚠️ Phone mockups in product cards may be too large
- ⚠️ Card text may be too verbose for mobile - needs "Ver más →" truncation
- ⚠️ Product card images/mockups need max-width constraints

**Recommended Fixes:**
```css
@media (max-width: 768px) {
  .product-card-image,
  .product-phone-mockup { 
    max-width: 200px; 
    margin: 0 auto; 
  }
  .product-description-long { 
    display: none; /* Hide on mobile */
  }
  .product-description-short { 
    display: block; /* Show condensed version */
  }
}
```

### 5. Stacker Inmobiliario Card (CRITICAL)

**Current State:**
- Contains iPhone frame graphic with house→bank→BTC flow
- Most visually complex product card

**Issues:**
- 🔴 **CRITICAL:** iPhone frame adds visual noise on mobile
- 🔴 **CRITICAL:** Graphic competes with text for limited screen space
- 🔴 **CRITICAL:** New graphic design in progress (per task brief)

**Recommended Fixes:**
```css
@media (max-width: 768px) {
  .stacker-iphone-frame { 
    display: none; /* Remove iPhone frame on mobile */
  }
  .stacker-placeholder { 
    display: flex; /* Show simplified placeholder */
    align-items: center;
    justify-content: center;
    min-height: 200px;
    background: var(--bg-secondary);
    border-radius: 1rem;
  }
  .stacker-description { 
    max-width: 100%; /* Ensure text is fully readable */
  }
}
```

### 6. Content Bridges (Capital Duro / AprenderBitcoin)

**Current State:**
- Mega-menu dropdown items link to external sites
- May have dedicated section on homepage as well

**Issues:**
- ⚠️ Preview images may take too much space on mobile
- ⚠️ Descriptions may be too long
- ⚠️ Cards need compact mobile treatment

**Recommended Fixes:**
```css
@media (max-width: 768px) {
  .content-bridge-image { 
    display: none; /* Hide preview images */
  }
  .content-bridge-title { 
    font-size: 1.125rem; 
  }
  .content-bridge-desc { 
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Truncate to 2 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```

### 7. Audience Teasers (Clientes Privados / Empresas)

**Current State:**
- Likely side-by-side cards on desktop

**Issues:**
- ⚠️ Stacking to single column not confirmed
- ⚠️ Full-width treatment needed

**Recommended Fixes:**
```css
@media (max-width: 768px) {
  .audience-grid { 
    display: flex; 
    flex-direction: column; 
    gap: 1.5rem; 
  }
  .audience-card { 
    width: 100%; 
  }
}
```

### 8. Footer

**Current State:**
- mobile-fixes.css has footer-grid stacking to single column
- footer-links stacking vertically
- Good baseline implementation

**Issues:**
- ⚠️ Footer sections may benefit from accordion/collapsible treatment
- ⚠️ Social links need touch target verification
- ⚠️ Legal text readability at small sizes

**Recommended Fixes:**
```css
@media (max-width: 768px) {
  .footer-section-title { 
    cursor: pointer; 
    position: relative; 
    padding-right: 2rem; 
  }
  .footer-section-title::after { 
    content: '+'; 
    position: absolute; 
    right: 0; 
  }
  .footer-section.collapsed .footer-links { 
    display: none; 
  }
  .footer-section.collapsed .footer-section-title::after { 
    content: '+'; 
  }
  .footer-section-title::after { 
    content: '−'; 
  }
}
```

### 9. Maxi Chat Widget

**Current State:**
- Floating button (presumably bottom-right)
- Not visible in current HTML (likely injected via JS)

**Issues:**
- 🔴 **CRITICAL:** May overlap with mobile browser chrome (URL bar, navigation)
- ⚠️ Position relative to bottom of viewport needs safe-area-inset consideration
- ⚠️ May cover CTAs when scrolled to page bottom

**Recommended Fixes:**
```css
@media (max-width: 768px) {
  .maxi-chat-button { 
    bottom: calc(env(safe-area-inset-bottom) + 5rem); /* Clear mobile browser UI */
    right: 1rem; 
  }
}
```

---

## Product Pages Audit

### Template Issues (applies to all product pages)

**Hero Section:**
- ⚠️ Text + mockup two-column layout needs vertical stacking
- ⚠️ Mockups may be too large at 375px

**How It Works:**
- ⚠️ Steps likely in multi-column layout - needs single-column stack
- ⚠️ Numbered steps need larger touch targets if clickable

**Details/Features:**
- ⚠️ Multi-column lists need single-column stack
- ⚠️ Feature cards need compact mobile treatment

**FAQ:**
- ⚠️ Accordion expand/collapse touch targets need 44px minimum
- ⚠️ Answer text may be too small

**Cross-Sell:**
- ⚠️ Horizontal scroll or single-column stack needed
- ⚠️ Card sizing needs mobile optimization

**CTA Footer:**
- ⚠️ Buttons need full-width treatment

### Product-Specific Issues

**Stacker Inmobiliario Page:**
- 🔴 **CRITICAL:** Most content-heavy product page
- 🔴 **CRITICAL:** Fideicomiso explanation must remain readable
- 🔴 **CRITICAL:** Loan terms table needs mobile treatment (scroll or stack)
- 🔴 **CRITICAL:** Risk disclaimers must be prominent

**B2X Page:**
- 🔴 **CRITICAL:** Risk disclaimer must not get buried below fold

---

## Performance Concerns

**Images:**
- ⚠️ Need to verify desktop-size images aren't loading on mobile
- ⚠️ Phone mockup PNGs may be large - need optimization

**Layout Shift:**
- ⚠️ Hero section load behavior needs testing for CLS
- ⚠️ Navigation transition may cause shift

**Load Time:**
- ⚠️ Target <3s on mobile not yet verified

---

## Testing Gaps

**Need to verify on real devices:**
- [ ] iPhone SE (375px) - smallest common viewport
- [ ] iPhone 14 (390px) - most common iOS
- [ ] Samsung Galaxy (360px) - most common Android  
- [ ] iPad (768px) - tablet breakpoint

**Functional testing needed:**
- [ ] All navigation links work on mobile
- [ ] Hamburger menu opens/closes
- [ ] Mega-menu dropdowns work in mobile menu
- [ ] All CTAs are tappable
- [ ] No horizontal scroll on any page
- [ ] Forms are usable (contact, newsletter)

---

## Implementation Priority

**Phase 1 (Do First):**
1. Fix Stacker Inmobiliario iPhone frame (hide on mobile)
2. Confirm hero section stacking (text above mockup)
3. Verify CTA buttons full-width behavior
4. Test navigation mega-menu on mobile

**Phase 2:**
5. Optimize product card mockup sizing
6. Implement truncated descriptions with "Ver más"
7. Test all product page hero sections
8. Verify footer stacking

**Phase 3:**
9. Add footer accordion behavior (JS required)
10. Optimize Maxi chat widget positioning
11. Performance testing and optimization
12. Real device testing

---

## Deployment Plan

1. Create branch: `feature/mobile-responsiveness` ✅ (DONE)
2. Implement Phase 1 fixes
3. Deploy Netlify preview for Boyd to test on real devices
4. Iterate based on feedback
5. Implement Phase 2 and 3
6. Final Netlify preview
7. Boyd approval → merge to main

---

**Next Action:** Begin Phase 1 implementation
