import React, { type ReactNode } from 'react'

export type WindowFrameProps = {
  children: ReactNode
  withHeader?: boolean
  leftAction?: () => void
  rightAction?: () => void
}

const WindowFrame = ({ withHeader = false, children, leftAction, rightAction }: WindowFrameProps) => {
  return (
    <div
      className="before:full relative rounded-lg border-lg bg-white
      before:absolute before:top-6 before:left-6 before:z-[-1] before:h-full before:w-full before:rounded-lg
      before:border-lg before:bg-primary-500"
    >
      {withHeader && (
        <header className="flex h-12 justify-end rounded-t border-b bg-neutral-200 px-6">
          <div className="flex items-center space-x-4">
            <button onClick={leftAction} className="h-6 w-6 rounded-full border bg-white" />
            <button onClick={rightAction} className="h-6 w-6 rounded-full border bg-white" />
          </div>
        </header>
      )}
      <div className="p-8 xl:p-16">{children}</div>
    </div>
  )
}

export default WindowFrame
