Lies die CLAUDE.md als Kontext. Bitte führe folgende Änderungen an der bestehenden Next.js 14 Site durch, um ein absolutes "Tier-1" Premium-Design (vergleichbar mit Stripe/Apple) zu erreichen:

1. FARBSCHEMA & TYPOGRAFIE (Modern & High-End):
- Primärfarbe: Tiefes Schwarz/sehr dunkles Grau (#0a0a0a) für Hero und Hauptsections.
- Text auf dunklem Grund: Klares Weiß (#ffffff) für Headlines, weiches Grau (#a1a1aa) für Subtexte.
- Akzentfarbe: Modernes Smaragdgrün (#10b981) für primäre CTAs, Hover-States und Highlights.
- Helle Sections: Sehr helles Grau (#f9fafb) mit dunkler Schrift (#111111).
- Sekundäre Akzente: Gold (#C8A24B) nur äußerst sparsam für Premium-Trust-Elemente einsetzen.
- Typografie: Nutze einen sauberen Sans-Serif-Font mit engem Tracking für Headlines (-tracking-tight) und entspanntem Line-Height für Fließtexte.
- Passe alle Tailwind-Tokens in der tailwind.config.mjs und die CSS-Variablen in der global.css an. Update auch das Cookie-Banner in diesem Farbschema.

2. HERO-BEREICH KOMPLETT NEU (Conversion-Optimiert):
- Setze auf einen tiefdunklen Hintergrund (nutze subtile Mesh-Gradients oder ein Radial-Glow im Hintergrund für mehr Tiefe, keine platten Farben). Text muss IMMER perfekt lesbar sein.
- Layout: Split-Screen. Links die Value Proposition, rechts das Formular.
- Links: Große, weiße Headline, darunter lesbarer Subtext. Binde Trust-Badges minimalistisch ein.
- Rechts: Ein kompaktes "Glassmorphism" Schnellanfrage-Formular (Name, Email, Telefon, Nachricht, Submit-Button) mit weichen Rändern (rounded-2xl), leichtem Border (border-white/10) und Backdrop-Blur.
- Animation: Nutze Framer Motion, damit die Headline und das Formular beim Laden sanft von unten einfliegen (Fade-in-up, duration 0.6s, leichter Stagger-Effekt).

3. ANFRAGE-RECHNER (Premium UI Section):
- Platziere diese Section nach den Services. Nutze einen dunklen Hintergrund.
- Mache das UI interaktiv und modern, keine Standard-Dropdowns!
- Objektname (Text input).
- Quadratmeter: Nutze einen interaktiven UI-Slider (Range Input), der den Wert live anzeigt.
- Räume & WC/Sanitär: Plus/Minus Buttons im Apple-Style.
- Intervall: Gestalte dies als klickbare, stylische "Bento-Cards" (Einmalig, Wöchentlich, 2x wöchentlich, Monatlich), die bei Auswahl einen grünen Rahmen (#10b981) erhalten.
- Kontaktdaten: Name, Telefon, Email.
- Das Formular muss über Netlify Forms (name="frankfurt-rechner") laufen. Baue einen Loading-State für den Button ein.

4. FLOATING CONTACT WIDGET (Immer sichtbar):
- Sticky unten rechts, über allem liegend beim Scrollen (z-50).
- Runder, moderner WhatsApp-Button (#25D366) mit Icon. Link: https://wa.me/4916095854323?text=Hallo%2C%20ich%20interessiere%20mich%20fuer%20Ihre%20Reinigungsleistungen%20in%20Frankfurt.
- Hover-Effekt: Leicht größer (scale) mit weichem Schatten.
- Baue links daneben oder als kleinen Badge darüber die Telefonnummer (0551 50316976) als klickbaren Link ein.

5. GTM-ID & TRACKING EINSETZEN:
- In .env.example und layout.tsx (oder wo nötig): PUBLIC_GTM_ID=GTM-MQWKFKRP sauber implementieren.

6. DESIGN-REGELN FÜR DEN CODE:
- Nutze großzügigen Whitespace für ein Premium-Gefühl (z.B. py-24 oder py-32 für Sections).
- Service-Cards: Dunkler Hintergrund, sanfter Hover-Effekt (Translate-Y-1).
- Alles strictly Mobile-First, große Touch-Targets für alle interaktiven Elemente.
- Mache nach jeder größeren Section-Änderung einen sauberen git commit.
- Am Ende npm run build ausführen, um sicherzustellen, dass keine Fehler vorhanden sind, und gib mir eine Checkliste der erledigten Punkte.