import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import { logout } from "../redux/auth/Action";

const UserDropdown = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // eslint-disable-next-line no-undef
  // const name = useSelector((state) => _.get(state, 'meReducer.name', 'Name'));
  const name = 'TEst';

  const handleLogout = () => {
    dispatch<any>(logout());
  };

  const navigateToProfile = () => {
    navigate('/profile');
  };

  return (
    <div
      className={`inline-flex bg-white border rounded-md hover:text-cyan-800 hover:bg-gray-50 ${
        isOpen ? 'text-cyan-800 border border-b border-cyan-600' : 'text-gray-600'
      }`}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="p-2 text-sm rounded-l-md font-semibold uppercase cursor-pointer">
        <div className="flex justify-center items-center rounded-full border border-gray-100 shadow-sm w-7 h-7 text-xs bg-cyan-500 text-white">
          {name && name[0]}
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          type="button"
          className={`inline-flex items-center justify-center h-full px-2 text-gray-600 ${
            isOpen ? 'border-cyan-800' : 'border-gray-100'
          } hover:text-gray-700 rounded-r-md hover:bg-gray-50`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 z-10 w-76 mt-2 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
            <div className="p-2 cursor-pointer border-t">
              <div
                onClick={navigateToProfile}
                className="block px-6 py-3 text-base hover:text-cyan-800 hover:bg-gray-50 rounded-lg text-left flex">
                <AiOutlineUser className="mr-3 mt-1" />
                Profile
              </div>
              <div
                onClick={handleLogout}
                className="block px-6 py-3 text-base text-red-600 rounded-lg hover:bg-indigo-50 text-left flex">
                <AiOutlineLogout className="mr-3 mt-1" />
                Logout
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDropdown;
