import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import GetStartedModal from './components/GetStartedModal/GetStartedModal';
import UserDashboard from './components/dashboard/UserDashboard'; // Import UserDashboard component
import Profile from './pages/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import authService from './services/authService'; // For authentication checks
import TradingViewWidget from './components/dashboard/TradingViewWidget'; // Import TradingViewWidget component
import styles from './App.module.css'; // Import CSS module

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTradingViewModalOpen, setTradingViewModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <Router>
      <Navbar />
      <button onClick={() => setModalOpen(true)}>Get Started</button> {/* Add a button to open modal */}
      <button onClick={() => setTradingViewModalOpen(true)}>Open TradingView Widget</button> {/* Button to open TradingView modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> {/* Include modal */}
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
        {/* Protecting dashboard route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        {/* Adds protected route for profile */}
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
