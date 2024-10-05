import React from 'react';
import { useRouter } from 'next/router';
import authService from '../../services/authService'; // Service to check if user is authenticated

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = authService.isAuthenticated(); // Check if user is logged in

  // Redirect to sign-in if the user is not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/signin'); // Use router's replace method for navigation
    }
  }, [isAuthenticated, router]);

  // If not authenticated, return null or loading indicator while redirecting
  if (!isAuthenticated) {
    return null; // Optionally return a loading spinner here
  }

  return children; // If authenticated, render the protected content (dashboard)
};

export default ProtectedRoute;