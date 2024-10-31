import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import GetStartedModal from './components/GetStartedModal/GetStartedModal';
import UserDashboard from './components/dashboard/UserDashboard';
import Profile from './pages/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import authService from './services/authService';
import TradingViewWidget from './components/dashboard/TradingViewWidget';
import styles from './App.module.css';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTradingViewModalOpen, setTradingViewModalOpen] = useState(false);
  const [requestCount, setRequestCount] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/login');
    } else {
      setIsRegistered(true);
    }
  }, [navigate]);

  const handleOpenTradingViewModal = () => {
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
      <button onClick={() => setModalOpen(true)}>Get Started</button>
      <button onClick={handleOpenTradingViewModal}>Open TradingView Widget</button>
      <GetStartedModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
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
        <Route path="/login" element={<button onClick={() => setModalOpen(true)}>Login</button>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
