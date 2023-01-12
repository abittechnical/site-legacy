import React, { type ReactNode } from 'react'

export type WindowFrameProps = {
  children: ReactNode
  withHeader?: boolean
  leftAction?: () => void
  rightAction?: () => void
}

const WindowFrame = ({ children, withHeader = false }: WindowFrameProps) => {
  return (
    <div className="border bg-white shadow">
      {withHeader && (
        <header className="flex h-12 justify-end border-b bg-neutral-200 px-6">
          <div className="flex items-center space-x-4">
            <span className="h-6 w-6 rounded-full border bg-white"></span>
            <span className="h-6 w-6 rounded-full border bg-white"></span>
          </div>
        </header>
      )}
      <div className="p-8 xl:p-16">{children}</div>
    </div>
  )
}

export default WindowFrame
