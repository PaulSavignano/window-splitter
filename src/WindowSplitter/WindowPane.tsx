import React from 'react'

import useResizer from './useResizer'

interface WindowProps {
  child: React.ReactNode
  onMouseDown: Function
  dividerClassName: string
}

const Window: React.FC<WindowProps> = ({ child, onMouseDown, dividerClassName }) => {
  const { resizerElementProps, previousElementStyle, previousElementRef } = useResizer({ onMouseDown })
  const Child = React.cloneElement(child as React.ReactElement<any>, { ref: previousElementRef, style: previousElementStyle })
  return (
    <>
      {Child}
      <div {...resizerElementProps} role="separator" className={dividerClassName} />
    </>
  )
}

export default Window