import { type NextPage } from 'next';
import Layout from 'components/Layout';
import { Header, DasborKegiatan, MenuCepat, TopEvent } from 'components/Home';

const Home: NextPage = () => (
  <Layout title="Startup Unhas" isBottomNav>
    <Header />
    <DasborKegiatan />
    <MenuCepat />
    <TopEvent />
  </Layout>
);

export default Home;
