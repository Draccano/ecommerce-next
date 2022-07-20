import React, { ReactNode } from 'react'
import s from './Grid.module.css'

const Grid: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={s.root}>{children}</div>
}
export default Grid
