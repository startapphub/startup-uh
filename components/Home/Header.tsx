import { type FC } from 'react';
import { Notification } from 'iconsax-react';

const Header: FC = () => (
  <header>
    <div className="flex w-full py-3 h-auto justify-end">
      <Notification size="32" color="#d9e3f0" />
    </div>
  </header>
);

export default Header;
