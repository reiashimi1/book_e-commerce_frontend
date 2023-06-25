import React, { useState } from 'react';
import Modal from '../../core/modals/Modal';
import { FaBook } from 'react-icons/fa';
import Input from '../../core/inputs/Input';
import AddButton from '../../core/buttons/AddButton';
import FileInput from '../../core/inputs/FileInput';
import AdminService from '../../services/AdminService';
import { showError, showSuccess } from '../../utils/helpers';
import { set } from "lodash";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const AddBookModal = ({ isOpen, onClose, onSubmit }: ModalProps) => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const clearFields = () => {
    setTitle('');
    setAuthor('');
    setRating('');
    setDescription('');
    setPrice(0);
  };

  const addBook = () => {
    AdminService.createBook({ title, author, description, imageUrl: image, rating, price })
      .then((response) => {
        showSuccess(response.data.message);
        clearFields();
        onSubmit();
        onClose();
      })
      .catch((err) => showError(err.response.data.message));
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Add book to the library"
      onClose={onClose}
      icon={<FaBook className="mr-1 text-blue-600" />}
      secondButton={
        <AddButton
          onClick={addBook}
          label={<div className="flex items-center">Add Book</div>}
          className="ml-2"
        />
      }>
      <div className="flex md:flex-row flex-col justify-between mx-5 mt-3">
        <Input
          label="Title"
          placeholder="Enter title"
          onChange={setTitle}
          value={title}
          height="h-10"
          className="flex-1 md:mr-3"
        />
        <Input
          label="Author"
          placeholder="Enter author name"
          onChange={setAuthor}
          value={author}
          height="h-10"
          className="flex-1 md:ml-3 md:mt-0 mt-3"
        />
      </div>
      <div className="flex md:flex-row flex-col justify-between mx-5 mt-3">
        <Input
          label="Price"
          placeholder="Enter price"
          onChange={(value) => setPrice(Number(value))}
          type="number"
          value={price.toString()}
          height="h-10"
          className="flex-1 md:mr-3"
        />
        <Input
          label="Rating"
          placeholder="Enter rating"
          onChange={setRating}
          type="number"
          value={rating}
          height="h-10"
          className="flex-1 md:ml-3"
        />
      </div>
      <Input
        label="Description"
        placeholder="Enter description"
        onChange={setDescription}
        value={description}
        height="h-10"
        className="flex-1 mx-5 mt-3"
      />
      <div className="w-full px-10 mt-6">
        <FileInput label="Select Book Cover Image" handleChange={setImage} allowPreviewImage />
      </div>
    </Modal>
  );
};

export default AddBookModal;
