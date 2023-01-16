import { Decorator } from '@storybook/react'
import { Preflight, ThemeProvider as XStyledThemeProvider } from '@xstyled/styled-components'
import { GlobalStyles, theme } from './index'
import { type ReactNode } from 'react'

export interface ThemeProviderProps {
  children: ReactNode
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <>
    {/*// @ts-ignore*/}
    <XStyledThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyles />
      {children}
    </XStyledThemeProvider>
  </>
)
