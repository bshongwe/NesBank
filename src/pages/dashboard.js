import React from 'react';
import Dashboard from '../Dashboard'; // Adjust the path as needed
import ProtectedRoute from '../components/auth/ProtectedRoute'; // Adjust the path as needed

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
};

export default DashboardPage;