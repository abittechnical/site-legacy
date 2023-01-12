import { Lexend } from '@next/font/google'
import type { AppProps } from 'next/app'

import '@code-hike/mdx/dist/index.css'
import '@fontsource/bluu-next'
import '../styles/globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${lexend.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
