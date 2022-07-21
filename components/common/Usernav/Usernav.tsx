import { Bag as Cart, Heart } from '@components/icons'
import Link from 'next/link'
import { FC } from 'react'
import style from './Usernav.module.css'

const Usernav: FC = () => {
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <Cart />
        </li>
        <li className={style.item}>
          <Link href="/">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Usernav
