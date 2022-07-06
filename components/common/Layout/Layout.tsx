
import { FC } from "react";
import style from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}
 

const Layout: FC<LayoutProps> = ({ children }) => {
return <><main className={style.root}>{children}</main></>;
};

export default Layout