import React from 'react';
import { useRouter } from 'next/router';
import SignIn from './components/auth/SignIn';
import Dashboard from './Dashboard';
import Profile from './pages/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const router = useRouter();
  const { pathname } = router;

  // Define a mapping for routes to their components
  const routeComponents = {
    '/': <h1>Home Page</h1>,
    '/signin': <SignIn />,
    '/dashboard': (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    '/profile': (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  };

  return (
    <>
      <Navbar />
      {/* Render the corresponding component based on the current path */}
      {routeComponents[pathname] || <h1>404 - Page Not Found</h1>}
    </>
  );
};

export default App;