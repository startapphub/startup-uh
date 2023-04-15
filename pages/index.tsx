import { type NextPage } from 'next';
import {
  Header,
  DasborKegiatan,
  MenuCepat,
  TopEvent,
} from '../components/Home';
import BottomNav from 'components/BottomNav';

const Home: NextPage = () => (
  <>
    <Header />
    <main className="mx-5">
      <DasborKegiatan />
      <MenuCepat />
      <TopEvent />
    </main>
    <BottomNav />
  </>
);

export default Home;
