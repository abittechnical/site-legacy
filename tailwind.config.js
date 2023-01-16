const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['pages/**/*.tsx', 'components/**/*.tsx', 'stories/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbffdd',
          100: '#f5ffaf',
          200: '#eefe7f',
          300: '#e7fe4d',
          400: '#e0fe1f',
          500: '#c7e409',
          600: '#9bb201',
          700: '#6e7f00',
          800: '#414c00',
          900: '#161a00',
        },
        secondary: {
          50: '#fff1da',
          100: '#ffd6ae',
          200: '#ffbd7d',
          300: '#ffa24c',
          400: '#ff871a',
          500: '#e66e00',
          600: '#b45500',
          700: '#813c00',
          800: '#4f2400',
          900: '#200900',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', ...fontFamily.sans],
        heading: ['var(--font-heading)', ...fontFamily.sans],
      },
      boxShadow: {
        DEFAULT: '12px 12px 0 0 #111827',
        sm: '4px 4px 0 0 #111827',
      },
      borderWidth: {
        DEFAULT: '4px',
        lg: '6px',
      },
      borderColor: {
        DEFAULT: '#111827',
      },
      borderRadius: {
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.display-text': {
          fontFamily: theme('fontFamily.heading'),
          WebkitTextStroke: '1px black',
          color: 'white',
          textShadow: `3px 3px 0 #111827, -1px -1px 0 #111827, 1px -1px 0 #111827, -1px 1px 0 #111827, 1px 1px 0 #111827`,
        },
        '.header-inner': {
          width: '100%',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          '& > * + *': {
            marginTop: '0.5rem',
          },
          '@media (min-width: 1280px)': {
            padding: 0,
            justifyContent: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap',
            textAlign: 'left',
            '& > * + *': {
              marginTop: 0,
              borderLeft: '4px solid !important',
            },
          },
        },
      })
    }),
  ],
}
