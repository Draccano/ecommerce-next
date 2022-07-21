import { Footer } from '@components/common'
import { FC } from 'react'
import style from './Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.root}>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
