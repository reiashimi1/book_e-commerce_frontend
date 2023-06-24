import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import GuestRoute from './GuestRoute';
import RegisterPage from "../pages/RegisterPage";
import AdminHomePage from "../pages/AdminHomePage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/admin-home" element={<AdminHomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
