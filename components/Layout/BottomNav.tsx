import { type FC, ReactNode } from 'react';
import { Home2, Calendar, People, Profile } from 'iconsax-react';

type NavItemProps = {
  icon: ReactNode;
  isActive?: boolean;
};

const NavItem: FC<NavItemProps> = ({ icon, isActive = false }) => (
  <div
    className={`flex flex-col items-center justify-center gap-1 ${
      !isActive && 'opacity-40'
    }`}
  >
    {icon}
    {isActive && <span className="bg-gray-50 w-1 h-1 rounded-full" />}
  </div>
);

const BottomNav: FC = () => (
  <div className="fixed bottom-0 w-full h-16">
    <div className="absolute box-light-gray rounded-3xl" />
    <div className="relative z-10">
      <div className="flex justify-around items-start h-full px-4 py-2 text-gray-50">
        <NavItem
          icon={<Home2 className="text-white" size={30} variant="Bulk" />}
          isActive
        />
        <NavItem icon={<Calendar size={30} variant="Linear" />} />
        <NavItem icon={<People size={30} variant="Linear" />} />
        <NavItem icon={<Profile size={30} variant="Linear" />} />
      </div>
    </div>
  </div>
);

export default BottomNav;
