import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { isArrayEmpty } from '../../utils/helpers';
import { RxCross1 } from 'react-icons/rx';

export type OptionType = {
  label: string;
  value: string;
};

type SelectInputProps = {
  label: string;
  placeholder: string;
  value: OptionType | undefined;
  options: OptionType[];
  handleInputChange: (option: OptionType | undefined) => void;
};

const SelectInput = ({
  label,
  placeholder,
  value,
  options = [],
  handleInputChange
}: SelectInputProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const removeOption = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    handleInputChange(undefined);
  };

  const optionsArray = () => {
    return isArrayEmpty(options) ? (
      <div className="text-sm p-2 italic">No Addresses saved</div>
    ) : (
      options.map((option, index) => (
        <div
          key={index}
          className="text-sm font-semibold hover:bg-gray-100 py-1 px-3 flex flex-row items-center cursor-pointer h-10 border-b"
          onClick={() => {
            handleInputChange(option);
          }}>
          {option.label}
        </div>
      ))
    );
  };

  const onClickOutsideListener = () => {
    setShowOptions(false);
    document.removeEventListener('click', onClickOutsideListener);
  };

  const addOnClickOutsideListener = () => {
    document.addEventListener('click', onClickOutsideListener);
  };

  return (
    <div className="w-full relative" onBlur={() => addOnClickOutsideListener()}>
      {label && <label className="text-cyan-900 font-semibold">{label}</label>}
      <button
        className={`
                    appearance-none relative block w-full px-1 py-3 border border-gray-200 placeholder-gray-400 rounded text-gray-900 sm:text-sm
                    w-full focus:outline-none items-center inline-flex justify-between mt-2 bg-white`}
        onClick={() => setShowOptions(!showOptions)}>
        <div className={`pl-1 text-sm ${value?.label && 'font-semibold'}`}>{value?.label || placeholder}</div>
        <div className="flex">
          <RxCross1 className="text-red-600 w-10" onClick={removeOption}/>
          <FaChevronDown className="text-black w-10" />
        </div>
      </button>
      <div
        className={`${
          !showOptions ? 'hidden' : ''
        } border-1 overflow-y-auto overflow-hidden w-full absolute z-50 bg-white max-h-80 mt-0.5`}>
        {optionsArray()}
      </div>
    </div>
  );
};

export default SelectInput;
