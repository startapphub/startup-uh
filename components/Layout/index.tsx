import type { FC } from 'react';
import Head from 'next/head';
import BottomNav from './BottomNav';
import Modal from 'components/children/Modal';

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
      <main className="px-[5vw]">
        {children} <Modal />
      </main>
      {isBottomNav && <BottomNav />}
    </>
  );
};

export default Layout;
