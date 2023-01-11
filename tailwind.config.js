const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['pages/**/*.tsx', 'components/**/*.tsx'],
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
        neutral: {
          50: '#f2f2f2',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d',
        },
      },
      fontFamily: {
        heading: ['Bluu Next', ...fontFamily.sans],
        sans: ['var(--font-lexend)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
