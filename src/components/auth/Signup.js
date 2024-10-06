import React, { useState } from "react";
import authService from "../services/authService"; // Adjust the import path

const SignUp = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(name, email, password);
      onClose(); // Close the modal on successful signup
      window.location.reload(); // Reload the page to update the user state
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="name" className="block text-sm">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
