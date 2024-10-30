import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authService from '../../services/authService'; // Imports authService for authentication checks

const ProtectedRoute = () => {
  return authService.isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
