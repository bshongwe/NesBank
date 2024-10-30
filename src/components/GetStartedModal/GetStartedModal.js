import React, { useState, useEffect, useRef } from "react";
import { toast } from 'react-toastify';
import authService from "../../services/authService";
import './GetStartedModal.css'; // Import custom CSS for modal

const GetStartedModal = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isPasswordReset, setIsPasswordReset] = useState(false); // State for password reset form
  const [passwordResetSent, setPasswordResetSent] = useState(false); // State for password reset sent message

  // Separate states for sign-in form
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // Separate states for sign-up form
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpFullName, setSignUpFullName] = useState("");

  // State for password reset form
  const [resetEmail, setResetEmail] = useState("");

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const closeButtonRef = useRef(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setIsPasswordReset(false); // Reset password reset state
    setError(""); // Reset error when toggling forms
  };

  const togglePasswordReset = () => {
    setIsPasswordReset(!isPasswordReset);
    setError(""); // Reset error when toggling forms
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      resetForm(); // Reset form when closing modal
    }
  };

  const resetForm = () => {
    // Reset all fields when form is closed
    setSignInEmail("");
    setSignInPassword("");
    setSignUpEmail("");
    setSignUpPassword("");
    setSignUpFullName("");
    setResetEmail("");
    setError("");
    setPasswordResetSent(false); // Reset password reset sent state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isPasswordReset) {
        console.log("Attempting to reset password for", resetEmail);
        // Call the password reset method from authService using reset email
        await authService.resetPassword(resetEmail);
        toast.success("Password reset link sent to NesBank!");
        setPasswordResetSent(true);
      } else if (isSignIn) {
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
      toast.error(err.message || "NesBank authentication failed. Please try again.", {
        onClose: () => resetForm() // Reset form after toast disappears
      }); // Show error notification
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (closeButtonRef.current) {
      let glowCount = 0;
      const glowInterval = setInterval(() => {
        glowCount++;
        closeButtonRef.current.classList.add("glowing");

        if (glowCount === 3) {
          closeButtonRef.current.classList.remove("glowing");
          closeButtonRef.current.classList.add("spinning");

          setTimeout(() => {
            closeButtonRef.current.classList.remove("spinning");
            glowCount = 0;
          }, 2000); // Spin duration
        }

        setTimeout(() => {
          if (glowCount !== 3) {
            closeButtonRef.current.classList.remove("glowing");
          }
        }, 5000); // Glow duration
      }, 5000); // Interval between glows

      return () => clearInterval(glowInterval); // Cleanup
    }
  }, []);

  if (!isOpen) return null; // Do not render if modal is not open

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackdropClick} // Close on backdrop click
    >
      <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full">
        <button
          ref={closeButtonRef}
          className="absolute top-2 right-2 text-xl text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4">
          {isPasswordReset ? "Reset Password" : isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {error && <p className="text-red-500 text-sm" aria-live="assertive">{error}</p>}
        <form onSubmit={handleSubmit}>
          {isPasswordReset ? (
            passwordResetSent ? (
              // Display message after password reset request is sent
              <>
                <p className="font-bold">Password request sent to NesBank</p>
                <p>Kindly wait for a response in the email used during registration of NesBank account.</p>
              </>
            ) : (
              // Password reset form fields
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mb-3 w-full p-2 border rounded"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Sending Reset Link..." : "Send Reset Link"}
                </button>
              </>
            )
          ) : isSignIn ? (
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
              <button
                type="submit"
                className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                disabled={loading} // Disable button while loading
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
              <p className="text-sm text-center">
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={togglePasswordReset}
                >
                  Forgot Password?
                </span>
              </p>
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
              <button
                type="submit"
                className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                disabled={loading} // Disable button while loading
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </>
          )}
        </form>
        {!isPasswordReset && (
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
        )}
        {isPasswordReset && !passwordResetSent && (
          <p className="mt-4 text-sm text-center">
            Remember your password?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={togglePasswordReset}
            >
              Sign In
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default GetStartedModal;
