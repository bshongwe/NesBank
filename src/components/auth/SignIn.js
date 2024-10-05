import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Using Next.js router for navigation
import authService from '../../services/authService'; // Service for login API
import './signin.css'; // Importing styles

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Next.js router for navigation

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state before each sign-in attempt
    try {
      const user = await authService.login(email, password); // Call login API
      if (user) {
        // Upon successful login, redirect to the dashboard
        router.push('/dashboard');
      }
    } catch {
      setError('Invalid email or password.'); // Set error message on failure
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