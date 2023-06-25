import React from 'react';
import DefaultBadge from './DefaultBadge';
import { BadgeProps } from "./DefaultBadge";

const ApprovedBadge = ({ text }: BadgeProps) => {
  return <DefaultBadge text={text} bgColor="text-emerald-800" textColor="bg-emerald-100" />;
};

export default ApprovedBadge;
