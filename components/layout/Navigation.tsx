import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export type NavigationProps = {}

export interface NavigationLinkProps {
  text: string
  href: string
}
const NavigationLink = ({ text, href }: NavigationLinkProps) => <Link href={href}>{text}</Link>
const Navigation = ({}: NavigationProps) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#guidelines">Guidelines</a>
        </li>
        <li>
          <a href="#contribute">Contribute</a>
        </li>
        <li>
          <a href="#files">Files</a>
        </li>
        <li>
          <a href="/theme/">All Styles</a>
        </li>
        <li>
          <a href="/resources/">Resources</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
