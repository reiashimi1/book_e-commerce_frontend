import React from 'react';
import _ from 'lodash';

type SearchInputProps = {
  onChange: (text: string) => void;
  placeholder: string;
};

const SearchInput = ({ onChange, placeholder }: SearchInputProps) => {
  const onKeyUp = _.debounce((e: React.KeyboardEvent<HTMLInputElement>) => {
    onChange((e.target as HTMLInputElement).value.toLowerCase().trim() || "");
  }, 400);

  return (
    <input
      className="border border-cyan-700 h-9 px-3 rounded-lg text-sm bg-white hover:bg-gray-50 focus:bg-white focus:border-gray-300 focus:shadow-md focus:outline-1 focus:ring-primary-200 focus:outline-none w-full"
      placeholder={placeholder}
      onKeyUp={onKeyUp}
    />
  );
};

export default SearchInput;
