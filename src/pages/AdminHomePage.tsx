import React from 'react';
import Layout from '../layout/Layout';
import bookReader from '../images/login-image.jpg';
import { FaQuestion } from 'react-icons/fa';
import SubmitButton from '../core/buttons/SubmitButton';
import { LuBookUp } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const AdminHomePage = () => {
  const navigate = useNavigate();

  const navigateToBooks = () => {
    navigate('/books');
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex flex-row-reverse justify-between w-5/6 rounded-lg bg-purple-200 shadow-md mt-20 text-white">
          <div className="flex w-1/2 p-8">
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-cyan-800 mb-5 font-bold text-3xl">Build our library</div>
                <div className="flex items-center">
                  <div className="text-gray-600 text-xl">How to please our customers needs</div>
                  <FaQuestion className="text-gray-600 border rounded-full border-cyan-800 p-1 w-5 h-5 ml-1 cursor-pointer" />
                </div>
                <div className="text-gray-500 italic mt-10">
                  The more books in our library, the better. Try to get the best sellers and the
                  most rated books, to give our customers the best reading experience.
                </div>
              </div>
              <div className="flex text-gray-700 justify-end">What are you still doing here?</div>
            </div>
          </div>
          <div className="w-1/2 p-2 flex justify-start">
            <img src={bookReader} alt="bookReader" className="rounded-xl h-96" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-2/3 justify-center flex flex-col items-center">
          <div className="text-center text-2xl text-cyan-700 uppercase mb-4 font-semibold">
            New books for customers?
          </div>
          <SubmitButton
            className="w-1/4 flex justify-center"
            label={
              <div className="flex items-center hover:scale-110">
                <LuBookUp className="mr-2 w-5 h-5" />
                <div>Manage books</div>
              </div>
            }
            onClick={navigateToBooks}
          />
        </div>
      </div>
    </Layout>
  );
};

export default AdminHomePage;
