import { Lexend } from '@next/font/google'
import type { AppProps } from 'next/app'

import '@fontsource/bluu-next'
import '../styles/globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
})

console.log(lexend.variable)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${lexend.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
