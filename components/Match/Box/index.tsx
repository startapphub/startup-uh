import { type FC } from 'react';
import Image from 'next/image';
import TextBadge from 'components/children/TextBadge';
import { Briefcase, Messages3 } from 'iconsax-react';

const Box: FC = () => (
  <div className="flex flex-col items-center justify-center box-light-gray w-full h-fit rounded-3xl mt-5 p-4">
    <div className="flex justify-start gap-2 items-center w-full">
      <Image
        src="/assets/match/img-profile.png"
        className="rounded-full"
        width={90}
        height={90}
        alt="Photo Profile"
      />
      <div className="flex flex-col items-start justify-items-start gap-2">
        <div className="flex flex-col items-start justify-start leading-[10px]">
          <p className="font-bold text-gray-50 text-base text-start">
            Elon Musk
          </p>
          <p className="font-semibold text-gray-50 text-xs text-start">
            The Father of Doge | CEO
          </p>
        </div>
        <div className="flex items-center">
          <Image
            src="/assets/match/icons/linkedin.svg"
            width={20}
            height={20}
            alt="Social Media"
          />
          <Image
            src="/assets/match/icons/ig.svg"
            width={20}
            height={20}
            alt="Social Media"
          />
          <Image
            src="/assets/match/icons/twitter.svg"
            width={20}
            height={20}
            alt="Social Media"
          />
        </div>
      </div>
    </div>
    <div className="flex items-center w-full my-2 gap-2">
      <TextBadge color="bg-blue-500" text="Memeable" />
      <TextBadge color="bg-blue-500" text="Programming" />
      <TextBadge color="bg-blue-500" text="Leadership" />
    </div>
    <p className="font-medium text-gray-50 text-sm text-start py-1 leading-4">
      {`I'm interested in things that change the world or that affect the future and wondrous, new technology where you see it, and you're like, 'Wow, how did that even happen? How is that possible?'`}
    </p>
    <div className="flex items-center justify-between w-full mt-2">
      <div className="flex items-center gap-1 bg-gray-400 bg-opacity-10 rounded-full px-2 py-1">
        <Briefcase size={20} color="#fff" variant="Bulk" />
        <span className="font-semibold text-gray-50 text-sm">Porto</span>
      </div>
      <div className="flex items-center gap-1 bg-gray-400 bg-opacity-10 rounded-full px-2 py-1">
        <Messages3 size={20} color="#fff" variant="Bulk" />
        <span className="font-semibold text-gray-50 text-sm">Diskusi</span>
      </div>
    </div>
  </div>
);

export default Box;
