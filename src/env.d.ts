/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID?: string;
  readonly PUBLIC_GA4_ID?: string;
  readonly PUBLIC_GOOGLE_ADS_ID?: string;
  readonly PUBLIC_GOOGLE_ADS_CONV_PHONE?: string;
  readonly PUBLIC_GOOGLE_ADS_CONV_WHATSAPP?: string;
  readonly PUBLIC_GOOGLE_ADS_CONV_FORM?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer: any[];
}
