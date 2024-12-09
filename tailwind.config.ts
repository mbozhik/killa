const plugin = require('tailwindcss/plugin')

import type {Config} from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  darkMode: ['class'],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontWeight: {
        book: '450',
      },
      colors: {
        custom: {
          black: '#0C0C0C',
          primary: '#286056',
          f3: '#F3E6D6',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
        buttonheartbeat: {
          '0%': {
            'box-shadow': '0 0 0 0 #286056',
            transform: 'scale(1)',
          },
          '50%': {
            'box-shadow': '0 0 0 7px #28605630',
            transform: 'scale(1.02)',
          },
          '100%': {
            'box-shadow': '0 0 0 0 #2860560',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out',
      },
    },
    screens: {
      xl: {max: '1536px'},
      lg: {max: '1024px'},
      sm: {max: '768px'},
      xs: {max: '350px'},
    },
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({s: (value) => ({width: value, height: value})}, {values: api.theme('width')})
    }),
    [require('tailwindcss-animate')],
  ],
} satisfies Config

export default config
