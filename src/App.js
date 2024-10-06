import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Dashboard from './Dashboard';
import Profile from './pages/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        {/* Protecting the dashboard route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Adding a protected route for the profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Catch-all for undefined routes */}
      </Routes>
      <ToastContainer /> {/* ToastContainer should be inside the Router */}
    </Router>
  );
};

export default App;