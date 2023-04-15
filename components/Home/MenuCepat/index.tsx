import { type FC } from 'react';
import MenuItem from './MenuItem';

const MenuCepat: FC = () => (
  <div className="flex flex-col gap-4 w-full my-6">
    <p className="text-gray-50 font-extrabold text-lg px-2">Menu Cepat</p>
    <div className="grid place-items-center grid-cols-4 gap-4">
      <MenuItem src="/assets/menuCepat/ic-pengumuman.png" text="Pengumuman" />
      <MenuItem src="/assets/menuCepat/ic-event.png" text="Event" />
      <MenuItem src="/assets/menuCepat/ic-program.png" text="Program" />
      <MenuItem src="/assets/menuCepat/ic-match.png" text="Match" />
      <MenuItem src="/assets/menuCepat/ic-startup.png" text="Startup" />
      <MenuItem src="/assets/menuCepat/ic-akselerasi.png" text="Akselerasi" />
      <MenuItem src="/assets/menuCepat/ic-ideabox.png" text="Ideabox" />
    </div>
  </div>
);

export default MenuCepat;
