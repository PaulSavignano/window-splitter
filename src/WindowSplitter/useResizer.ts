import {
  useMemo,
  useRef,
  useState,
} from 'react'

interface State {
  flex?: string,
  height?: number,
  minWidth?: number
  width?: number,
}

const initialState: State = {
  flex: '1 1 auto'
}

interface UseResizer {
  onMouseDown: Function
}

const useResizer = ({ onMouseDown }: UseResizer) => {
  const [previousElementStyle, setPreviousElementStyle] = useState(initialState)
  const resizerRef = useRef<HTMLDivElement>(null)
  const previousElementRef = useRef<HTMLDivElement>(null)
  return useMemo(() => ({
    previousElementStyle,
    previousElementRef,
    resizerElementProps: {
      ref: resizerRef,
      onMouseDown: () => onMouseDown({ resizerRef, previousElementRef, setPreviousElementStyle }),
    },
  }), [onMouseDown, previousElementStyle])
}

export default useResizer