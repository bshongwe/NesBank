import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import GetStartedModal from './components/GetStartedModal/GetStartedModal';
import UserDashboard from './components/dashboard/UserDashboard'; // Import UserDashboard component
import Profile from './pages/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import authService from './services/authService'; // For authentication checks
import TradingViewWidget from './components/dashboard/TradingViewWidget';
import styles from './App.module.css';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTradingViewModalOpen, setTradingViewModalOpen] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    if (!authService.isAuthenticated()) {
      navigate('/login');
    } else {
      setIsRegistered(true);
    }
  }, [navigate]);

  const handleOpenTradingViewModal = () => {
    // Limit unregistered users to 3 request calls
    if (!isRegistered && requestCount >= 3) {
      alert('You have reached the maximum number of requests.');
    } else {
      setTradingViewModalOpen(true);
      setRequestCount(prevCount => prevCount + 1);
    }
  };

  return (
    <Router>
      <Navbar />
      <div className={styles.buttonContainer}>
        <button onClick={() => setModalOpen(true)}>Get Started</button> {/* Add a button to open the modal */}
        <button onClick={handleOpenTradingViewModal}>Open TradingView Widget</button>
      </div>
      <GetStartedModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> {/* Include the modal */}
      {isTradingViewModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => setTradingViewModalOpen(false)}>&times;</span>
            <TradingViewWidget />
          </div>
        </div>
      )}
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
