import React from 'react'
import styled, { x } from '@xstyled/styled-components'
import Link from 'next/link'
import { CustomLink } from '../atoms'

export type HeaderProps = {}

const SiteHeaderContainer = styled.div`
  width: full;
  padding: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > * + * {
    margin-top: 2;
  }
  @media (min-width: xl) {
    padding: 0;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: left;
    & > * + * {
      margin-top: 0;
      border-left: 4px solid;
    }
  }
`

const Header = ({}: HeaderProps) => {
  return (
    <x.header
      w="full"
      borderBottomWidth
      bg="white"
      position={{ _: 'static', xl: 'fixed' }}
      top={0}
      left={0}
      zIndex={{ xl: 50 }}
    >
      <SiteHeaderContainer>
        <x.div display="flex" alignItems="center" pr={4}>
          <x.span fontSize={{ _: '2xl', xl: 'default' }} fontWeight="bold" flexGrow={{ xl: 1 }} p={{ xl: '4 6' }}>
            <Link href="/">_ Bit Technical</Link>
          </x.span>
        </x.div>
        <x.h2 fontSize={{ _: 'xl', xl: 'default' }} fontWeight="bold" flexGrow={{ xl: 1 }} p={{ xl: '4 6' }}>
          Software related color commentary, in black & white
        </x.h2>
        <x.div p={{ xl: '4 6' }} flexGrow={{ xl: 1 }} fontSize={{ xl: 'default' }} lineHeight={{ xl: 4 }}>
          This garden is maintained by{` `}
          <CustomLink isExternal href="https://bitwhys.com">
            Bitwhys
          </CustomLink>
        </x.div>
        <x.button py={4} px={6} lineHeight={4}>
          Login
        </x.button>
      </SiteHeaderContainer>
    </x.header>
  )
}

export default Header
