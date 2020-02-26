import {
  useCallback,
  useEffect,
  useRef,
} from 'react'

function useSplitter({ orientation = 'vertical' }) {
  const activePreviousElementRef = useRef<HTMLDivElement | null>(null)
  const activeResizerRef = useRef<HTMLDivElement | null>(null)
  const activeSetStyle = useRef(({ }) => { })
  const isResizing = useRef(false)

  const onMouseMove = useCallback((e) => {
    if (!isResizing.current || !activeResizerRef.current || !activePreviousElementRef.current) return
    switch (orientation) {
      case 'vertical': {
        const offsetTop = activePreviousElementRef.current.offsetTop
        const height = e.clientY - offsetTop
        return activeSetStyle.current({ height })
      }
      case 'horizontal': {
        const offsetLeft = activePreviousElementRef.current.offsetLeft
        const width = e.clientX - offsetLeft
        return activeSetStyle.current({ minWidth: width })
      }
      default:
        throw Error('Orientation not provided')
    }
  }, [orientation])

  const onMouseDown = useCallback(({ resizerRef, previousElementRef, setPreviousElementStyle }) => {
    activePreviousElementRef.current = previousElementRef.current
    activeResizerRef.current = resizerRef.current
    activeSetStyle.current = setPreviousElementStyle
    isResizing.current = true
  }, [])

  const onMouseUp = useCallback((e) => {
    activePreviousElementRef.current = null
    activeResizerRef.current = null
    activeSetStyle.current = ({ }) => { }
    isResizing.current = false
  }, [])

  useEffect(() => {
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  }, [onMouseMove, onMouseUp])

  return onMouseDown
}

export default useSplitter