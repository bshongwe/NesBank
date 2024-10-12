import React, { useState } from "react";
import { toast } from 'react-toastify';
import authService from "../../services/authService"; // Adjust the path based on your folder structure

const GetStartedModal = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  
  // Separate states for sign-in form
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  
  // Separate states for sign-up form
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpFullName, setSignUpFullName] = useState("");
  
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
    // Reset both sign-in and sign-up fields when the form is closed
    setSignInEmail("");
    setSignInPassword("");
    setSignUpEmail("");
    setSignUpPassword("");
    setSignUpFullName("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isSignIn) {
        console.log("Attempting to sign in with", signInEmail, signInPassword);
        // Call the sign-in method from authService using sign-in fields
        await authService.login(signInEmail, signInPassword);
        toast.success("NesBank user successfully signed in!"); // Show success notification
      } else {
        console.log("Attempting to sign up with", signUpFullName, signUpEmail, signUpPassword);
        // Call the sign-up method from authService using sign-up fields
        await authService.signUp(signUpFullName, signUpEmail, signUpPassword);
        toast.success("NesBank user successfully signed up!"); // Show success notification
      }
      onClose(); // Close modal on successful authentication
      resetForm(); // Reset form fields
    } catch (err) {
      console.error("Authentication error:", err);
      setError(err.message || "NesBank authentication failed. Please try again."); // Display error message
      toast.error(err.message || "NesBank authentication failed. Please try again."); // Show error notification
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
          {isSignIn ? (
            // Sign-in form fields
            <>
              <input
                type="email"
                placeholder="Email"
                className="mb-3 w-full p-2 border rounded"
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-3 w-full p-2 border rounded"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
                required
              />
            </>
          ) : (
            // Sign-up form fields
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="mb-3 w-full p-2 border rounded"
                value={signUpFullName}
                onChange={(e) => setSignUpFullName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="mb-3 w-full p-2 border rounded"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="mb-3 w-full p-2 border rounded"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                required
              />
            </>
          )}
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
