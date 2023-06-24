import React, { ReactNode } from 'react';
import CloseButton from '../buttons/CloseButton';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  icon?: ReactNode
  title: string;
  maxWidth?: string;
  secondButton: React.ReactNode;
  width?: string;
};

const Modal = ({
                 isOpen,
  onClose,
  children,
  title,
  icon,
  maxWidth = 'xl',
  secondButton,
  width = 'sm:w-2/3'
}: ModalProps) => {
  return (
    <div
      className={`fixed z-40 inset-0 overflow-y-auto ${isOpen ? '' : 'hidden'}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-${maxWidth} ${width}`}>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex flex-col">
              <div className="mt-3 flex flex-col sm:flex-row text-center sm:mt-0 sm:text-left md:mr-12">
                <div className="mt-3 flex items-center flex-1 text-center sm:mt-0 sm:ml-4 sm:text-left md:mr-12">
                  {icon && icon}
                  {title && (
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
                  )}
                </div>
              </div>
              <div className="mt-2 justify-center">{children}</div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end">
            <div>
              <CloseButton onClick={onClose} label="Close" />
            </div>
            {secondButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
