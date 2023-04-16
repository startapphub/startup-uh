import { type FC } from 'react';
import { Notification } from 'iconsax-react';

const Header: FC = () => (
  <header className="flex w-full py-3 h-auto justify-end">
    <Notification size="32" color="#d9e3f0" />
  </header>
);

export default Header;
