import React, { useEffect, useState } from 'react';
import Modal from '../../core/modals/Modal';
import { FaBook } from 'react-icons/fa';
import EditButton from '../../core/buttons/EditButton';
import Input from '../../core/inputs/Input';
import FileInput from '../../core/inputs/FileInput';
import AdminService from '../../services/AdminService';
import { showError, showSuccess } from '../../utils/helpers';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  bookId: string;
  bookImageBase64: string;
  bookTitle: string;
  bookAuthor: string;
  bookRating: string;
  bookPrice: number;
  bookDescription: string;
};

const EditBookDetails = ({
  isOpen,
  onClose,
  onSubmit,
  bookId,
  bookImageBase64,
  bookTitle,
  bookAuthor,
  bookRating,
  bookPrice,
  bookDescription
}: ModalProps) => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const clearFields = () => {
    setImage('');
    setTitle('');
    setDescription('');
    setPrice(0);
    setRating('');
    setAuthor('');
  };

  const closeModal = () => {
    clearFields();
    onClose();
  };

  const editBook = () => {
    AdminService.updateBook(bookId, {
      title,
      author,
      description,
      imageUrl: image || bookImageBase64,
      rating,
      price
    })
      .then((response) => {
        showSuccess(response.data.message);
        clearFields();
        closeModal();
        if (onSubmit) {
          onSubmit();
        }
      })
      .catch((err) => showError(err.response.data.message));
  };

  useEffect(() => {
    !!bookTitle && setTitle(bookTitle);
    !!bookAuthor && setAuthor(bookAuthor);
    !!bookRating && setRating(bookRating);
    !!bookPrice && setPrice(bookPrice);
    !!bookDescription && setDescription(bookDescription);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      title="Edit Book Details"
      onClose={closeModal}
      icon={<FaBook className="mr-1 text-emerald-600" />}
      secondButton={
        <EditButton
          onClick={editBook}
          label={<div className="flex items-center">Edit</div>}
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
      <div className="flex justify-center mt-5">
        {bookImageBase64 && !image && (
          <img src={`data:image;base64,${bookImageBase64}`} alt="book cover" className="h-40" />
        )}
      </div>
      <div className="w-full px-10 mt-6">
        <FileInput label="Select another cover image" handleChange={setImage} allowPreviewImage />
      </div>
    </Modal>
  );
};

export default EditBookDetails;
