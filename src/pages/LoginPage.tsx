import React from 'react';
import loginImage from '../images/login-image.jpg';
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-row-reverse min-h-screen bg-gray-100">
      <div className="w-1/2 h-screen flex justify-center items-center p-2 md:block hidden">
        <img src={loginImage} alt="library" className="h-full rounded-xl border border-cyan-500 shadow-sm" />
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
