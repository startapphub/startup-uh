import { type FC } from 'react';

const TextBadge: FC<{ color: string; text: any }> = ({ color, text }) => (
  <span
    className={`${color} text-xs font-semibold text-gray-50 bg-opacity-10 rounded-full px-2 py-1`}
  >
    {text}
  </span>
);

export default TextBadge;
