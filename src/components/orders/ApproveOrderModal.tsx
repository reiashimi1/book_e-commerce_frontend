import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import AddButton from '../../core/buttons/AddButton';
import Modal from '../../core/modals/Modal';
import Input from '../../core/inputs/Input';
import AdminService from '../../services/AdminService';
import { showError, showSuccess } from '../../utils/helpers';

export type OrderModalProps = {
  orderId: string;
  bookPrice: number;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const ApproveOrderModal = ({ isOpen, orderId, bookPrice, onClose, onSuccess }: OrderModalProps) => {
  const [shippingCost, setShippingCost] = useState(0);

  const approve = () => {
    AdminService.changeStatus(orderId, 'confirmed', bookPrice, shippingCost)
      .then(() => {
        showSuccess('Order status changed');
        onClose();
        onSuccess();
      })
      .catch((error) => showError(error.response.data.message));
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Approve Order"
      onClose={onClose}
      icon={<FaCheck className="mr-2 text-emerald-600" />}
      secondButton={
        <AddButton
          displayIcon={false}
          onClick={approve}
          label={<div className="flex items-center">Approve</div>}
          className="ml-2 text-emerald-600"
        />
      }>
      <div className="m-5">
        <div>Are you sure you want to approve this order?</div>
        <div>
          <Input
            label="Shipping Cost"
            placeholder="Enter shipping"
            onChange={(value) => setShippingCost(Number(value))}
            value={shippingCost.toString()}
            height="h-12"
            className="flex mt-5 flex-col w-1/2"
          />
        </div>
      </div>
    </Modal>
  );
};

export default ApproveOrderModal;
