import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import WindowPane from './WindowPane'
import useMouseDown from './useMouseDown'

const useStyles = makeStyles((theme) =>
  createStyles({
    horizontal: {
      display: 'flex',
      flexFlow: 'row',
      overflowY: 'auto',
    },
    vertical: {
      display: 'flex',
      flexFlow: 'column',
      height: '100%'
    },
    dividerHorizontal: {
      cursor: 'col-resize',
      border: '2px solid black',
    },
    dividerVertical: {
      cursor: 'row-resize',
      width: '100%',
      border: '2px solid black',
    }
  }),
);


interface WindowSplitterProps {
  orientation: string
  className?: string,
  style?: { [key: string]: string | number }
}

interface ObjectMap {
  [key: string]: string
}

const classNames = (...args: any[]) => args.filter(Boolean).join(' ')

const WindowSplitter: React.FC<WindowSplitterProps> = ({
  children,
  className,
  style,
  orientation,
}) => {
  const onMouseDown = useMouseDown({ orientation })
  const classes: ObjectMap = useStyles()
  const dividerClassName = orientation === 'horizontal' ? classes.dividerHorizontal : classes.dividerVertical
  return (
    <div
      className={classNames(classes[orientation], className)}
      style={style}
    >
      {React.Children.map(children, (child: React.ReactNode) => (
        <WindowPane
          child={child}
          onMouseDown={onMouseDown}
          dividerClassName={dividerClassName}
        />
      ))}
    </div>
  )
}

export default WindowSplitter
