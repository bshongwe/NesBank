import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService'; // Import the authentication service

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = authService.isAuthenticated(); // Check if the user is logged in
  const user = authService.getUser(); // Get the user details (if logged in)

  // Function to handle user logout
  const handleLogout = () => {
    authService.logout(); // Clear user session
    navigate('/signin'); // Redirect to the Sign In page after logout
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">NesBank</Link>
      <ul className="navbar-links">
        {isAuthenticated ? ( // Check if the user is authenticated
          <>
            {/* Show the dashboard link */}
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            
            {/* Display user profile name with a dropdown for profile and logout */}
            <li className="navbar-profile">
              <span className="profile-name">{user.name}</span> {/* Display user's name */}
              <ul className="profile-dropdown">
                <li>
                  <Link to="/profile">Profile</Link> {/* Profile link */}
                </li>
                <li>
                  <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout button */}
                </li>
              </ul>
            </li>
          </>
        ) : (
          <>
            {/* If not authenticated, show Sign In and Sign Up links */}
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;