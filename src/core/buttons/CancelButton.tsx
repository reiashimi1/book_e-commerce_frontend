import React, { ReactNode } from 'react';
import { FaTrash } from 'react-icons/fa';
import DefaultButton from './DefaultButton';

type buttonType = {
  onClick: () => void;
  label: ReactNode;
  className: string;
  showIcon?: boolean;
};

const CancelButton = ({ onClick, label, className, showIcon = true }: buttonType) => {
  return (
    <DefaultButton
      label={
        <div className="flex items-center">
          {showIcon && <FaTrash className="mr-2" />}
          {label}
        </div>
      }
      bgColor="bg-red-100"
      bgColorHover="hover:bg-red-200"
      textColor="text-red-700"
      onClick={onClick}
      className={className}
    />
  );
};

export default CancelButton;
