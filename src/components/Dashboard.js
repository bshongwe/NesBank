import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar'; // Inherits the existing navbar
import './dashboard.css'; // Optional styling

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details using the token, assuming there's an API to get the user info
    const token = localStorage.getItem('authToken');
    if (token) {
      // Fetch user info based on token
      fetch('/api/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
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
          <button onClick={() => navigate('/wallet')}>Wallet Options</button>
          <button onClick={() => navigate('/profile-settings')}>Profile Settings</button>
          <button onClick={() => authService.logout()}>Logout</button>
        </div>
        {/* Rest of the dashboard content */}
      </div>
    </div>
  );
};

export default Dashboard;