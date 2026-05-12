# Briefing: Ideale Gebäudereinigung — Frankfurt-Landingpage (Phase 1)

> **Wie du das nutzt:** Kopiere das gesamte Dokument als ersten Prompt in Claude Code. Claude Code soll es **vollständig lesen, Rückfragen sammeln, und dann Schritt für Schritt abarbeiten**. Am Ende steht eine deploybare Astro-Site auf Netlify unter `frankfurt.ideale-gebaeudereinigung.de`.

---

## 0. Auftrag in einem Satz

Baue eine **production-grade, SEO-optimierte, conversion-fokussierte One-Page-Landingpage** für die Frankfurt-Expansion einer etablierten Gebäudereinigungsfirma — mit komplettem Google-Ads-Tracking-Setup, DSGVO-konform, deploybar auf Netlify, versioniert auf GitHub.

**Hauptziel:** Conversions aus Google Ads — Anrufe, WhatsApp, Formular-Anfragen.

**Dies ist Phase 1.** Phase 2 (Hauptseiten-Relaunch, 12 Service-Pages, 301-Redirects von Shopify) kommt später. Bau die Site so dass sie als Basis für die größere Multi-Page-Site dienen kann — also saubere Komponenten, kein One-Off-Spaghetti.

---

## 1. Geschäftsdaten (alles korrekt — bitte 1:1 verwenden)

| Feld | Wert |
|---|---|
| Firma | **Ideale Gebäudereinigung** |
| Inhaber | **Jamal Jaafar** |
| Hauptdomain | `ideale-gebaeudereinigung.de` (bleibt erstmal auf Shopify, nicht anfassen!) |
| Frankfurt-Subdomain | `frankfurt.ideale-gebaeudereinigung.de` (Zielort dieser Site) |
| Anschrift | Kasseler Landstraße 80a, 37081 Göttingen |
| Telefon | `0551 50316976` |
| WhatsApp | `+49 160 95854323` (Link: `https://wa.me/4916095854323`) |
| E-Mail | `info@ideale-gebaeudereinigung.de` |
| USt-IdNr. | `DE361832333` |
| Versicherung | Betriebshaftpflicht 5 Mio. EUR |
| Frankfurter Adresse | **NEIN — Hinweistext:** "Wir bedienen den Großraum Frankfurt von unserem Hauptsitz in Göttingen aus. Vor-Ort-Termine selbstverständlich." |

**Keine erfundenen Daten.** Wenn etwas unklar ist → frag mich (Dzemo) bevor du Platzhalter erfindest.

---

## 2. Tech-Stack — strikt einhalten

- **Framework:** Astro (neueste stabile Version via `npm create astro@latest`)
- **Styling:** Tailwind CSS (Astro-Integration `@astrojs/tailwind`)
- **Sprache:** TypeScript überall, `strict: true`
- **Sitemap:** `@astrojs/sitemap`
- **Image Optimization:** Astro `<Image />` aus `astro:assets`
- **Forms:** Netlify Forms (kein externes Service)
- **Hosting:** Netlify (Git-Deploy aus GitHub)
- **Versionierung:** Git + GitHub von Tag 1
- **Package Manager:** npm
- **Node:** v20+

**Was NICHT:** Kein React, kein Vue, keine Client-side-Hydration außer wo absolut nötig (Cookie-Banner). Astro-Stärke ist 0-JS-Default. Halte es so.

---

## 3. Projektstruktur (Soll-Zustand)

```
ideale-frankfurt/
├── .env.example
├── .gitignore
├── .nvmrc
├── README.md
├── astro.config.mjs
├── netlify.toml
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── images/
│   │   ├── hero-placeholder.jpg          (Platzhalter — wird später ersetzt)
│   │   ├── service-fassade.jpg
│   │   ├── service-fenster.jpg
│   │   ├── service-buero.jpg
│   │   ├── service-sanitaer.jpg
│   │   ├── service-wintergarten.jpg
│   │   ├── team-1.jpg
│   │   ├── team-2.jpg
│   │   └── logo.svg                       (Platzhalter)
│   └── og-image.jpg                       (1200x630, Platzhalter)
└── src/
    ├── components/
    │   ├── layout/
    │   │   ├── Header.astro
    │   │   ├── Footer.astro
    │   │   └── CookieBanner.astro
    │   ├── sections/
    │   │   ├── Hero.astro
    │   │   ├── TrustBar.astro
    │   │   ├── Services.astro
    │   │   ├── WhyUs.astro
    │   │   ├── ProcessSteps.astro
    │   │   ├── Testimonials.astro
    │   │   ├── FAQ.astro
    │   │   ├── ContactForm.astro
    │   │   └── FinalCTA.astro
    │   ├── ui/
    │   │   ├── Button.astro
    │   │   ├── CallButton.astro
    │   │   ├── WhatsAppButton.astro
    │   │   └── ServiceCard.astro
    │   └── tracking/
    │       ├── GTM.astro
    │       ├── GTMNoScript.astro
    │       └── ConsentMode.astro
    ├── data/
    │   ├── site.ts                        (zentrale Geschäftsdaten — single source of truth)
    │   ├── services.ts                    (alle 12 Services)
    │   └── faq.ts
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro                    (Hauptlandingpage)
    │   ├── impressum.astro
    │   ├── datenschutz.astro
    │   ├── danke.astro                    (Nach erfolgreichem Form-Submit)
    │   └── 404.astro
    ├── styles/
    │   └── global.css
    └── lib/
        └── tracking.ts                    (Helper-Funktionen für gtag-Events)
```

