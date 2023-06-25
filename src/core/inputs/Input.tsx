import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';

type InputProps = {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  error?: string;
  value: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  height: string;
  required?: boolean;
  bgColor?: string;
};

const Input = ({
  label = '',
  placeholder,
  onChange,
  error,
  value,
  type = "text",
  className,
  disabled = false,
  height,
  required = false,
  bgColor = "bg-gray-200",
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prevState) => !prevState);

  return (
    <div className={className}>
      {label && (
        <div className="font-semibold flex items-center">
          <div className="text-cyan-900">{label}</div>
          {type === 'password' && (
            <FaEye className="ml-3 cursor-pointer hover:opacity-70 text-cyan-900" onClick={togglePassword} />
          )}
          {required && <div className="text-red-600 ml-1">*</div>}
        </div>
      )}
      <input
        disabled={disabled}
        value={value || ''}
        type={showPassword ? 'text' : type}
        className={`${height} ${bgColor} ${disabled && "bg-gray-300"} appearance-none  relative block w-full mt-2 px-3 py-2 border border-gray-200 shadow-sm placeholder-gray-500 rounded text-gray-900 focus:outline-none focus:ring-cyan-900 focus:border-cyan-900 focus:z-10 text-xs`}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
      {error && <div className={`text-xs text-red-400 pt-2 ${!error && 'pb-4'}`}>{error}</div>}
    </div>
  );
};

export default Input;
