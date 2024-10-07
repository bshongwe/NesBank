"use client"; // Turning footer into client component

import React from "react";
import { TextField } from "./Fields";
import Button from "./Button";
import Container from "./Container";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the required CSS for toast notifications

const Footer = () => {
  // Handler for form submission
  const handleNewsletterSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // You can add your logic to send the email to the newsletter API here

    // Show a success toast notification
    toast.success("Successfully joined the newsletter!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <footer>
      <Container>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6">
          <p className="text-xs text-gray-500">
            &copy; NesBank | Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
          <form 
            className="flex w-full justify-center md:w-auto mt-6 md:mt-0"
            onSubmit={handleNewsletterSubmit} // Add submit handler
          >
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            />
            <Button type="submit" color="blue" className="ml-4 flex-none">
              <span className="hidden lg:inline">Join our newsletter</span>
              <span className="lg:hidden">Join newsletter</span>
            </Button>
          </form>
        </div>
        {/* Add ToastContainer to display the toast notifications */}
        <ToastContainer />
      </Container>
    </footer>
  );
};

export default Footer;
