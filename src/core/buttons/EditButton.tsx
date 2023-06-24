import React, { ReactNode } from "react";
import { FaPencilAlt } from 'react-icons/fa';
import DefaultButton from './DefaultButton';

type buttonType = {
  onClick: () => void;
  label: ReactNode;
  className: string;
};

const EditButton = ({ onClick, label, className }: buttonType) => {
  return (
    <DefaultButton
      label={
        <div className="flex items-center">
          <FaPencilAlt className="mr-2"/>
          {label}
        </div>
      }
      bgColor="bg-emerald-100"
      bgColorHover="hover:bg-emerald-200"
      textColor="text-emerald-700"
      onClick={onClick}
      className={className}
    />
  );
};

export default EditButton;
