import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import authService from '../../services/authService'; // Mock service for login API
import './signin.css'; // Importing styles

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // React Router's hook to navigate

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.login(email, password); // Call login API
      if (user) {
        // Upon successful login, redirect to the dashboard
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In to NesBank</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;