---

## 4. Setup-Reihenfolge (genau diese Reihenfolge!)

### 4.1 Projekt initialisieren

```bash
npm create astro@latest ideale-frankfurt -- --template minimal --typescript strict --no-install --no-git
cd ideale-frankfurt
npm install
npm install -D @astrojs/tailwind @astrojs/sitemap tailwindcss
npx astro add tailwind --yes
npx astro add sitemap --yes
```

### 4.2 Git + GitHub

```bash
git init
# .gitignore prüfen: node_modules, dist, .env, .netlify
git add .
git commit -m "chore: initial astro setup"
```

Dann **Dzemo bitten**, ein leeres GitHub-Repo `ideale-frankfurt` (private) anzulegen. Sobald URL da ist:

```bash
git remote add origin <URL>
git branch -M main
git push -u origin main
```

### 4.3 Tailwind-Konfiguration

`tailwind.config.mjs`:
- Content: `./src/**/*.{astro,html,js,ts}`
- Theme erweitern um Brand-Tokens (siehe Abschnitt 5)
- Plugin: `@tailwindcss/forms` (für Kontaktformular-Defaults)

### 4.4 `src/data/site.ts` — Single Source of Truth

```ts
export const SITE = {
  name: "Ideale Gebäudereinigung",
  domain: "frankfurt.ideale-gebaeudereinigung.de",
  url: "https://frankfurt.ideale-gebaeudereinigung.de",
  description: "Professionelle Gebäudereinigung in Frankfurt am Main. Glasreinigung, Fassadenreinigung, Büroreinigung. 5 Mio. EUR versichert. Festpreise. Jetzt unverbindlich anfragen.",
  founder: "Jamal Jaafar",
  email: "info@ideale-gebaeudereinigung.de",
  phone: "+495515031 6976",
  phoneDisplay: "0551 50316976",
  phoneLink: "tel:+4955150316976",
  whatsapp: "+4916095854323",
  whatsappLink: "https://wa.me/4916095854323?text=Hallo%2C%20ich%20interessiere%20mich%20für%20Ihre%20Reinigungsleistungen%20in%20Frankfurt.",
  address: {
    street: "Kasseler Landstraße 80a",
    zip: "37081",
    city: "Göttingen",
    country: "DE"
  },
  ustId: "DE361832333",
  insurance: "Betriebshaftpflicht bis 5 Mio. EUR",
  serviceArea: "Frankfurt am Main und Großraum Rhein-Main",
  // Tracking IDs werden via env injiziert — nie hardcoden
} as const;
```

### 4.5 `src/data/services.ts` — 12 Services (für Phase 1: nur Übersicht, keine eigenen Seiten)

```ts
export const SERVICES = [
  { slug: "glasreinigung",         title: "Glasreinigung",         short: "Streifenfreie Fenster & Glasfassaden",         icon: "window" },
  { slug: "fassadenreinigung",     title: "Fassadenreinigung",     short: "Schonende Reinigung jeder Fassadenart",         icon: "building" },
  { slug: "bueroreinigung",        title: "Büroreinigung",         short: "Tägliche Unterhaltsreinigung für Unternehmen",   icon: "briefcase" },
  { slug: "sanitaerreinigung",     title: "Sanitärreinigung",      short: "Hygienisch sauber bis ins Detail",               icon: "droplet" },
  { slug: "wintergartenreinigung", title: "Wintergartenreinigung", short: "Glasdächer & Wintergärten — auch von außen",     icon: "sun" },
  { slug: "bauendreinigung",       title: "Bauendreinigung",       short: "Übergabefertig nach Neubau & Sanierung",         icon: "hammer" },
  { slug: "treppenhausreinigung",  title: "Treppenhausreinigung",  short: "Regelmäßig sauber für WEG & Vermieter",          icon: "stairs" },
  { slug: "industriereinigung",    title: "Industriereinigung",    short: "Hallen, Produktion, Logistik",                   icon: "factory" },
  { slug: "praxisreinigung",       title: "Praxisreinigung",       short: "Hygiene nach RKI-Standard",                      icon: "cross" },
  { slug: "hotelreinigung",        title: "Hotelreinigung",        short: "Zimmer- & Public-Area-Reinigung",                icon: "bed" },
  { slug: "teppichreinigung",      title: "Teppichreinigung",      short: "Tiefenreinigung & Fleckenentfernung",            icon: "rug" },
  { slug: "grundreinigung",        title: "Grundreinigung",        short: "Einmalige Intensiv-Reinigung",                   icon: "sparkles" }
] as const;
```

