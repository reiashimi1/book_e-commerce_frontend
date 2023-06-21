import React, { useState } from 'react';
import loginImage from '../images/login-image2.jpg';
import Input from '../core/inputs/Input';
import SubmitButton from '../core/buttons/SubmitButton';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  const registerUser = () => {
    console.log('smth');
  };

  return (
    <div className="flex flex-row-reverse min-h-screen bg-gray-100">
      <div className="w-1/2 h-screen flex justify-center items-center p-2">
        <img
          src={loginImage}
          alt="library"
          className="h-full rounded-xl border border-cyan-500 shadow-sm"
        />
      </div>
      <div className="flex items-center justify-center w-1/2">
        <div className="mx-5 h-2/3 w-2/3">
          <div className="text-center text-3xl text-cyan-900 font-semibold mb-5">WELCOME</div>
          <div className="text-center text-lg mt-5">{`Let's create your account`}</div>
          <div className="flex flex-col items-center">
            <Input
              label="First Name"
              placeholder="Enter first name"
              onChange={setFirstName}
              value={firstName}
              className="w-3/4 mt-10"
              height="h-11"
            />
            <Input
              label="Last Name"
              placeholder="Enter last name"
              onChange={setLastName}
              value={lastName}
              className="w-3/4 mt-5"
              height="h-11"
            />
            <Input
              label="Email"
              placeholder="Enter email"
              onChange={setEmail}
              value={email}
              className="w-3/4 mt-5"
              height="h-11"
            />
            <Input
              label="Password"
              placeholder="Enter password"
              onChange={setPassword}
              value={password}
              type="password"
              className="w-3/4 my-5"
              height="h-11"
            />
            <SubmitButton
              onClick={registerUser}
              loading={loading}
              label="Register"
              className="w-3/4"
            />
          </div>
          <div className="text-center mt-5">
            <Link className="text-primary-600 font-medium hover:text-primary-700" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
