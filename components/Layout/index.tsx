import type { FC } from 'react';
import Head from 'next/head';
import BottomNav from './BottomNav';

type LayoutProps = {
  title: string;
  children: React.ReactNode;
  description?: string;
  isBottomNav?: boolean;
};

const Layout: FC<LayoutProps> = ({
  title,
  children,
  description = 'Aplikasi Startup Unhas',
  isBottomNav = true,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="px-[5vw]">{children}</main>
      {isBottomNav && <BottomNav />}
    </>
  );
};

export default Layout;
