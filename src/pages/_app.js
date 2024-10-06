import React from 'react';
import Navbar from '../components/navbar/Navbar'; // Adjust the path as needed
import { ToastContainer } from 'react-toastify'; // For toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
    </>
  );
};

export default MyApp;