import { type NextPage } from 'next';
import {
  Header,
  DasborKegiatan,
  MenuCepat,
  TopEvent,
} from '../components/Home';

const Home: NextPage = () => (
  <>
    <Header />
    <main className="mx-5">
      <DasborKegiatan />
      <MenuCepat />
      <TopEvent />
    </main>
  </>
);

export default Home;
