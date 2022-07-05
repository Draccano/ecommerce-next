
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}
 

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className='layout'>{children}</div>;
};

export default Layout