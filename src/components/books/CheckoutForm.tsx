import React, { useEffect, useState } from 'react';
import Input from '../../core/inputs/Input';
import AddressSelect, { AddressType } from '../address/AddressSelect';
import { amountFormatter, isObjectEmpty } from '../../utils/helpers';
import { FaInfo } from 'react-icons/fa';
import { LuShoppingCart, LuView } from "react-icons/lu";
import SubmitButton from '../../core/buttons/SubmitButton';

type CheckoutType = {
  bookId: string;
};

const CheckoutForm = ({ bookId: string }: CheckoutType) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [selectedAddress, setSelectedAddress] = useState<AddressType>();

  const processPayment = () => {
    console.log('processing');
  };

  useEffect(() => {
    if (selectedAddress) {
      setName(selectedAddress.name);
      setCity(selectedAddress.city);
      setCountry(selectedAddress.country);
      setDescription(selectedAddress.description);
    } else {
      setName('');
      setCity('');
      setCountry('');
      setDescription('');
    }
  }, [selectedAddress]);

  return (
    <div className="flex flex-col my-10 justify-center md:w-1/2 w-full md:mx-5 md:px-0 px-5">
      <div className="rounded-lg w-full h-full bg-gray-200 p-5">
        <div className="font-bold text-xl text-cyan-700 mb-3">Payment Details</div>
        <AddressSelect onChange={setSelectedAddress} />
        <div className="flex mb-3 mt-10">
          <Input
            label="Address Name"
            placeholder="Enter name"
            onChange={setName}
            value={name}
            height="h-10"
            bgColor="bg-gray-100"
            className="flex-1 mr-3"
            disabled={!!selectedAddress}
          />
          <Input
            label="Description"
            placeholder="Enter description"
            onChange={setDescription}
            value={description}
            height="h-10"
            bgColor="bg-gray-100"
            className="flex-1 ml-3"
            disabled={!!selectedAddress}
          />
        </div>
        <div className="flex my-3">
          <Input
            label="Country"
            placeholder="Enter country"
            onChange={setCountry}
            value={country}
            height="h-10"
            bgColor="bg-gray-100"
            className="flex-1 mr-3"
            disabled={!!selectedAddress}
          />
          <Input
            label="City"
            placeholder="Enter city"
            onChange={setCity}
            value={city}
            height="h-10"
            bgColor="bg-gray-100"
            className="flex-1 ml-3"
            disabled={!!selectedAddress}
          />
        </div>
        <div className="pt-20 text-gray-800 flex items-center">
          <FaInfo className="text-gray-600 border rounded-full border-cyan-800 p-1 w-7 h-6 mr-2 cursor-pointer" />
          <div className="flex italic">
            Shipping Cost for Tirana is {amountFormatter(0)}. For other cities, it will be
            determined by the admin (It does not exceed {amountFormatter(5)}.
          </div>
        </div>
        <SubmitButton
          className="w-full justify-center mt-10"
          label={
            <div className="flex items-center">
              <LuShoppingCart className="mr-2 w-4 h-4" />
              <div>Order book</div>
            </div>
          }
          onClick={processPayment}
        />
      </div>
    </div>
  );
};

export default CheckoutForm;
