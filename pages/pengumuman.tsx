import { type NextPage } from 'next';
import Layout from 'components/Layout';

const Pengumuman: NextPage = () => (
  <Layout title="Pengumuman Startup Unhas" isBottomNav={false}>
    <header className="flex flex-col items-center justify-center w-full h-[30vh] bg-[#F9F9F9]">
      <h1 className="text-3xl font-bold text-gray-800">Pengumuman</h1>
    </header>
    <div className="flex flex-col items-center justify-center w-full h-[70vh] bg-[#F9F9F9]">
      <h1 className="text-3xl font-bold text-gray-800">Coming Soon</h1>
    </div>
  </Layout>
);

export default Pengumuman;
