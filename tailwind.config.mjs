import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ig: {
          ink: '#0B1B2B',
          deep: '#15324D',
          accent: '#C8A24B',
          fog: '#F5F2EC',
          line: '#E5DFD3',
          success: '#2F855A',
          danger: '#C53030',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3.25rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        'sm-tight': '4px',
        'md-tight': '6px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 27, 43, 0.04), 0 8px 24px -16px rgba(11, 27, 43, 0.18)',
        'card-hover': '0 2px 4px rgba(11, 27, 43, 0.06), 0 16px 40px -20px rgba(11, 27, 43, 0.28)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [forms],
};
