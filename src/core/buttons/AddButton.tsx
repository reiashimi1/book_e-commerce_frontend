import React, { ReactNode } from "react";
import { FaPlus } from "react-icons/fa";
import DefaultButton from './DefaultButton';

type buttonType = {
  onClick: () => void;
  label: ReactNode;
  displayIcon?: boolean;
  className?: string;
  disabled?: boolean;
};

const AddButton = ({
  onClick,
  label,
  className,
  displayIcon = true,
  disabled = false
}: buttonType) => {
  return (
    <DefaultButton
      label={
        <div className="flex items-center">
          {displayIcon && <FaPlus className="mr-1" />}
          {label}
        </div>
      }
      className={className}
      textColor="text-white"
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export default AddButton;
