import React from 'react';
import DefaultBadge from './DefaultBadge';
import { BadgeProps } from "./DefaultBadge";

const CanceledBadge = ({ text }: BadgeProps) => {
  return <DefaultBadge text={text} bgColor="text-red-800" textColor="bg-red-100" />;
};

export default CanceledBadge;
