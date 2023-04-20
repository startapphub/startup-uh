import { type FC } from 'react';

const TextBadge: FC<{ color: string; text: any }> = ({ color, text }) => (
  <span
    className={`text-${color}-500 bg-${color}-400 text-xs font-semibold bg-opacity-10 rounded-full px-2 py-1`}
  >
    {text}
  </span>
);

export default TextBadge;
