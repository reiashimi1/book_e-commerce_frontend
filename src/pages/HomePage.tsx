import React from 'react';
import Layout from '../layout/Layout';
import bookReader from '../images/book-reader.jpg';
import { FaInfo } from 'react-icons/fa';
import SubmitButton from '../core/buttons/SubmitButton';
import { LuView } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToBooks = () => {
    navigate('/books');
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex justify-between w-5/6 rounded-lg bg-purple-200 shadow-md mt-20 text-white">
          <div className="flex w-1/2 p-8">
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-cyan-800 mb-5 font-bold text-3xl">Build your library</div>
                <div className="flex items-center">
                  <FaInfo className="text-gray-600 border rounded-full border-cyan-800 p-1 w-5 h-5 mr-2 cursor-pointer" />
                  <div className="text-gray-600 text-xl">Buy two books with the price of one</div>
                </div>
                <div className="text-gray-500 italic mt-10">
                  In order to give you a warm welcome to our online bookstore, we offer the
                  possibility to buy 2 books with the price of one. Find and buy a book of your
                  choice, and then you can go to choose what to buy next... for free.
                </div>
              </div>
              <div className="flex text-gray-700 justify-end">Offer is valid until 07/07/2023</div>
            </div>
          </div>
          <div className="w-1/2 p-2 flex justify-end">
            <img src={bookReader} alt="bookReader" className="rounded-xl h-96" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-2/3 justify-center flex flex-col items-center">
          <div className="text-center text-2xl text-cyan-700 uppercase mb-4 font-semibold">Do not wait</div>
          <SubmitButton
            className="w-1/4"
            label={
              <div className="flex items-center hover:scale-110">
                <LuView className="mr-2 w-4 h-4" />
                <div>Explore books</div>
              </div>
            }
            onClick={navigateToBooks}
          />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
