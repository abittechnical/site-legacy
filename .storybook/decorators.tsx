import type { Decorator } from '@storybook/react'
import { Sora } from '@next/font/google'
import { Preflight, ThemeProvider } from '@xstyled/styled-components'
import { GlobalStyles, theme } from '../theme'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

export const withSoraFont: Decorator = Story => (
  <>
    <div className={`${sora.variable} font-sans`}>
      <Story />
    </div>
  </>
)

export const withXStyled: Decorator = Story => (
  <>
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  </>
)
