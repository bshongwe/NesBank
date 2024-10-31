import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Next.js Link component
import { useRouter } from 'next/router'; // Import useRouter hook
import authService from '../../services/authService'; // Import the authentication service
import GetStartedModal from '../GetStartedModal/GetStartedModal'; // Import GetStartedModal
import TradingViewWidget from '../dashboard/TradingViewWidget'; // Import TradingViewWidget component
import styles from './Navbar.module.css'; // Import CSS module

const Navbar = () => {
  const router = useRouter(); // Use useRouter for programmatic navigation
  const isAuthenticated = authService.isAuthenticated(); // Check if the user is logged in
  const user = authService.getUser(); // Get the user details (if logged in)
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [isTradingViewModalOpen, setTradingViewModalOpen] = useState(false); // State for TradingView modal visibility
  const [requestCount, setRequestCount] = useState(0); // State to track request count

  // Function to handle user logout
  const handleLogout = () => {
    authService.logout(); // Clear user session
    router.push('/signin'); // Redirect to the Sign In page after logout
  };

  // Function to toggle the GetStarted modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to open the TradingView modal
  const handleOpenTradingViewModal = () => {
    if (!isAuthenticated && requestCount >= 3) {
      alert('You have reached the maximum number of requests.');
    } else {
      setTradingViewModalOpen(true);
      setRequestCount(prevCount => prevCount + 1);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/signin'); // Redirect unauthorized users to sign-in page
    }
  }, [isAuthenticated, router]);

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">NesBank</Link>
      <ul className="navbar-links">
        {isAuthenticated ? (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="navbar-profile">
              <span className="profile-name">{user.name}</span>
              <ul className="profile-dropdown">
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="logout-button">Logout</button>
                </li>
                <li>
                  <button onClick={toggleModal} className="wallet-button">Wallet</button>
                </li>
                <li>
                  <button onClick={handleOpenTradingViewModal} className="tradingview-button">TradingView Widget</button>
                </li>
              </ul>
            </li>
          </>
        ) : (
          <>
            <li><Link href="/signin">Sign In</Link></li>
            <li><Link href="/signup">Sign Up</Link></li>
            <li>
              <button onClick={handleOpenTradingViewModal} className="tradingview-button">TradingView Widget</button>
            </li>
          </>
        )}
      </ul>

      {isModalOpen && (
        <GetStartedModal isOpen={isModalOpen} onClose={toggleModal} />
      )}
      {isTradingViewModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => setTradingViewModalOpen(false)}>&times;</span>
            <TradingViewWidget />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
