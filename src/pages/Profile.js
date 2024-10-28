import React, { useState, useEffect } from 'react';
import authService from '../services/authService';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
  });

  useEffect(() => {
    const currentUser = authService.getUser();
    if (currentUser) {
      setUser(currentUser);
      setFormData({
        fullName: currentUser.fullName,
        phoneNumber: currentUser.phoneNumber,
        address: currentUser.address,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const updatedUser = await authService.updateProfile(formData);
      setUser(updatedUser);
      // Optionally, update the local storage to reflect changes
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error appropriately, e.g., show error message to user
    }
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      {user ? (
        <div className="profile-form">
          <div className="profile-field">
            <label>Email:</label>
            <span>{user.email} (requires admin authorization to change)</span>
          </div>
          <div className="profile-field">
            <label>Full Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            ) : (
              <span>{user.fullName}</span>
            )}
          </div>
          <div className="profile-field">
            <label>Phone Number:</label>
            {isEditing ? (
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            ) : (
              <span>{user.phoneNumber}</span>
            )}
          </div>
          <div className="profile-field">
            <label>Address:</label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            ) : (
              <span>{user.address}</span>
            )}
          </div>
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;