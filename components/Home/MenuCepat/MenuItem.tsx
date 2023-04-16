import { type FC } from 'react';
import MenuIcon from './MenuIcon';
import Link from 'next/link';

type MenuItemProps = {
  src: string;
  text: string;
};

const MenuItem: FC<MenuItemProps> = ({ src = '', text = '' }) => (
  <Link href={text.toLowerCase()} className="grid place-items-center gap-1">
    <MenuIcon src={src} />
    <p className="text-gray-50 text-xs text-center font-semibold">{text}</p>
  </Link>
);

export default MenuItem;
