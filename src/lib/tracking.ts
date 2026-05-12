type EventParams = Record<string, unknown>;

export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}

export function trackPhoneClick(value = 50): void {
  trackEvent('phone_click', {
    conversion_value: value,
    currency: 'EUR',
  });
}

export function trackWhatsAppClick(value = 40): void {
  trackEvent('whatsapp_click', {
    conversion_value: value,
    currency: 'EUR',
  });
}

export function trackFormSubmit(value = 80): void {
  trackEvent('form_submit', {
    conversion_value: value,
    currency: 'EUR',
  });
}

export function trackScrollDepth(percent: 25 | 50 | 75 | 100): void {
  trackEvent('scroll_depth', { percent });
}
