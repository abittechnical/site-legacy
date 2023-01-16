import { createGlobalStyle, defaultTheme, th } from '@xstyled/styled-components'
export { ThemeProvider } from './ThemeProvider'

export const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    'primary-50': '#fbffdd',
    'primary-100': '#f5ffaf',
    'primary-200': '#eefe7f',
    'primary-300': '#e7fe4d',
    'primary-400': '#e0fe1f',
    'primary-500': '#c7e409',
    'primary-600': '#9bb201',
    'primary-700': '#6e7f00',
    'primary-800': '#414c00',
    'primary-900': '#161a00',
    'accent-50': '#fff1da',
    'accent-100': '#ffd6ae',
    'accent-200': '#ffbd7d',
    'accent-300': '#ffa24c',
    'accent-400': '#ff871a',
    'accent-500': '#e66e00',
    'accent-600': '#b45500',
    'accent-700': '#813c00',
    'accent-800': '#4f2400',
    'accent-900': '#200900',
    'gray-50': '#f9fafb',
    'gray-100': '#f3f4f6',
    'gray-200': '#e5e7eb',
    'gray-300': '#d1d5db',
    'gray-400': '#9ca3af',
    'gray-500': '#6b7280',
    'gray-600': '#4b5563',
    'gray-700': '#374151',
    'gray-800': '#1f2937',
    'gray-900': '#111827',
  },
  shadows: {
    default: `4px 4px 0 0 #111827`,
    lg: `12px 12px 0 0 #111827`,
  },
  borderWidths: {
    default: '4px',
    lg: '6px',
  },
  radii: {
    default: '8px',
    full: '9999px',
    lg: '16px',
  },
  sizes: {
    ...defaultTheme.sizes,
    frame: '800px',
  },
}

export const GlobalStyles = createGlobalStyle`
 :root {
   --background-primary: #000;
   --background-secondary: #fff;
 }
 body {
   font-size: lg;
   background-image: -webkit-repeating-radial-gradient(
     center center,
     var(--background-primary),
     var(--background-primary) 1px,
     var(--background-secondary) 1px,
     var(--background-secondary) 100%
   );
   background-size: 8px 8px;
   @media (min-width: xl) {
     padding-top: 32;
   }
 }
`
