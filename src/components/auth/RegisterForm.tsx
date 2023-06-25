import React, { useState } from 'react';
import Input from '../../core/inputs/Input';
import SubmitButton from '../../core/buttons/SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from "../../redux/loader/Action";
import AuthService from "../../services/AuthService";
import _ from "lodash";
import { login } from "../../redux/auth/Action";
import { showError, showSuccess } from "../../utils/helpers";

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = () => {
    dispatch(showLoader('Please wait...'));
    setLoading(true);
    AuthService.register(email, password, firstName, lastName)
      .then((response) => {
        showSuccess(response.data.data.message);
        const access_token = _.get(response, 'data.data.token', '');
        const user = _.get(response, 'data.data.user', '');
        dispatch<any>(login({ access_token }, user));
        navigate('/');
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
    <div className="flex items-center justify-center w-1/2">
      <div className="mx-5 h-2/3 w-2/3">
        <div className="text-center text-3xl text-cyan-900 font-semibold mb-5">WELCOME</div>
        <div className="text-center text-lg mt-5">{`Let's create your account`}</div>
        <form className="flex flex-col items-center">
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
            className="w-3/4 flex justify-center"
          />
        </form>
        <div className="text-center mt-5">
          <Link className="text-primary-600 font-medium hover:text-primary-700" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
