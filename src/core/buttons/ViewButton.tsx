import React from 'react';
import { FaEye } from 'react-icons/fa';
import DefaultButton from './DefaultButton';

type buttonType = {
  onClick: () => void;
  label: string;
  displayIcon?: boolean;
  className?: string;
  disabled?: boolean;
};

const ViewButton = ({ onClick, label, className, displayIcon = true, disabled = false }: buttonType) => {
  return (
    <DefaultButton
      label={
        <div className="flex items-center">
          {displayIcon && <FaEye className="mr-1" />}
          {label}
        </div>
      }
      className={className}
      bgColor="bg-none"
      bgColorHover="bg-none"
      textColor="text-cyan-700 hover:text-cyan-900"
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export default ViewButton;
