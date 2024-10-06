import React from 'react';
import Profile from '../pages/Profile'; // Adjust the path as needed
import ProtectedRoute from '../components/auth/ProtectedRoute'; // Adjust the path as needed

const ProfilePage = () => {
  return (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  );
};

export default ProfilePage;