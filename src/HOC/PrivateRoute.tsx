import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const userToken = localStorage.getItem('user_token');

  return userToken ? children : <Navigate to="/" />;
};

export default PrivateRoute;