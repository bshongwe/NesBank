import React from 'react';
import Navbar from './navbar/Navbar'; // Inherits the existing navbar
import './dashboard.css'; // Optional styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <h1>Welcome to your NesBank Dashboard</h1>
        <p>Here you can manage your profile, check your accounts, and more.</p>
      </div>
    </div>
  );
};

export default Dashboard;