import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#070F21',
          light: '#F5F5F5'
        },
        title: '#9E9FA6'
      },
      keyframes: {
        'bounce-top': {
          '0%': {
            transform: 'translateY(-45px)',
            'animation-timing-function': 'ease-in',
            opacity: '1'
          },
          '20%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out'
          },
          '40%': {
            transform: 'translateY(-24px)',
            'animation-timing-function': 'ease-in'
          },
          '60%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out'
          },
          '80%': {
            transform: 'translateY(-12px)',
            'animation-timing-function': 'ease-in'
          },
          '100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out'
          }
        }
      },
      animation: {
        'bounce-top': 'bounce-top 0.9s ease-in-out forwards'
      }
    }
  },
  plugins: []
}

module.exports = {
  ...config,
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.section-container': {
          'max-width': '100rem',
          'margin-left': 'auto',
          'margin-right': 'auto',
          width: '90%'
        },
        '.section': {
          'padding-top': '7rem',
          'padding-bottom': '7rem'
        }
      }
      addUtilities(newUtilities)
    })
  ]
}

export default config
