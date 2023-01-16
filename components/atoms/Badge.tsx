import React from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'

const badgeContainer = cva(
  'inline-flex items-center justify-center cursor-pointer rounded-full border bg-neutral-400',
  {
    variants: {
      size: {
        lg: ['px-7', 'py-5', 'shadow  space-x-4'],
        sm: ['px-4', 'py-2', 'shadow-sm space-x-2'],
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
)

export type BadgeVariantProps = VariantProps<typeof badgeContainer>

export interface BadgeProps {
  text: string
  link?: string
  size?: 'sm' | 'lg'
}
const Badge = ({ link, text, size }: BadgeProps) => {
  return (
    <div className={badgeContainer({ size })}>
      <span
        className={clsx('inline-block rounded-full border bg-white', size === 'lg' ? 'h-8 w-8 ' : 'h-6 w-6')}
      ></span>
      <span
        className={clsx('uppercase tracking-wide', size === 'lg' ? 'text-2xl font-semibold' : 'text-lg font-medium ')}
      >
        {text}
      </span>
    </div>
  )
}

export default Badge
