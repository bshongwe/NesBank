import React, { useState } from "react";
import { toast } from 'react-toastify';
import authService from "../../services/authService"; // Adjust the path based on your folder structure

const GetStartedModal = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setError(""); // Reset error when toggling forms
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      resetForm(); // Reset form when closing modal
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setFullName("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isSignIn) {
        // Call the sign-in method from authService
        await authService.login(email, password);
        toast.success("Successfully signed in!"); // Show success notification
      } else {
        // Call the sign-up method from authService
        await authService.signUp(fullName, email, password);
        toast.success("Successfully signed up!"); // Show success notification
      }
      onClose(); // Close modal on successful authentication
      resetForm(); // Reset form fields
    } catch (err) {
      setError(err.message || "Authentication failed. Please try again."); // Display error message
      toast.error(err.message || "Authentication failed. Please try again."); // Show error notification
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackdropClick} // Close on backdrop click
    >
      <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full">
        <button
          className="absolute top-2 right-2 text-xl text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h2>
        {error && <p className="text-red-500 text-sm" aria-live="assertive">{error}</p>}
        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="mb-3 w-full p-2 border rounded"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="mb-3 w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-3 w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
            disabled={loading} // Disable button while loading
          >
            {loading ? (isSignIn ? "Signing In..." : "Signing Up...") : (isSignIn ? "Sign In" : "Sign Up")}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          {isSignIn ? (
            <>
              Do not have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={toggleForm}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={toggleForm}
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default GetStartedModal;