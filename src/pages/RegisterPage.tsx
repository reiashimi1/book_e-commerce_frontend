import React from 'react';
import loginImage from '../images/login-image2.jpg';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 h-screen flex justify-center items-center p-2">
        <img
          src={loginImage}
          alt="library"
          className="h-full rounded-xl border border-cyan-500 shadow-sm"
        />
      </div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
