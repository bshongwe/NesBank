import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar'; // Inherits the existing navbar
// import './dashboard.css'; // Optional styling
import { useRouter } from 'next/router'; // Import Next.js router for navigation
import authService from '../services/authService'; // Import your authService

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    // Fetch user details using the token
    const token = localStorage.getItem('authToken');
    if (token) {
      fetch('/api/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setUser(data))
        .catch(error => console.error('Error fetching user info:', error));
    }
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard">
      <Navbar user={user} />
      <div className="dashboard-content">
        <h1>Welcome to your Dashboard, {user.name}!</h1>
        <div className="dashboard-buttons">
          {/* Add buttons for wallet options */}
          <button onClick={() => router.push('/wallet')}>Wallet Options</button>
          <button onClick={() => router.push('/profile-settings')}>Profile Settings</button>
          <button onClick={() => authService.logout()}>Logout</button>
        </div>
        {/* Rest of the dashboard content */}
      </div>
    </div>
  );
};

export default Dashboard;
