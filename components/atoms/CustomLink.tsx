import type { ReactNode } from 'react'
import Link from 'next/link'
import { hr } from 'date-fns/locale'

export type CustomLinkProps = {
  children: string
  as?: string
  className?: string
  href: string
  isExternal?: boolean
}

const CustomLink = ({ as, children, href, isExternal }: CustomLinkProps) =>
  isExternal ? (
    <a href={href} className="custom-link">
      {children}
    </a>
  ) : (
    <Link href={href} as={as} className="custom-link">
      {children}
    </Link>
  )

export default CustomLink
