import type { ReactNode } from 'react'
import Link from 'next/link'

export type CustomLinkProps = {
  children: string
  as?: string
  className?: string
  href: string
}

const CustomLink = ({ as, children, href }: CustomLinkProps) => (
  <Link href={href} as={as} className="border-b-2 font-semibold hover:border-b-4">
    {children}
  </Link>
)

export default CustomLink
