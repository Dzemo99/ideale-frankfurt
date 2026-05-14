import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ig: {
          // Dark surfaces
          ink: '#0a0a0a',          // primary dark (hero, dark sections, header)
          deep: '#111111',         // light-on-dark cards / hover step
          surface: '#171717',      // tertiary dark surface
          // Light surfaces
          fog: '#f9fafb',          // light section bg
          paper: '#ffffff',
          line: '#e5e7eb',         // subtle border on light
          lineDark: '#262626',     // subtle border on dark
          // Text
          dark: '#111111',         // body text on light
          mute: '#a1a1aa',         // secondary text on dark
          muteLight: '#52525b',    // secondary text on light
          // Accents
          emerald: '#10b981',
          emeraldDark: '#059669',
          emeraldGlow: '#34d399',
          accent: '#C8A24B',       // gold — used sparingly
          // Semantic
          success: '#10b981',
          danger: '#dc2626',
        },
      },
      fontFamily: {
        // Premium sans for both headlines + body (Stripe/Apple-style).
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'display-md': ['3.5rem', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        'display-lg': ['5rem', { lineHeight: '1', letterSpacing: '-0.045em' }],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        'sm-tight': '4px',
        'md-tight': '8px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 10, 10, 0.04), 0 8px 24px -16px rgba(10, 10, 10, 0.18)',
        'card-hover': '0 2px 4px rgba(10, 10, 10, 0.06), 0 16px 40px -20px rgba(10, 10, 10, 0.28)',
        glow: '0 0 0 1px rgba(16, 185, 129, 0.2), 0 8px 32px -8px rgba(16, 185, 129, 0.35)',
        whatsapp: '0 8px 24px -4px rgba(37, 211, 102, 0.45)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'mesh-hero':
          'radial-gradient(ellipse 65% 55% at 22% 35%, rgba(16, 185, 129, 0.28), transparent 65%), radial-gradient(ellipse 55% 50% at 82% 75%, rgba(16, 185, 129, 0.18), transparent 65%), radial-gradient(ellipse 70% 50% at 50% 110%, rgba(200, 162, 75, 0.10), transparent 70%)',
        'mesh-rechner':
          'radial-gradient(ellipse 70% 60% at 80% 20%, rgba(16, 185, 129, 0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(16, 185, 129, 0.06), transparent 60%)',
      },
    },
  },
  plugins: [forms],
};
