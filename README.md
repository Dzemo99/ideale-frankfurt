# Ideale Gebäudereinigung — Frankfurt Landingpage

Production-Landingpage für die Frankfurt-Expansion. Astro + Tailwind, deploybar auf Netlify.

**Live-Ziel:** `https://frankfurt.ideale-gebaeudereinigung.de`

## Stack

- Astro 5 (Static, 0-JS-default)
- Tailwind CSS 3 mit Brand-Tokens (`ig.*`)
- TypeScript strict
- Netlify Forms (Kontaktformular)
- Google Tag Manager + Consent Mode v2
- Lokal gehostete Google Fonts (Fraunces + Plus Jakarta Sans)

## Lokal entwickeln

```bash
nvm use            # liest .nvmrc → Node 20+
npm install
npm run dev        # http://localhost:4321
npm run build      # Build nach dist/
npm run preview    # Preview des Builds
npm run typecheck  # astro check
```

## Environment Variables

`.env` aus `.env.example` kopieren und mit echten IDs befüllen:

```bash
cp .env.example .env
```

Felder:

| Variable | Zweck |
|---|---|
| `PUBLIC_GTM_ID` | GTM-Container — Hauptcontainer, lädt alle anderen Tags |
| `PUBLIC_GA4_ID` | GA4 Measurement ID (Backup falls direkt geladen) |
| `PUBLIC_GOOGLE_ADS_ID` | Google Ads Konto |
| `PUBLIC_GOOGLE_ADS_CONV_PHONE` | Conversion-Label für Phone-Click |
| `PUBLIC_GOOGLE_ADS_CONV_WHATSAPP` | Conversion-Label für WhatsApp-Click |
| `PUBLIC_GOOGLE_ADS_CONV_FORM` | Conversion-Label für Form-Submit |

**Wenn Variable leer ist → Tag wird nicht gerendert.** Heißt: lokal entwickeln ohne Tracking ist okay.

## Deployment

### 1. GitHub-Repo verbinden

```bash
git remote add origin git@github.com:<USER>/ideale-frankfurt.git
git push -u origin main
```

### 2. Netlify-Site anlegen

1. [app.netlify.com](https://app.netlify.com/) → **Add new site → Import an existing project**
2. GitHub OAuth → Repo `ideale-frankfurt` wählen
3. Build settings (sollten auto-erkannt sein):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Environment Variables eintragen** (Site settings → Environment variables) — alle `PUBLIC_*` Werte aus `.env.example`
5. Deploy auslösen

### 3. Custom Domain bei IONOS

1. Netlify: **Site settings → Domain management → Add custom domain** → `frankfurt.ideale-gebaeudereinigung.de`
2. IONOS DNS:
   - Typ: `CNAME`
   - Host: `frankfurt`
   - Wert: `<dein-site>.netlify.app`
   - TTL: 3600
3. SSL-Zertifikat aktiviert sich automatisch (Let's Encrypt)

### 4. Netlify Forms-Notifications einrichten

Nach erstem Formular-Submit auf Live-Site:

**Netlify Dashboard → Forms → `frankfurt-anfrage` → Settings → Form notifications → Email** → `info@ideale-gebaeudereinigung.de`

## Pre-Go-Live-Checkliste

Siehe `CLAUDE.md` Abschnitt 14.

## Struktur

```
src/
├── components/
│   ├── layout/      Header, Footer, CookieBanner
│   ├── sections/    Hero, Services, FAQ, ContactForm …
│   ├── tracking/    GTM, ConsentMode
│   └── ui/          Button, CallButton, ServiceCard
├── data/            site.ts (single source of truth), services.ts, faq.ts
├── layouts/         BaseLayout.astro
├── lib/             tracking.ts (gtag helpers)
├── pages/           index, impressum, datenschutz, danke, 404
└── styles/          global.css
```

## Phase 2 (später)

- 12 einzelne Service-Pages
- Lokale Landingpages (Offenbach, Mainz, Wiesbaden …)
- 301-Redirects von Shopify-Hauptsite
- Preisrechner
