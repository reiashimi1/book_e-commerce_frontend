import React from 'react';
import DefaultBadge from './DefaultBadge';
import { BadgeProps } from "./DefaultBadge";

const PendingBadge = ({ text }: BadgeProps) => {
  return <DefaultBadge text={text} bgColor="text-yellow-800" textColor="bg-yellow-100" />;
};

export default PendingBadge;