In Phase 1: Services nur als Übersichts-Cards rendern. KEINE eigenen Service-Pages — das ist Phase 2.

---

## 5. Design-System

### 5.1 Aesthetik-Richtung

**Refined, vertrauensvoll, premium — nicht „billiger Putztrupp".** Die Firma ist etabliert, hat 5 Mio. Versicherung, eigenes Logo mit Frankfurter Skyline. Das Design muss das transportieren: Klarheit, Solidität, Kompetenz. Keine Cleaning-Klischees (keine Schaumblasen-Icons, keine grellen Türkis-Töne).

### 5.2 Farbpalette (CSS-Variablen + Tailwind-Tokens)

```
--ig-ink:        #0B1B2B    /* fast schwarz, Hauptfarbe für Text + dunkle Sections */
--ig-deep:       #15324D    /* tief-marineblau, Headers, Trust */
--ig-accent:     #C8A24B    /* warmes Gold — Premium-Akzent, sparsam */
--ig-fog:        #F5F2EC    /* warmes Off-White, Sections-Hintergrund */
--ig-line:       #E5DFD3    /* subtile Trennlinien */
--ig-success:    #2F855A    /* Bestätigungen */
--ig-danger:     #C53030    /* Fehler */
```

Tailwind in `tailwind.config.mjs` erweitern um `colors.ig.{ink,deep,accent,fog,line,success,danger}`.

### 5.3 Typografie

- **Display/Headlines:** "Fraunces" (variable, von Google Fonts via `<link>` mit `font-display: swap`). Schwere 500-700, leichte negative Letter-Spacing bei H1/H2.
- **Body:** "Inter" → NEIN — zu generisch. Stattdessen **"Plus Jakarta Sans"** (Google Fonts, variable).
- Niemals System-Fonts. Niemals "Roboto".
- Font-Sizes: Tailwind-Defaults sind okay, aber H1 mobile 2.5rem / desktop 4.5rem mit `font-display: optional` Fallback.

### 5.4 Spacing & Layout

- **Container max-w:** 1200px, `mx-auto px-6 md:px-8`
- **Section-Padding:** `py-20 md:py-28`
- **Grid:** mobile-first immer, Desktop-Anpassungen via `md:` und `lg:`
- Generöser Whitespace. Keine vollgepackten Sections.

### 5.5 Komponenten-Details

