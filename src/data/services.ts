export type ServiceIcon =
  | 'window'
  | 'building'
  | 'briefcase'
  | 'droplet'
  | 'sun'
  | 'hammer'
  | 'stairs'
  | 'factory'
  | 'cross'
  | 'bed'
  | 'rug'
  | 'sparkles';

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: ServiceIcon;
};

export const SERVICES: readonly Service[] = [
  { slug: 'glasreinigung',         title: 'Glasreinigung',         short: 'Streifenfreie Fenster & Glasfassaden',         icon: 'window' },
  { slug: 'fassadenreinigung',     title: 'Fassadenreinigung',     short: 'Schonende Reinigung jeder Fassadenart',         icon: 'building' },
  { slug: 'bueroreinigung',        title: 'Büroreinigung',         short: 'Tägliche Unterhaltsreinigung für Unternehmen',   icon: 'briefcase' },
  { slug: 'sanitaerreinigung',     title: 'Sanitärreinigung',      short: 'Hygienisch sauber bis ins Detail',               icon: 'droplet' },
  { slug: 'wintergartenreinigung', title: 'Wintergartenreinigung', short: 'Glasdächer & Wintergärten — auch von außen',     icon: 'sun' },
  { slug: 'bauendreinigung',       title: 'Bauendreinigung',       short: 'Übergabefertig nach Neubau & Sanierung',         icon: 'hammer' },
  { slug: 'treppenhausreinigung',  title: 'Treppenhausreinigung',  short: 'Regelmäßig sauber für WEG & Vermieter',          icon: 'stairs' },
  { slug: 'industriereinigung',    title: 'Industriereinigung',    short: 'Hallen, Produktion, Logistik',                   icon: 'factory' },
  { slug: 'praxisreinigung',       title: 'Praxisreinigung',       short: 'Hygiene nach RKI-Standard',                      icon: 'cross' },
  { slug: 'hotelreinigung',        title: 'Hotelreinigung',        short: 'Zimmer- & Public-Area-Reinigung',                icon: 'bed' },
  { slug: 'teppichreinigung',      title: 'Teppichreinigung',      short: 'Tiefenreinigung & Fleckenentfernung',            icon: 'rug' },
  { slug: 'grundreinigung',        title: 'Grundreinigung',        short: 'Einmalige Intensiv-Reinigung',                   icon: 'sparkles' },
] as const;

export const FORM_SERVICE_OPTIONS = [
  'Glasreinigung',
  'Fassadenreinigung',
  'Büroreinigung',
  'Sanitärreinigung',
  'Wintergartenreinigung',
  'Bauendreinigung',
  'Treppenhausreinigung',
  'Industriereinigung',
  'Praxisreinigung',
  'Hotelreinigung',
  'Teppichreinigung',
  'Grundreinigung',
  'Sonstiges',
] as const;
