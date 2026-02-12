# Favicon TODO

The website needs a favicon (the small icon that appears in browser tabs).

## What's needed:

1. **favicon.ico** (16x16, 32x32, 48x48 px) - Classic format
2. **favicon-32x32.png** - Modern PNG format
3. **favicon-16x16.png** - Small size PNG
4. **apple-touch-icon.png** (180x180 px) - iOS home screen icon
5. **android-chrome-192x192.png** - Android icon
6. **android-chrome-512x512.png** - Android large icon

## Design suggestion:

- Use ArcadiaB logo or ₿ symbol
- Navy background (#0B0B1A)
- Gold accent (#D4A843)
- Simple, recognizable at small sizes

## Where to add in HTML:

Add to `<head>` section of all pages:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

## Tools to generate:

- https://realfavicongenerator.net/
- https://favicon.io/

Upload a square PNG (512x512 recommended) with your logo/design and generate all sizes.
