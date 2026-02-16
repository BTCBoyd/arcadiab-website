# StoryBrand Framework Updates
**Date:** 2026-02-14  
**Based on:** StoryBrand audit feedback (8/10 overall rating)

## ✅ Completed Changes

### 1. **Header Simplification (Priority: High)**
**Before:**
- Headline: "Protege y Haz Crecer tu Patrimonio con Bitcoin"
- Two CTAs: "Comienza Ahora" + "Explora Productos"

**After:**
- Headline: "Protege Tu Patrimonio con Bitcoin" (shorter, more customer-hero focused)
- Single CTA: "Comienza Ahora" (removed diluting secondary CTA)
- Added `.btn-cta-primary` class with orange highlight for primary conversion actions

**Impact:** Reduces decision paralysis, focuses visitor attention on single clear action

---

### 2. **New "El Problema" Section (Priority: High)**
**Added after Trust Bar, before Products**

Implements full StoryBrand 3-part problem stack:

1. **External Problem (📉):** "Devaluación constante"
   - Stat: Peso lost >99% purchasing power since 1976
   
2. **Internal Problem (😰):** "Frustración e incertidumbre"
   - Emotional resonance: hard work, but never advancing
   
3. **Philosophical Problem (⚖️):** "Sistema injusto"
   - Higher truth: Fiat rewards controllers, Bitcoin fixes this

**Why this matters:** StoryBrand says customers buy when you connect all three problem levels. We only had external before.

---

### 3. **New "Tu Plan en 3 Pasos" Section (Priority: High)**
**Added after El Problema, before Products**

Simple 3-step process:
1. **Crea tu cuenta** — 2 minutes, secure verification
2. **Conecta tu banco** — Works with any Mexican bank
3. **Empieza a acumular** — First purchase + auto-DCA setup

Includes prominent orange CTA: "Comienza Ahora"

**Why this matters:** Audit said "Lacks explicit 3-step plan" (7/10 on Problem section). Now we have clear, scannable roadmap.

---

### 4. **CSS Enhancements**
Added component styles:
- `.btn-cta-primary` — Orange primary CTA (stands out from gold secondary)
- `.problem-grid` + `.problem-card` — Problem section layout
- `.steps-grid` + `.step-card` — 3-step plan layout
- `.step-number` — Circular numbered badges
- `.bg-dark`, `.center`, `.text-center` — Utility classes
- Color utilities: `.text-error`, `.text-warning`, `.text-success`

---

## 🔄 Partially Addressed

### Customer-Centric Language (6/10 areas improved)
**Audit target:** 70%+ "tu/you" language

**What we did:**
- Hero headline now emphasizes "Tu Patrimonio"
- Problem section speaks directly to customer frustration
- 3-step plan uses "tu cuenta", "tu banco", "tu stack"

**What remains:** 
- Need full audit of all body copy
- Some sections still say "Nosotros construimos..." instead of "Te protegemos con..."
- Should be done page-by-page systematically

---

## 🚧 Still TODO (From Audit Recommendations)

### 1. **Unified CTAs Throughout Site (Priority: High)**
**Recommendation:** Standardize all primary CTAs to orange "Comenzar" buttons, limit to one per section

**Status:** 
- ✅ Hero: Done
- ✅ 3-Step Plan: Done
- ⏳ Products section: Still uses `.btn-text` links (low priority, these are informational)
- ⏳ Other pages (Empresas, Treasury, etc.): Not yet updated

**Next step:** Audit all pages, replace competing CTAs with single orange "Comienza Ahora" where conversion is goal

---

### 2. **Enhanced Visuals (Priority: Medium)**
**Recommendation:** 
- Hero section: Bitcoin growth chart/transformation imagery
- Before/After visuals showing wealth protection

**Status:** Not started

**Why postponed:** Content/design work, not critical for framework implementation

---

### 3. **Product Comparison Table (Priority: Medium)**
**Recommendation:** Add pricing transparency and product comparison

**Current state:**
- Products well-defined in grid
- No side-by-side comparison
- No pricing shown

**Why postponed:** Requires business decision on pricing display strategy

---

### 4. **Lead Generation Enhancements (Priority: Low)**
**Recommendations:**
- Gated "Guía Gratis" popup
- Chat widget integration
- Exit-intent popup

**Status:** Not started

**Why postponed:** Technical integration work, not core messaging fix

---

### 5. **Full Copy Audit for "Tu/You" Language (Priority: Medium)**
**Target:** 70%+ customer-hero language across all pages

**Pages to audit:**
- ✅ index.html — Hero + new sections done
- ⏳ index.html — Remaining sections (Why Bitcoin, Testimonials, etc.)
- ⏳ /empresas
- ⏳ /treasury
- ⏳ /nosotros
- ⏳ Product detail pages

**Process:** Systematically convert "we/our" brand-as-hero statements to "you/your" customer-as-hero

---

## 📊 Impact Summary

### Audit Scores Before → Expected After

| Section | Before | After | Change |
|---------|--------|-------|--------|
| **Header Clarity** | 9/10 | **10/10** | +1 (removed diluting CTA) |
| **CTA Clarity** | 8/10 | **9/10** | +1 (orange primary CTA added) |
| **Problem Definition** | 7/10 | **9/10** | +2 (full 3-part problem stack) |
| **Customer-Centric** | 8/10 | **8.5/10** | +0.5 (hero improved, full audit pending) |
| **StoryBrand Implementation** | 8/10 | **9/10** | +1 (added missing sections) |

### Overall: 8/10 → **9/10**

---

## 🎯 Next Priority Actions

**If continuing StoryBrand optimization:**

1. **High Priority:**
   - Audit all pages for "tu/you" vs "we" language (target 70%+)
   - Unify CTAs on Empresas and Treasury pages
   
2. **Medium Priority:**
   - Add product comparison table (if pricing can be public)
   - Enhanced hero visual (Bitcoin growth chart)
   
3. **Low Priority:**
   - Lead gen enhancements (gated content, chat widget)
   - Exit-intent popups

---

## 🚀 Deployment

**Changes ready in:** `master` branch  
**Commit:** `63c6a38` — StoryBrand improvements  

**Test before going live:**
1. Check mobile responsiveness (new sections use `grid-3`)
2. Verify orange CTA buttons render correctly
3. Ensure "El Problema" section is readable on all devices
4. Check spacing/padding on 3-step plan cards

**Deploy when ready:** Boyd to push to Netlify

---

## 📝 Notes

- All changes follow existing ArcadiaB design system (Red Hat fonts, gold/orange colors, consistent spacing)
- New sections use existing CSS utilities where possible
- Mobile-first responsive design maintained
- No breaking changes to existing functionality
- Git history preserved for easy rollback if needed

---

**Created by:** Maxi  
**Review:** Ready for Boyd's approval
