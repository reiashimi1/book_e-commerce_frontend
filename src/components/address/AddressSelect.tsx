import React, { useEffect, useState } from 'react';
import SelectInput, { OptionType } from '../../core/inputs/SelectInput';

const demoAddresses = [
  { name: 'Address 1', id: '1', city: 'San Francisco', country: 'USA', description: 'adadasda' },
  { name: 'Address 2', id: '2', city: 'San Francisco', country: 'USA', description: 'adadasda' }
];

type AddressSelectType = {
  onChange: (option: AddressType | undefined) => void;
};

export type AddressType = {
  id: string;
  name: string;
  description: string;
  city: string;
  country: string;
};

const AddressSelect = ({ onChange }: AddressSelectType) => {
  const [addresses, setAddresses] = useState<AddressType[]>(demoAddresses);
  const [selectedAddress, setSelectedAddress] = useState<OptionType>();

  const formattedAddresses = addresses.map((address) => {
    return {
      label: address.name,
      value: address.id
    };
  });

  useEffect(() => {
    if (selectedAddress) {
      const selected = addresses.find((address) => (address.id === selectedAddress.value));
      if (selected) {
        onChange(selected);
      }
    } else {
      onChange(undefined);
    }
  }, [selectedAddress]);

  return (
    <SelectInput
      label="Select existing address"
      placeholder="Choose"
      value={selectedAddress}
      options={formattedAddresses}
      handleInputChange={setSelectedAddress}
    />
  );
};

export default AddressSelect;
