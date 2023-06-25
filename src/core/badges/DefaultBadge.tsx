import React from 'react';

export type BadgeProps = {
  text: string,
  textColor?: string,
  bgColor?: string
}

const DefaultBadge = ({ text, textColor, bgColor }: BadgeProps) => {
  return (
    <span
      className={`inline-flex 
      items-center 
      justify-center 
      px-2 
      py-1 
      text-xs 
      font-medium 
      leading-4 
      rounded-full 
      w-30 
      ${textColor || 'text-gray-800'}
      ${bgColor || 'bg-gray-200'}
    `}>
      {text}
    </span>
  );
};

export default DefaultBadge;
