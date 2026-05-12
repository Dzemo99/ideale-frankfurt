export const SITE = {
  name: 'Ideale Gebäudereinigung',
  legalName: 'Ideale Gebäudereinigung — Inh. Jamal Jaafar',
  domain: 'frankfurt.ideale-gebaeudereinigung.de',
  url: 'https://frankfurt.ideale-gebaeudereinigung.de',
  description:
    'Professionelle Gebäudereinigung in Frankfurt am Main. Glasreinigung, Fassadenreinigung, Büroreinigung. 5 Mio. EUR versichert. Festpreise. Jetzt unverbindlich anfragen.',
  founder: 'Jamal Jaafar',
  email: 'info@ideale-gebaeudereinigung.de',
  phone: '+4955150316976',
  phoneDisplay: '0551 50316976',
  phoneLink: 'tel:+4955150316976',
  whatsapp: '+4916095854323',
  whatsappDisplay: '+49 160 95854323',
  whatsappLink:
    'https://wa.me/4916095854323?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Reinigungsleistungen%20in%20Frankfurt.',
  address: {
    street: 'Kasseler Landstraße 80a',
    zip: '37081',
    city: 'Göttingen',
    country: 'DE',
  },
  ustId: 'DE361832333',
  insurance: 'Betriebshaftpflicht bis 5 Mio. EUR',
  serviceArea: 'Frankfurt am Main und Großraum Rhein-Main',
  serviceAreaNote:
    'Wir bedienen den Großraum Frankfurt von unserem Hauptsitz in Göttingen aus. Vor-Ort-Termine selbstverständlich.',
  openingHours: 'Mo-Fr 07:00-18:00, Sa nach Absprache',
  socials: {
    // TODO: Dzemo — Social-Profile-URLs einsetzen sobald angelegt
    // facebook: '',
    // instagram: '',
  },
} as const;

export const TRACKING_VALUES = {
  phoneClick: 50,
  whatsappClick: 40,
  formSubmit: 80,
  currency: 'EUR',
} as const;
