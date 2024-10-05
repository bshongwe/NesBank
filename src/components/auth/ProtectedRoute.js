import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../../services/authService'; // Service to check if user is authenticated

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = authService.isAuthenticated(); // Check if user is logged in

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children; // If authenticated, render the protected content (dashboard)
};

export default ProtectedRoute;