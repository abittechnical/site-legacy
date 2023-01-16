import type { AppProps } from 'next/app'
import { Sora } from '@next/font/google'
import { Header } from '../components'
import { ThemeProvider } from '../theme'

import '@code-hike/mdx/dist/index.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sora.style.fontFamily};
        }
      `}</style>
      <ThemeProvider>
        <div className={`${sora.variable}`}>
          <Header />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}
