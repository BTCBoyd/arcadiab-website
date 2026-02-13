# News Management System

## Overview

Simple system to manage press articles on the ArcadiaB website.

**Key files:**
- `news-articles.json` - Database of all press articles
- `add-news-article.mjs` - Script to add new articles
- `update-news-sections.mjs` - Script to update HTML pages

## Adding a New Article

**When you see/receive new press about ArcadiaB:**

```bash
node add-news-article.mjs <URL>
```

**Example:**
```bash
node add-news-article.mjs https://criptonoticias.com/new-article-about-arcadiab
```

**What it does:**
1. Fetches the article
2. Extracts title, source, description automatically
3. Adds to `news-articles.json` (newest first)

**Then update the HTML:**
```bash
node update-news-sections.mjs
```

**What it does:**
1. Reads `news-articles.json`
2. Updates nosotros.html (top 6 articles)
3. Updates en/about.html (top 6 articles)

**Finally, deploy:**
```bash
git add news-articles.json nosotros.html en/about.html
git commit -m "Add new press article: [Source Name]"
git push origin master
```

Netlify auto-deploys in ~2 minutes.

## Workflow Summary

```
New article published
    ↓
1. node add-news-article.mjs <URL>
    ↓
2. node update-news-sections.mjs
    ↓
3. git add + commit + push
    ↓
Live on arcadiab.com in 2 minutes
```

## Manual Edits

If the auto-extraction gets something wrong, just edit `news-articles.json` directly:

```json
{
  "url": "https://example.com/article",
  "title": "Correct Title Here",
  "source": "Source Name",
  "date": "2026-02",
  "icon": "📰",
  "description": "Brief description here",
  "language": "es"
}
```

Then run `node update-news-sections.mjs` to regenerate HTML.

## Supported Sources (auto-detected)

- CriptoNoticias → 📈
- El Horizonte → 📰
- Bitcoin Treasuries Blog → 🏛️
- YouTube → 📹
- Bitget News → 🌐
- Forbes → 💼
- Bloomberg → 📊
- CoinDesk → 🪙
- Decrypt → 🔓
- Others → 📰 (default)

## Avoiding False Positives

**Manual verification is required** - the script doesn't auto-discover articles because "Arcadia" is a common name.

Only add articles YOU verify are about ArcadiaB (Bitcoin company in Mexico).

## Future: Full Press Room Page

When we have 10+ articles, create `/prensa.html` with:
- Complete archive (all articles)
- Search/filter by source
- Chronological ordering
- Pagination

For now, top 6 on nosotros page is sufficient.
