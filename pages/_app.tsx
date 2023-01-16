import type { AppProps } from 'next/app'
import { Header } from '../components'
import { ThemeProvider } from '../theme'

import '@fontsource/sora/variable.css'
import '@code-hike/mdx/dist/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        {/*<Header />*/}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
