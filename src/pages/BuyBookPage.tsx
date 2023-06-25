import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { useParams } from 'react-router-dom';
import bookCover from '../images/book-cover.jpg';
import { AiFillStar } from 'react-icons/ai';
import CheckoutForm from '../components/books/CheckoutForm';
import { amountFormatter, showError } from '../utils/helpers';
import { BookType } from '../components/books/BookDetails';
import CustomerService from '../services/CustomerService';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const BuyBookPage = () => {
  const [book, setBook] = useState<BookType>();
  const { id } = useParams();
  const customerId = useSelector((state) => _.get(state, 'userReducer.id', ''));

  const ratingArray = Array.from({ length: Number(book?.rating) });

  useEffect(() => {
    if (id) {
      CustomerService.getBook(id)
        .then((response) => {
          const { book } = response.data.data;
          setBook(book);
        })
        .catch((error) => showError(error.response.data.message));
    }
  }, [id]);

  return (
    <Layout>
      <div className="flex md:flex-row flex-col justify-around">
        <div className="flex flex-col mt-10 justify-center md:w-1/2 w-full p-5">
          <div className="flex justify-center">
            <img
              src={book?.imageBase64 ? `data:image;base64,${book.imageBase64}` : bookCover}
              alt="image"
              className="border border-gray-100 rounded-lg shadow-md w-60 h-80"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="font-bold text-cyan-900 text-3xl my-2">{book?.title}</div>
            <div className="flex mt-3 ml-5">
              {ratingArray.map((_, index) => (
                <AiFillStar key={index} className="text-yellow-600 mr-1" />
              ))}
            </div>
          </div>
          <div className="font-semibold text-cyan-900 text-xl text-center">By {book?.author}</div>
          <div className="font-semibold text-green-900 text-xl text-center">
            {amountFormatter(book?.price || 0)}
          </div>
          <div className=" text-gray-700 mt-4 px-10">{book?.description}</div>
        </div>
        {id && <CheckoutForm userId={customerId} bookId={id} />}
      </div>
    </Layout>
  );
};

export default BuyBookPage;
