import React, { type FC, ReactHTML } from 'react';

interface TextBadgeProps extends ReactHTML {
  color: string;
  text: any;
  className: string;
}

const TextBadge: FC<TextBadgeProps> = ({ color, text, className }) => (
  <span
    className={
      className +
      `text-${color}-500 bg-${color}-400 text-xs font-semibold bg-opacity-10 rounded-full px-2 py-1`
    }
  >
    {text}
  </span>
);

export default TextBadge;
