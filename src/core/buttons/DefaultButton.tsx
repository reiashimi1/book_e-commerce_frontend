import React from 'react';

type buttonType = {
  label: JSX.Element;
  onClick: () => void;
  bgColor?: string;
  bgColorHover?: string;
  textColor?: string;
  disabled: boolean;
  className?: string
};

const DefaultButton = ({
  label,
  onClick,
  bgColor,
  bgColorHover,
  textColor,
  disabled = false,
  className = "w-full",
  ...props
}: buttonType) => {
  const defaultClassName = `group relative flex justify-center border border-transparent font-medium rounded-md ${
    textColor || 'text-white'
  } py-2 px-4 text-sm  ${className}
  ${disabled ? 'bg-gray-400' : bgColor || 'bg-cyan-800'}  ${
    disabled ? '' : bgColorHover || 'hover:bg-cyan-900'
  } focus:outline-none`;

  return (
    <button onClick={onClick} className={defaultClassName} disabled={disabled} {...props}>
      {label}
    </button>
  );
};

export default DefaultButton;
