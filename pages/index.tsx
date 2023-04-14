import { type NextPage } from 'next';
import Header from '../components/Home/Header';
import DasborKegiatan from '../components/Home/DasborKegiatan';
import MenuCepat from 'components/Home/MenuCepat';

const Home: NextPage = () => (
  <>
    <Header />
    <main className="mx-5">
      <DasborKegiatan />
      <MenuCepat />
    </main>
  </>
);

export default Home;
