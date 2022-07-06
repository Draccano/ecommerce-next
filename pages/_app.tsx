import { AppProps } from "next/app";
import { FC } from 'react';
interface LayoutProps {
  children: React.ReactNode;
}

// no operation function
const Noop: FC<LayoutProps> = ({children }) => <>{children}</>

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<LayoutProps> } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp