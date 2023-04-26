import { type NextPage } from 'next';
import Layout from 'components/Layout';
import {
  Header,
  DasborKegiatan,
  MenuCepat,
  TopEvent,
  TopIdeabox,
} from 'components/Home';

const Home: NextPage = () => (
  <Layout title="Startup Unhas" isBottomNav>
    <Header />
    <DasborKegiatan />
    <MenuCepat />
    <TopEvent />
    <TopIdeabox />
  </Layout>
);

export default Home;
