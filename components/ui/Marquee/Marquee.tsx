import { FC, ReactNode } from 'react'
import style from './Marquee.module.css'

interface Props {
  children: ReactNode[]
}

const Marquee: FC<Props> = ({ children }) => {
  return <div className={style.root}>{children}</div>
}

export default Marquee
