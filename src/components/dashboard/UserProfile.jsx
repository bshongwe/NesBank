import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    accountId: '',
    bankAccountNumber: ''
  });

  const [editableDetails, setEditableDetails] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch('/api/user'); // User API endpoint
      const data = await response.json();
      setUserDetails(data);
      setEditableDetails({
        name: data.name,
        email: data.email
      });
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editableDetails)
      });
      if (response.ok) {
        alert('Profile updated successfully');
        fetchUserDetails(); // Refreshes user details
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Account ID: </label>
          <span>{userDetails.accountId}</span>
        </div>
        <div>
          <label>Bank Account Number: </label>
          <span>{userDetails.bankAccountNumber}</span>
        </div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={editableDetails.name}
            onChange={(e) => setEditableDetails({ ...editableDetails, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={editableDetails.email}
            onChange={(e) => setEditableDetails({ ...editableDetails, email: e.target.value })}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
