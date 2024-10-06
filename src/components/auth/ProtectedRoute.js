import { useEffect } from 'react';
import { useRouter } from 'next/router';
import authService from '../../services/authService'; // Adjust the path as needed

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = authService.isAuthenticated(); // Your logic to check if the user is authenticated

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/signin'); // Redirect to sign-in page if not authenticated
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? children : null; // Render children only if authenticated
};

export default ProtectedRoute;