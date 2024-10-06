import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import authService from '../../services/authService'; // Import the authentication service
import Modal from './Modal'; // Import the Modal component

const Navbar = () => {
  const router = useRouter();
  const isAuthenticated = authService.isAuthenticated(); // Check if the user is logged in
  const user = authService.getUser(); // Get the user details (if logged in)

  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  // Function to handle user logout
  const handleLogout = () => {
    authService.logout(); // Clear user session
    router.push('/signin'); // Redirect to the Sign In page after logout
  };

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand">NesBank</Link>
      <ul className="navbar-links">
        {isAuthenticated ? ( // Check if the user is authenticated
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
          <>
            <li>
              <button onClick={() => setModalOpen(true)} className="get-started-button">Get Started</button>
            </li>
          </>
        )}
      </ul>

      {/* Render the modal for Sign In and Sign Up */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
