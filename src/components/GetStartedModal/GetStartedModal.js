import React, { useState } from "react";
import Modal from "../Modal"; // Ensure correct path
import { toast } from "react-toastify"; // Import the toast library
import authService from "../../services/authService"; // Import your auth service
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const GetStartedModal = ({ isOpen, onClose }) => {
  const [isSigningUp, setIsSigningUp] = useState(true); // State to toggle between Sign Up and Sign In
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password input
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Toggle function to switch between Sign In and Sign Up
  const toggleSignInSignUp = () => {
    setIsSigningUp((prev) => !prev);
  };

  // Handle sign-up
  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      await authService.signUp(email, password); // Assume signUp method exists in authService
      toast.success("Account created successfully!"); // Show success toast
      setEmail(""); // Clear email input
      setPassword(""); // Clear password input
      setConfirmPassword(""); // Clear confirm password input
    } catch (error) {
      toast.error("Error creating account. Please try again."); // Show error toast
    }
  };

  // Handle sign-in
  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const user = await authService.login(email, password); // Assume login method exists in authService
      toast.success(`${user.name} has signed in successfully!`); // Show success toast with username
      onClose(); // Close the modal
      navigate("/dashboard"); // Redirect to the dashboard
    } catch (error) {
      toast.error("Invalid credentials, please try again."); // Show error toast
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        {isSigningUp ? (
          <>
            <h2 className="text-lg font-bold">Create Account</h2>
            <form className="mt-4 space-y-4" onSubmit={handleSignUp}>
              {/* Sign Up Form */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email} // Bind email state
                  onChange={(e) => setEmail(e.target.value)} // Handle email input change
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password} // Bind password state
                  onChange={(e) => setPassword(e.target.value)} // Handle password input change
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  required
                  value={confirmPassword} // Bind confirm password state
                  onChange={(e) => setConfirmPassword(e.target.value)} // Handle confirm password input change
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={toggleSignInSignUp}
              >
                Sign In
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold">Welcome Back</h2>
            <form className="mt-4 space-y-4" onSubmit={handleSignIn}>
              {/* Sign In Form */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email} // Bind email state
                  onChange={(e) => setEmail(e.target.value)} // Handle email input change
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password} // Bind password state
                  onChange={(e) => setPassword(e.target.value)} // Handle password input change
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              Do not have an account?{" "}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={toggleSignInSignUp}
              >
                Sign Up
              </button>
            </p>
          </>
        )}
      </div>
    </Modal>
  );
};

export default GetStartedModal;