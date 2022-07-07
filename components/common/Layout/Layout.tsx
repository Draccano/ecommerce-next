
import { FC } from "react";
import style from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}
 

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.root}>
      <main className='fit'>
        {children}
      </main>
    </div>
  );
};

export default Layout