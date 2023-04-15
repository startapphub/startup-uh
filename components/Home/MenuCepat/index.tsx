import { type FC } from 'react';
import Image from 'next/image';

const MenuIcon: FC<{ src?: string }> = ({ src = '' }) => (
  <div className="relative w-14 h-14">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FAFAFA] to-transparent opacity-[0.15] backdrop-blur backdrop-filter" />
    <div className="flex z-10">
      <Image
        className="absolute inset-0 m-auto h-auto"
        src={src}
        width={32}
        height={32}
        quality={100}
        alt="Menu Cepat"
        priority
      />
    </div>
  </div>
);

const MenuItem: FC<{ src?: string; text?: string }> = ({
  src = '',
  text = '',
}) => (
  <div className="grid place-items-center gap-1">
    <MenuIcon src={src} />
    <p className="text-gray-50 text-xs text-center font-semibold">{text}</p>
  </div>
);

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
