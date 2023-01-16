import { Sora } from '@next/font/google'
import localFont from '@next/font/local'
import type { AppProps } from 'next/app'

import '@code-hike/mdx/dist/index.css'
import '../styles/globals.css'
import { Header } from '../components'
//
// const bodyFont = Sora({
//   subsets: ['latin'],
//   variable: '--font-body',
// })
const headingFont = localFont({ src: '../styles/fonts/SunnyCatalina_Bold.otf', variable: '--font-heading' })
const bodyFont = localFont({
  src: [
    {
      path: '../styles/fonts/Sncrypt/Sncrypt-Light.woff2',
      weight: '300',
    },
    {
      path: '../styles/fonts/Sncrypt/Sncrypt-Regular.woff2',
      weight: '400',
    },
    {
      path: '../styles/fonts/Sncrypt/Sncrypt-Regular-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../styles/fonts/Sncrypt/Sncrypt-Medium.woff2',
      weight: '500',
    },
    {
      path: '../styles/fonts/Sncrypt/Sncrypt-Semibold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-body',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-body: ${bodyFont.style.fontFamily};
          --font-heading: ${headingFont.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
