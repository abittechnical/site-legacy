import React from 'react'
import Link from 'next/link'
import { CustomLink } from '../atoms'

export type HeaderProps = {}

const Header = ({}: HeaderProps) => {
  return (
    <header className="w-full border-b bg-white xl:fixed xl:left-0 xl:top-0 xl:z-50">
      <div className="header-inner">
        <div className="flex items-center pr-4">
          <Link href="/" className="display-text text-2xl font-bold xl:flex-grow xl:py-4 xl:px-6">
            _ Bit Technical
          </Link>
        </div>
        <h2 className="text-xl font-bold xl:flex-grow xl:py-4 xl:px-6 xl:text-base">
          Software related color commentary, in black & white
        </h2>
        <div className="xl:flex-grow xl:py-4 xl:px-6 xl:text-base xl:leading-4">
          This garden is maintained by{` `}
          <CustomLink isExternal href="https://bitwhys.com">
            Bitwhys
          </CustomLink>
        </div>
        <div className="py-4 px-6 leading-4">
          <button className="display-text xl:text-3xl">Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header