- **Buttons:**
  - Primary: Solid Ink, weißer Text, hover: leichte Aufhellung + scale 1.02
  - Secondary: Outline Ink, hover: gefüllt
  - **CallButton:** Telefon-Icon links, "Jetzt anrufen" + Nummer, mobile = `tel:` Link, **klickbar als ganze Fläche**
  - **WhatsAppButton:** WhatsApp-Grün (#25D366), Icon, "WhatsApp"
- **Service-Cards:** Klare Borderless Cards mit subtilem Schatten beim Hover, Icon oben, Titel, Kurzbeschreibung
- **Form-Inputs:** Großzügiges Padding (`py-3.5 px-4`), Border `ig-line`, Focus-Ring `ig-deep`, kein border-radius über 6px

### 5.6 Motion (sparsam!)

- Page-Load: gestaffeltes Fade-Up der Hero-Elemente (CSS-only, `@keyframes` + `animation-delay`)
- Service-Cards: Scroll-Reveal mit `IntersectionObserver` (1 minimaler Vanilla-JS-Block, nicht mehr)
- Hover-States überall subtil — keine bouncenden Buttons

---

## 6. Sections der Landingpage (Reihenfolge auf `index.astro`)

1. **Header** — Logo links, rechts: Telefon (klickbar) + "Anfragen" CTA. Sticky on scroll, mit Backdrop-Blur.
2. **Hero** — H1: "Gebäudereinigung in Frankfurt — verlässlich, versichert, festgepreist." Sub: 1-2 Sätze. Zwei CTAs: "Jetzt anrufen" (primary) + "Anfrage senden" (secondary, scrollt zu Formular). Trust-Microcopy: "5 Mio. EUR versichert · Etabliert seit Jahren · Festpreise"
3. **TrustBar** — Schmaler Streifen: 4-5 Icons mit Texten ("5 Mio. EUR versichert", "Festpreise", "Schnelle Reaktionszeit", "Eigenes Team — keine Subunternehmer", "Großraum Frankfurt")
4. **Services** — Grid 2×6 (mobile 1 Spalte), alle 12 Services als Cards mit Icon + Titel + Kurzbeschreibung. **Hinweis im Untertitel:** "Sie finden Ihren Service nicht? Rufen Sie uns an — wir reinigen mehr als hier aufgelistet."
5. **WhyUs** — 3-4 Punkte warum Ideale: Erfahrung, Versicherung, Eigene Mitarbeiter (festangestellt, keine Subunternehmer), Festpreise/Transparenz. Mit echtem Team-Foto rechts/links (Platzhalter).
6. **ProcessSteps** — "So läuft's ab" in 4 Schritten: 1. Anfrage, 2. Kostenloses Vor-Ort-Gespräch, 3. Festpreis-Angebot, 4. Saubere Umsetzung.
7. **Testimonials** — 2-3 Kundenstimmen (Platzhalter mit klarem `TODO: echte Stimmen einsetzen` Kommentar).
8. **FAQ** — 6-8 Fragen mit `<details>` Tags (Standard-HTML, kein JS): "Wie schnell könnt ihr starten?", "Was kostet das?", "Habt ihr Versicherung?", "Sind Festpreise möglich?", "Reinigt ihr auch in Offenbach/Mainz/Wiesbaden?", "Wie lange gibt es die Firma?", "Welche Mittel werden verwendet?". **Wichtig: FAQ-Schema.org für Rich Snippets!**
9. **ContactForm** — siehe Abschnitt 8.
10. **FinalCTA** — Dunkle Section, "Bereit für saubere Räume?", großer Telefon-Button + WhatsApp-Button.
11. **Footer** — Kompakt: Firmenname, Adresse, Telefon, Mail, Links zu Impressum + Datenschutz, Copyright.

---

## 7. Tracking-Setup (das ist der entscheidende Teil)

### 7.1 Environment Variables

In `.env.example` (committed) — Dzemo füllt `.env` (NICHT committed) später:

```bash
PUBLIC_GTM_ID=GTM-XXXXXXX                  # später von Dzemo
PUBLIC_GA4_ID=G-XXXXXXXXXX                  # später von Dzemo
PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX          # später von Dzemo
PUBLIC_GOOGLE_ADS_CONV_PHONE=AW-XXX/yyy     # später
PUBLIC_GOOGLE_ADS_CONV_WHATSAPP=AW-XXX/zzz  # später
PUBLIC_GOOGLE_ADS_CONV_FORM=AW-XXX/aaa      # später
```

**Wichtig:** Astro liest `PUBLIC_*` Vars client-side via `import.meta.env.PUBLIC_*`. Im Code IMMER auf Existenz prüfen — wenn leer, Tag nicht rendern (kein leerer GTM-Container im DOM).

### 7.2 GTM-Integration (`src/components/tracking/GTM.astro`)

Standard GTM-Snippet — eingefügt direkt nach `<head>` öffnen. Nur rendern wenn `PUBLIC_GTM_ID` gesetzt.

`GTMNoScript.astro` als erstes Element nach `<body>` — Noscript-Fallback.

### 7.3 Consent Mode v2 (`src/components/tracking/ConsentMode.astro`)

**WICHTIG:** Dieser Block muss VOR dem GTM-Script laufen. Default-State: alle Categories DENIED.

```html
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'granted',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);
</script>
```

### 7.4 CookieBanner (`src/components/layout/CookieBanner.astro`)

Minimaler eigener Cookie-Banner, kein Drittanbieter:
- Erscheint unten als Sticky-Bar bei erstem Besuch
- 3 Buttons: "Alle akzeptieren", "Nur notwendige", "Einstellungen"
- Bei Einstellungen: Modal mit Toggles für Marketing/Analytics
- Speichert Entscheidung in `localStorage` (`ig_consent`) — 12 Monate gültig
- Bei Accept: `gtag('consent', 'update', {...})` mit `granted` für ad_storage, analytics_storage, ad_user_data, ad_personalization
- Bei Reject: nichts updaten, bleibt denied (Modeling übernimmt Google)
- **Link "Cookie-Einstellungen" im Footer öffnet Modal erneut**

Muss auf Mobile als unterer Sticky-Bar funktionieren, nicht den ganzen Screen blocken.

### 7.5 Event-Tracking via `src/lib/tracking.ts`

```ts
export function trackEvent(name: string, params: Record<string, any> = {}) {
  if (typeof window === 'undefined' || !window.dataLayer) return;
  window.dataLayer.push({ event: name, ...params });
}

export function trackPhoneClick(value = 50) {
  trackEvent('phone_click', {
    conversion_value: value,
    currency: 'EUR'
  });
}

export function trackWhatsAppClick(value = 40) {
  trackEvent('whatsapp_click', {
    conversion_value: value,
    currency: 'EUR'
  });
}

export function trackFormSubmit(value = 80) {
  trackEvent('form_submit', {
    conversion_value: value,
    currency: 'EUR'
  });
}

export function trackScrollDepth(percent: 25 | 50 | 75 | 100) {
  trackEvent('scroll_depth', { percent });
}
```

**Werte (Conversion-Werte sind Leitwerte für Smart Bidding — nicht echte Euro!):**
- Phone Click: 50 EUR
- WhatsApp Click: 40 EUR (etwas niedriger weil Lead-Qualität meist leicht niedriger als Anruf)
- Form Submit: 80 EUR (höchste Intent — Mensch hat sich Mühe gemacht)

**Anbindung:**
- `CallButton` + `WhatsAppButton`: `onclick` triggert Track-Funktion
- `ContactForm`: `success`-Page (`/danke`) triggert `trackFormSubmit()` im `<script>` der Danke-Seite (so messen wir nur echte Submits, keine Validation-Fails)
- Scroll-Depth: minimaler IntersectionObserver auf 4 unsichtbare Marker-Divs

### 7.6 Enhanced Conversions (Vorbereitung)

In `/danke.astro`: Auf der Server-Side via Netlify Functions (oder erstmal nur Client-Side über URL-Parameter), die gehashten Daten an gtag übergeben:

```html
<!-- Auf /danke.astro -->
<script is:inline>
  // Dzemo aktiviert das später, wenn Enhanced Conversions in Google Ads konfiguriert ist
  // Form-Daten kommen via URL-Param hierher (Netlify Forms erlaubt success-URL mit Query)
  // gtag('event', 'conversion', {
  //   'send_to': 'AW-XXX/form_conv',
  //   'user_data': { 'email_address': hashedEmail, 'phone_number': hashedPhone }
  // });
</script>
```

Hinweise im Code als Kommentare lassen — Dzemo aktiviert das in 2-4 Wochen wenn die Ads-Konten stehen.

---

## 8. Netlify Forms — Kontaktformular

### 8.1 Felder

- Name (required)
- E-Mail (required, type=email)
- Telefon (required)
- Art der Anfrage (Select: Glasreinigung, Fassadenreinigung, Büroreinigung, Sanitärreinigung, Wintergartenreinigung, Bauendreinigung, Sonstiges)
- Objekt-Größe in m² (optional, type=number)
- Nachricht (textarea, optional)
- Honeypot (`bot-field`, unsichtbar)

### 8.2 HTML

Wichtige Attribute:
```html
<form
  name="frankfurt-anfrage"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  action="/danke"
>
  <input type="hidden" name="form-name" value="frankfurt-anfrage" />
  <p class="hidden">
    <label>Nicht ausfüllen: <input name="bot-field" /></label>
  </p>
  <!-- ... echte Felder ... -->
</form>
```

**Hidden Field für Source-Tracking** (wichtig für später wenn andere Sites dazukommen):
```html
<input type="hidden" name="source" value="frankfurt-landingpage" />
```

### 8.3 Netlify-Konfiguration

In `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/whatsapp"
  to = "https://wa.me/4916095854323?text=Hallo%2C%20ich%20interessiere%20mich%20für%20Ihre%20Reinigungsleistungen%20in%20Frankfurt."
  status = 302
  force = true

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 8.4 Mail-Notification

In Astro selbst nichts zu tun — Dzemo aktiviert nach Deploy in Netlify-Dashboard:
**Forms → frankfurt-anfrage → Settings → Form notifications → Email notification → `info@ideale-gebaeudereinigung.de`**

Diese Anweisung als Kommentar in `ContactForm.astro` oder als Punkt im `README.md` festhalten.

---

## 9. SEO-Setup

### 9.1 Meta-Tags in `BaseLayout.astro`

- `<title>`: "Gebäudereinigung Frankfurt | Ideale Gebäudereinigung — versichert, festgepreist"
- `<meta description>`: aus `SITE.description`
- `<link rel="canonical">`: dynamisch aus `Astro.url.pathname`
- Open Graph: og:title, og:description, og:image, og:url, og:type=website, og:locale=de_DE
- Twitter Card: summary_large_image
- `<meta name="robots" content="index, follow">`
- `<link rel="alternate" hreflang="de" />`

### 9.2 Schema.org JSON-LD

**Drei separate Schema-Blocks** in `BaseLayout.astro` einbauen (`<script type="application/ld+json">`):

1. **LocalBusiness / CleaningService** mit allen Daten (Adresse, Tel, Mail, Öffnungszeiten, areaServed: "Frankfurt am Main", priceRange, aggregateRating wenn vorhanden — sonst weglassen, niemals erfinden)
2. **Service** schema für die Hauptservices (Glasreinigung, Fassadenreinigung, Büroreinigung)
3. **FAQPage** schema für die FAQ-Section (aus `src/data/faq.ts` dynamisch befüllt)

### 9.3 Sitemap

Via `@astrojs/sitemap` (in `astro.config.mjs` konfigurieren mit `site: 'https://frankfurt.ideale-gebaeudereinigung.de'`).

### 9.4 `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://frankfurt.ideale-gebaeudereinigung.de/sitemap-index.xml
```

---

## 10. Impressum & Datenschutz

### 10.1 `/impressum.astro` — Inhalte

Pflichtangaben nach § 5 TMG:

```
Angaben gemäß § 5 TMG

Ideale Gebäudereinigung
Inhaber: Jamal Jaafar
Kasseler Landstraße 80a
37081 Göttingen

Kontakt:
Telefon: 0551 50316976
E-Mail: info@ideale-gebaeudereinigung.de

Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
DE361832333

Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
Jamal Jaafar (Anschrift wie oben)

Berufshaftpflichtversicherung:
Betriebshaftpflicht bis 5 Mio. EUR
(Versicherer + Geltungsbereich — TODO: Dzemo liefert nach)

Streitschlichtung:
Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
https://ec.europa.eu/consumers/odr
Unsere E-Mail-Adresse finden Sie oben im Impressum.

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucher­schlichtungsstelle teilzunehmen.
```

### 10.2 `/datenschutz.astro` — Inhalte

Vollständige DSGVO-Erklärung. Mindestabschnitte:

1. Verantwortlicher (Jamal Jaafar + Kontakt)
2. Allgemeine Hinweise & Pflichtinformationen
3. Hosting (Netlify, USA, mit Hinweis auf Standard-Vertragsklauseln)
4. Datenerfassung auf dieser Website (Server-Logs, Cookies, Kontaktformular)
5. Analyse-Tools & Werbung:
   - Google Tag Manager
   - Google Analytics 4
   - Google Ads (inkl. Conversion-Tracking & Remarketing)
   - Consent Mode v2 Hinweis
6. Plugins und Tools (Google Fonts — lokal hosten ODER mit Hinweis)
7. Eigene Dienste (Kontaktformular, Newsletter — falls nicht: weglassen)
8. Rechte der betroffenen Person (Auskunft, Berichtigung, Löschung, Widerspruch)
9. Beschwerderecht bei Aufsichtsbehörde

**WICHTIG:** Diese Texte als Basisversion einbauen, aber **deutlichen Kommentar** im Code:

```
<!--
  ACHTUNG DZEMO:
  Diese Datenschutzerklärung ist eine Basis-Vorlage.
  Vor Go-Live: Lass sie von einem Anwalt prüfen ODER
  nutze einen Generator wie e-recht24.de / datenschutz-generator.de
  und ersetze diesen Inhalt.
  Risiko sonst: Abmahnung.
-->
```

Google Fonts: am sichersten **lokal hosten** (in `public/fonts/`) statt vom Google CDN — dann braucht es im Datenschutz nicht erwähnt zu werden. Bitte umsetzen: Fonts in `public/fonts/` ablegen und `@font-face` in `global.css` definieren.

---

## 11. Deployment-Workflow

### 11.1 GitHub-Setup

Nach `git init` + initialem Commit:

1. Dzemo legt leeres GitHub-Repo `ideale-frankfurt` (private) an
2. `git remote add origin git@github.com:<USER>/ideale-frankfurt.git`
3. `git push -u origin main`

### 11.2 Netlify-Verbindung

1. Netlify Dashboard → "Add new site" → "Import an existing project"
2. GitHub OAuth, Repo `ideale-frankfurt` auswählen
3. Build settings: Astro wird auto-erkannt
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Environment Variables: alle aus `.env.example` als Platzhalter eintragen (Werte später ergänzen)
5. Deploy → erste Test-URL wird generiert (`xyz-123.netlify.app`)

### 11.3 Custom Domain bei IONOS

1. Netlify: Site settings → Domain management → Add custom domain → `frankfurt.ideale-gebaeudereinigung.de`
2. IONOS: Domains → ideale-gebaeudereinigung.de → DNS-Einstellungen
3. Subdomain anlegen:
   - Typ: `CNAME`
   - Host/Name: `frankfurt`
   - Wert/Ziel: `<netlify-site>.netlify.app`
   - TTL: 3600
4. Zurück in Netlify: "Verify DNS configuration" → Wait 5-30 Min
5. SSL: Netlify aktiviert automatisch Let's Encrypt-Zertifikat

**Wichtig:** Die Haupt-Shopify-Site bleibt unangetastet. Nur die Subdomain wird auf Netlify gezeigt.

### 11.4 Nach erstem erfolgreichen Deploy

In Netlify-Dashboard:
- **Forms** → frankfurt-anfrage prüfen (sollte automatisch erkannt sein nach erstem Submit)
- **Form notifications** → Email an `info@ideale-gebaeudereinigung.de` einrichten
- **Asset optimization** prüfen (sollte default an sein)

---

## 12. Tasks-Reihenfolge für Claude Code

Bitte **in genau dieser Reihenfolge** abarbeiten. Nach jedem Schritt: `git add . && git commit -m "..."`. Nach jedem dritten Schritt: `npm run build` zum Type-Check.

1. ✅ Astro + Tailwind + Sitemap initialisieren (Abschnitt 4.1)
2. ✅ `.gitignore`, `.nvmrc`, `README.md` aufsetzen
3. ✅ Git Init + ersten Commit
4. ✅ `tailwind.config.mjs` mit Brand-Tokens (Abschnitt 5.2)
5. ✅ `global.css` + Font-Loading (Fraunces + Plus Jakarta Sans, lokal in `public/fonts/`)
6. ✅ `src/data/site.ts`, `src/data/services.ts`, `src/data/faq.ts`
7. ✅ `BaseLayout.astro` mit Meta-Tags + Schema.org (Abschnitt 9)
8. ✅ Tracking-Komponenten: `ConsentMode.astro`, `GTM.astro`, `GTMNoScript.astro` (Abschnitt 7)
9. ✅ `src/lib/tracking.ts` mit Event-Helpers (Abschnitt 7.5)
10. ✅ UI-Komponenten: `Button.astro`, `CallButton.astro`, `WhatsAppButton.astro`, `ServiceCard.astro`
11. ✅ Layout: `Header.astro`, `Footer.astro`
12. ✅ `CookieBanner.astro` (Abschnitt 7.4) — Astro-Komponente mit minimalem Inline-JS
13. ✅ Sections: `Hero`, `TrustBar`, `Services`, `WhyUs`, `ProcessSteps`, `Testimonials`, `FAQ`, `ContactForm`, `FinalCTA`
14. ✅ Seiten: `index.astro` (alle Sections kombinieren), `danke.astro`, `404.astro`
15. ✅ `impressum.astro` + `datenschutz.astro` (Abschnitt 10)
16. ✅ `netlify.toml`, `public/robots.txt`, Favicon-Placeholder
17. ✅ Lighthouse-Audit lokal (`npm run build && npm run preview`, dann via Chrome DevTools): Performance 90+, SEO 100, Accessibility 95+, Best Practices 100
18. ✅ Final-Commit + Push zu GitHub
19. ✅ Schritt-für-Schritt-Anleitung in README für Netlify-Connect (Abschnitt 11.2)

---

## 13. Wichtige Regeln für die Umsetzung

1. **Keine erfundenen Daten.** Wenn etwas fehlt → Platzhalter mit klarem `TODO: Dzemo` Kommentar.
2. **Keine Cookie-/Tracking-Werte hardcoden.** Alles via `import.meta.env.PUBLIC_*`.
3. **Mobile-First.** Jede Section zuerst für 375px Breite designen, dann hochskalieren.
4. **0 JS by default.** Hydration nur wo nötig (Cookie-Banner, Tracking-Calls). Keine Client-side React/Vue-Komponenten.
5. **Echte Semantik.** `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`. Eine `<h1>` pro Seite. Saubere `<label>` für jedes Form-Field.
6. **Accessibility:** Color-Contrast WCAG AA mindestens. `aria-label` an Icon-Buttons. Focus-States sichtbar.
7. **Performance:**
   - LCP-Element ist Hero-Headline (Text) — kein Hero-Bild als LCP weil dann muss das Bild preloaded werden
   - Wenn doch Hero-Bild: `loading="eager"` + `fetchpriority="high"`
   - Alle anderen Bilder: `loading="lazy"`
   - Fonts: `font-display: swap`
   - Keine unbenutzten CSS-Files, keine unbenutzten npm-Pakete
8. **Bilder-Platzhalter:** In `public/images/` einfache farbige SVG-Placeholder mit Service-Namen draufgeschrieben. Dzemo tauscht später echte Fotos rein.
9. **Commit-Hygiene:** Conventional Commits (`feat:`, `fix:`, `chore:`, `style:`, `refactor:`). Atomic — eine Sache pro Commit.

---

## 14. Pre-Go-Live-Checkliste (für Dzemo, nicht für Claude Code)

Nach Fertigstellung durch Claude Code, vor Go-Live:

- [ ] `.env` mit echten Tracking-IDs befüllt (GTM, GA4, Google Ads)
- [ ] GTM-Container aufgesetzt mit Tags für:
  - GA4 Configuration
  - GA4 Events: phone_click, whatsapp_click, form_submit, scroll_depth
  - Google Ads Conversion: Phone Click → Wert 50 EUR
  - Google Ads Conversion: WhatsApp Click → Wert 40 EUR
  - Google Ads Conversion: Form Submit → Wert 80 EUR
  - Google Ads Remarketing Tag
- [ ] Consent Mode v2 in GTM auf "Advanced" Settings — Trigger an Cookie-Banner
- [ ] Echte Team-Fotos in `public/images/` ersetzen (5-8 Stück)
- [ ] Logo-SVG in `public/favicon.svg` und `public/images/logo.svg`
- [ ] OG-Image in `public/og-image.jpg` (1200×630px, mit Logo + Frankfurt + Hauptbotschaft)
- [ ] Datenschutzerklärung rechtlich geprüft (Anwalt oder Generator)
- [ ] Testimonials: echte Kundenstimmen oder Section entfernen (keine erfundenen!)
- [ ] Versicherungsangabe im Impressum vervollständigen (Versicherer + Geltungsbereich)
- [ ] Netlify Forms Notification an `info@ideale-gebaeudereinigung.de` aktiviert
- [ ] Testanfrage über Formular gesendet → kommt Mail an?
- [ ] Mobile-Test auf echtem iPhone + Android
- [ ] Lighthouse-Mobile 90+ in allen Kategorien
- [ ] DNS-Eintrag bei IONOS für `frankfurt.ideale-gebaeudereinigung.de` gesetzt
- [ ] SSL-Zertifikat in Netlify aktiv
- [ ] Search Console: Frankfurt-Subdomain als zusätzliche Property hinzufügen
- [ ] Sitemap in Search Console eingereicht: `frankfurt.ideale-gebaeudereinigung.de/sitemap-index.xml`
- [ ] Google Business Profile für Frankfurt anlegen (separat zu Göttingen)
- [ ] Google Ads Kampagne aufsetzen mit Frankfurt-Landingpage als Ziel

---

## 15. Was NICHT in Phase 1 gehört (für später, Phase 2)

Damit Claude Code nicht über das Ziel hinausschießt:

- ❌ Einzelne Service-Landingpages (`/glasreinigung`, `/fassadenreinigung` etc.) — kommt in Phase 2
- ❌ Lokale Landingpages (Offenbach, Mainz, Wiesbaden, Darmstadt etc.) — Phase 3
- ❌ Preisrechner mit Mengen-Eingabe — Phase 2
- ❌ Online-Buchungskalender — vielleicht nie nötig
- ❌ Blog/Magazin — Phase 3
- ❌ Multi-Language (DE/EN) — vielleicht später
- ❌ 301-Redirects von Shopify-URLs — kommt mit Hauptseiten-Relaunch in Phase 2

**Ende des Briefings.**

---

## Anhang: Erste Worte an Claude Code

Wenn du (Dzemo) Claude Code startest, kopier das gesamte Briefing rein und dann schreib davor:

```
Bitte lies dieses Briefing vollständig durch.
Stelle dann eventuelle Rückfragen — gerade was Tracking, Design-Tokens
oder DSGVO-Punkte angeht.
Wenn alles klar ist: Beginne mit Schritt 1 aus Abschnitt 12 und
arbeite die Liste vollständig ab. Nach jedem Hauptschritt:
git add . && git commit mit Conventional-Commit-Message.
Am Ende: kurze Zusammenfassung was fertig ist + Liste der TODOs für mich.
```

Viel Erfolg, Dzemo. 🚀
