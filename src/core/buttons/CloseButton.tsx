import React from 'react';
import { FaTimes } from 'react-icons/fa';
import DefaultButton from "./DefaultButton";

type buttonProps = {
  onClick: () => void;
  label: string;
}

const CloseButton = ({ onClick, label }: buttonProps) => {
  return (
    <DefaultButton
      label={
        <div className="flex items-center">
          <FaTimes className="mr-1" />
          {label}
        </div>
      }
      bgColor="bg-gray-200"
      bgColorHover="hover:bg-gray-300"
      textColor="text-gray-800"
      onClick={onClick}
    />
  );
};

export default CloseButton;
