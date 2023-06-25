import React, { useEffect, useState } from 'react';
import SelectInput, { OptionType } from '../../core/inputs/SelectInput';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import CustomerService from '../../services/CustomerService';
import { showError } from '../../utils/helpers';

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
  const [addresses, setAddresses] = useState<AddressType[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<OptionType>();
  const customerId = useSelector((state) => _.get(state, 'userReducer.id', ''));

  const formattedAddresses = addresses.map((address) => {
    return {
      label: address.name,
      value: address.id
    };
  });

  useEffect(() => {
    CustomerService.getAddresses(customerId)
      .then((response) => {
        const { addresses } = response.data.data;
        setAddresses(addresses);
      })
      .catch((error) => showError(error.reponse.data.message));
  }, []);

  useEffect(() => {
    if (selectedAddress) {
      const selected = addresses.find((address) => address.id === selectedAddress.value);
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
