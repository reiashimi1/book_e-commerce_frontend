import React, { useState } from 'react';
import Input from '../../core/inputs/Input';
import SubmitButton from '../../core/buttons/SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import { showLoader, hideLoader } from '../../redux/loader/Action';
import AuthService from '../../services/AuthService';
import _ from 'lodash';
import { login } from '../../redux/auth/Action';
import { showError, showSuccess } from '../../utils/helpers';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(showLoader('Please wait...'));
    setLoading(true);
    AuthService.login(email, password)
      .then((response) => {
        showSuccess(response.data.data.message);
        const access_token = _.get(response, 'data.data.token', '');
        const user = _.get(response, 'data.data.user', '');
        dispatch<any>(login({ access_token }, user));
        if (user.role === 'admin') {
          return navigate('/admin-home');
        } else {
          return navigate('/');
        }
      })
      .catch((err) => {
        showError(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
        dispatch(hideLoader());
      });
  };

  return (
    <div className="flex items-center justify-center md:w-1/2 w-full">
      <div className="mx-5 h-2/3 sm:w-2/3 w-full">
        <div className="text-center text-3xl text-cyan-900 font-semibold mb-5">WELCOME BACK</div>
        <div className="text-center text-lg mt-5">Please enter your details</div>
        <form className="flex flex-col items-center" onSubmit={handleLogin}>
          <Input
            label="Email"
            placeholder="Enter email"
            onChange={setEmail}
            value={email}
            className="w-3/4 mt-10"
            height="h-11"
          />
          <Input
            label="Password"
            placeholder="Enter password"
            onChange={setPassword}
            value={password}
            type="password"
            className="w-3/4 my-8"
            height="h-11"
          />
          <SubmitButton
            onClick={handleLogin}
            loading={loading}
            label="Login"
            className="w-3/4 flex justify-center"
          />
        </form>
        <div className="text-center mt-5">
          <Link className="text-primary-600 font-medium hover:text-primary-700" to="/register">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
