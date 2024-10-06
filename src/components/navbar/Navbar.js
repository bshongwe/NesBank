import React, { useState } from 'react';
import { Link } from 'next/link'; // Update to Next.js Link
import authService from '../../services/authService'; // Import the authentication service
import Modal from './Modal'; // Import Modal component
import SignIn from './SignIn'; // Import SignIn component
import SignUp from './SignUp'; // Import SignUp component

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between Sign In and Sign Up
  const isAuthenticated = authService.isAuthenticated();
  const user = authService.getUser();

  const handleLogout = () => {
    authService.logout();
    // Redirect to the homepage or sign in page after logout if needed
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
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
                </ul>
              </li>
            </>
          ) : (
            <li>
              <button onClick={toggleModal} className="get-started-button">Get Started</button>
            </li>
          )}
        </ul>
      </nav>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        {isSignIn ? (
          <SignIn onToggle={handleToggle} />
        ) : (
          <SignUp onToggle={handleToggle} />
        )}
      </Modal>
    </>
  );
};

export default Navbar;
