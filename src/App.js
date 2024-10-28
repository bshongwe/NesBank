import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetStartedModal from './components/GetStartedModal/GetStartedModal';
import UserDashboard from './components/dashboard/UserDashboard'; // Import UserDashboard component
import Profile from './pages/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import authService from './services/authService'; // For authentication checks

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <Navbar />
      <button onClick={() => setModalOpen(true)}>Get Started</button> {/* Add a button to open the modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> {/* Include the modal */}
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<button onClick={() => setModalOpen(true)}>Login</button>} /> {/* Use button to open modal */}
        {/* Protecting the dashboard route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
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
    </Router>
  );
};

export default App;
