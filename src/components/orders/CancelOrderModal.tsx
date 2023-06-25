import React from 'react';
import Modal from '../../core/modals/Modal';
import CancelButton from '../../core/buttons/CancelButton';
import { RxCross1 } from 'react-icons/rx';
import { OrderModalProps } from './ApproveOrderModal';
import AdminService from '../../services/AdminService';
import { showError, showSuccess } from '../../utils/helpers';

const CancelOrderModal = ({ isOpen, orderId, bookPrice, onClose, onSuccess }: OrderModalProps) => {
  const approve = () => {
    AdminService.changeStatus(orderId, 'canceled', bookPrice)
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
      title="Cancel Order"
      onClose={onClose}
      icon={<RxCross1 className="mr-2 text-red-600" />}
      secondButton={
        <CancelButton
          onClick={approve}
          label={<div className="flex items-center">Cancel</div>}
          className="ml-2 text-emerald-600"
        />
      }>
      <div className="m-5">Are you sure you want to cancel this order?</div>
    </Modal>
  );
};

export default CancelOrderModal;
