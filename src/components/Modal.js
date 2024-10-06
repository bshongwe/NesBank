import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SignIn from './SignIn'; // Ensure this path is correct
import SignUp from './SignUp'; // Ensure this path is correct

const Modal = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true); // State to track which form to display

  const toggleForm = () => {
    setIsSignIn((prev) => !prev); // Toggle between Sign In and Sign Up
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="w-full max-w-md p-6 bg-white rounded-lg">
              {isSignIn ? (
                <SignIn onClose={onClose} />
              ) : (
                <SignUp onClose={onClose} />
              )}
              <button
                onClick={toggleForm}
                className="mt-4 text-sm text-gray-500 underline"
              >
                {isSignIn ? "Need an account? Sign Up" : "Already have an account? Sign In"}
              </button>
              <button
                onClick={onClose}
                className="mt-4 text-sm text-gray-500 underline"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
