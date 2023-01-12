import { Sora } from '@next/font/google'
import type { AppProps } from 'next/app'

import '@code-hike/mdx/dist/index.css'
import '../styles/globals.css'
import { Header } from '../components'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${sora.variable} font-sans`}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
