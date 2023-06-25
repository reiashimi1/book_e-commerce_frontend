import React from 'react';
import bookCover from '../../images/book-cover.jpg';
import { AiFillStar } from 'react-icons/ai';
import ViewButton from '../../core/buttons/ViewButton';
import { useNavigate } from 'react-router-dom';
import { BookType } from "./BookDetails";

const BookSection = ({ id, imageBase64, title, author, rating, description, price, onEdit }: BookType) => {
  const ratingArray = Array.from({ length: Number(rating) });

  const navigate = useNavigate();

  const viewBook = () => {
    navigate(`/books/${id}`);
  };

  return (
    <div className="flex flex-col mb-5">
      <div className="p-1">
        <img
          src={imageBase64 ? `data:image;base64,${imageBase64}` : bookCover}
          alt="image"
          className="border border-gray-100 rounded-lg shadow-md w-40 h-52"
        />
        <div className="font-semibold text-cyan-900 text-xl my-2">{title}</div>
        <div className="font-semibold text-gray-600">{author}</div>
        <div className="flex mt-3">
          {ratingArray.map((_, index) => (
            <AiFillStar key={index} className="text-yellow-600 mr-1" />
          ))}
        </div>
        <ViewButton onClick={viewBook} label="Buy now" className="w-full justify-start px-0 mt-2" />
      </div>
    </div>
  );
};

export default BookSection;
