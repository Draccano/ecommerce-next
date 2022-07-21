import cn from 'classnames'
import { FC, ReactNode } from 'react'
import ReactFastMarquee from 'react-fast-marquee'
import style from './Marquee.module.css'
interface Props {
  children: ReactNode[]
  direction?: 'left' | 'right'
  variant?: 'primary' | 'secondary'
  gradient?: boolean
}

const Marquee: FC<Props> = ({
  children,
  direction = 'left',
  variant = 'primary',
  gradient = false,
}) => {
  const rootClassName = cn(style.root, {
    [style.secondary]: variant === 'secondary',
  })
  return (
    <div className={rootClassName}>
      <ReactFastMarquee
        speed={50}
        gradient={gradient}
        direction={direction}
        loop={0}
        play={true}
      >
        <div className={style.container}>{children}</div>
      </ReactFastMarquee>
    </div>
  )
}

export default Marquee
