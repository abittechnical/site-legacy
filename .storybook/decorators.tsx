import type { Decorator } from '@storybook/react'
import { Sora } from '@next/font/google'

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
