import React from 'react';
import DefaultButton from './DefaultButton';
import { FaSpinner } from 'react-icons/fa';

type buttonType = {
  onClick: () => void;
  disabled?: boolean;
  loading: boolean;
  label: string;
  className?: string;
};

const SubmitButton = ({
  onClick,
  disabled = false,
  loading,
  label,
  className,
  ...props
}: buttonType) => {
  return (
    <DefaultButton
      className={className}
      disabled={disabled || loading}
      label={
        <div className="flex items-center">
          {loading && <FaSpinner className="animate-spin mr-1" />}
          {label}
        </div>
      }
      onClick={onClick}
      {...props}
    />
  );
};

export default SubmitButton;
