/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#196ee6',
        'background-light': '#f8f9fa',
        'background-dark': '#0f141a',
        charcoal: '#1a1a1a',
        muted: '#64748b',
        'brand-primary': '#196ee6',
        'brand-secondary': '#0d47a1',
        'neutral-background': '#f8f9fa',
        'neutral-surface': '#ffffff',
        'text-primary': '#1a1a1a',
        'text-secondary': '#64748b',
        'text-onPrimary': '#ffffff',
        'home-bg': 'rgb(237, 237, 237)',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      spacing: {
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        sm: '4px',
        md: '8px',
        lg: '0.5rem',
        xl: '0.75rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': {
            height: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#e2e8f0',
            borderRadius: '10px',
          },
        },
        '.dark .custom-scrollbar': {
          '&::-webkit-scrollbar-thumb': {
            background: '#334155',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
