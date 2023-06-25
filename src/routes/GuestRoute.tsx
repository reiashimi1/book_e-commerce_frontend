import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Navigate, Outlet } from 'react-router';

const GuestRoute = () => {
  const accessToken = useSelector((state) => _.get(state, 'authReducer.access_token', null));
  const userRole = useSelector((state) => _.get(state, 'userReducer.role', null));

  if (accessToken) {
    if (userRole === 'admin') {
      return <Navigate to="/admin-home" />;
    } else {
      return <Navigate to="/" />;
    }
  }

  return <Outlet />;
};

export default GuestRoute;
