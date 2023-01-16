import React, { type ReactNode } from 'react'
import styled, { x } from '@xstyled/styled-components'

export type WindowFrameProps = {
  children: ReactNode
  withHeader?: boolean
  leftAction?: () => void
  rightAction?: () => void
}

const Frame = styled.div`
  position: relative;
  border-radius: lg;
  border-width: lg;
  background: white;

  :before {
    position: absolute;
    content: '';
    width: full;
    height: full;
    top: 24px;
    left: 24px;
    background-color: primary-500;
    border-radius: lg;
    border-width: lg;
    z-index: -1;
  }
`

const WindowFrame = ({ children, withHeader = false }: WindowFrameProps) => {
  return (
    <Frame>
      {withHeader && (
        <x.header
          display="flex"
          h={12}
          justifyContent="flex-end"
          borderRadius="lg lg 0 0"
          borderBottomWidth
          bg="gray-200"
          px={6}
        >
          <x.div display="flex" alignItems="center" spaceX={4}>
            <x.span h={6} w={6} borderRadius="full" borderWidth bg="white" />
            <x.span h={6} w={6} borderRadius="full" borderWidth bg="white" />
          </x.div>
        </x.header>
      )}
      <x.div borderRadius={withHeader ? '0 0 lg lg' : 'lg'} bg="white" p={{ _: 8, xl: 16 }}>
        {children}
      </x.div>
    </Frame>
  )
}

export default WindowFrame
