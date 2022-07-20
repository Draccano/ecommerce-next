import cn from 'classnames'
import React, { ReactNode } from 'react'
import s from './Grid.module.css'

interface Props {
  children: ReactNode[]
  layout?: 'A' | 'B'
}

const Grid: React.FC<Props> = ({ children, layout = 'A' }) => {
  const rootClassName = cn(s.root, {
    [s.layoutA]: layout === 'A',
    [s.layoutB]: layout === 'B',
  })
  return <div className={rootClassName}>{children}</div>
}
export default Grid
