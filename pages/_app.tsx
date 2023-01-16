import { Sora } from '@next/font/google'
import localFont from '@next/font/local'
import type { AppProps } from 'next/app'

import '@code-hike/mdx/dist/index.css'
import '../styles/globals.css'
import { Header } from '../components'

const bodyFont = Sora({
  subsets: ['latin'],
  variable: '--font-body',
})
const headingFont = localFont({ src: '../styles/fonts/SunnyCatalina_Bold.otf', variable: '--font-heading' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${bodyFont.variable} ${headingFont.variable} font-sans`}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
