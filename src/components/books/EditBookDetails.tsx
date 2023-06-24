import React, { useEffect, useState } from "react";
import Modal from '../../core/modals/Modal';
import { FaBook } from 'react-icons/fa';
import EditButton from '../../core/buttons/EditButton';
import Input from '../../core/inputs/Input';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  bookId: string;
  bookImageBase64?: string;
  bookTitle: string;
  bookAuthor: string;
  bookRating?: string;
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
  bookRating = "0",
  bookDescription
}: ModalProps) => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState('0');
  const [description, setDescription] = useState('');

  useEffect(() => {
    !!bookTitle && setTitle(bookTitle);
    !!bookAuthor && setAuthor(bookAuthor);
    !!bookRating && setRating(bookRating);
    !!bookDescription && setDescription(bookDescription);
    !!bookImageBase64 && setImage(bookImageBase64);
  }, [isOpen])

  return (
    <Modal
      isOpen={isOpen}
      title="Edit Book Details"
      onClose={onClose}
      icon={<FaBook className="mr-1 text-emerald-600" />}
      secondButton={
        <EditButton
          onClick={onSubmit}
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
          label="Rating"
          placeholder="Enter rating"
          onChange={setRating}
          type="number"
          value={rating}
          height="h-10"
          className="flex-1 md:mr-3"
        />
        <Input
          label="Description"
          placeholder="Enter description"
          onChange={setDescription}
          value={description}
          height="h-10"
          className="flex-1 md:ml-3 md:mt-0 mt-3"
        />
      </div>
    </Modal>
  );
};

export default EditBookDetails;
