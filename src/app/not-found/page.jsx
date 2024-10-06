"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import next/image for optimized images
import styles from './NotFound.module.css'; // Assuming you have CSS styles here

const NotFound = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Ensuring the router and client-side code is only used after the component has mounted
    setIsMounted(true);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (isMounted) {
      // Redirect to search results or show an alert with the search term
      alert(`Searching for: ${searchTerm}`);
      // For redirection, you can use:
      // router.push(`/search?term=${searchTerm}`);
    }
  };

  if (!isMounted) {
    return null; // Do not render anything if the component hasn't mounted yet
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-900">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <h2 className="mt-4 text-2xl text-white">Page Not Found</h2>
        <p className="mt-2 text-gray-300">
          Sorry, the page you are looking for does not exist.
        </p>

        {/* Optimized Image using next/image */}
        <div className="mt-8 w-1/2 md:w-1/3 rounded-lg shadow-lg">
          <Image 
            src="/images/next.svg" // Ensure you have an image in the public/images folder
            alt="Not Found Illustration"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Search Functionality */}
        <form onSubmit={handleSearchSubmit} className="mt-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded bg-gray-800 text-white placeholder-gray-500 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 text-black bg-white rounded hover:bg-gray-200 transition duration-300 ease-in-out"
          >
            Search
          </button>
        </form>

        {/* Navigation Links */}
        <div className="mt-6">
          <p className="text-gray-300">Or check out these popular links:</p>
          <div className="mt-2 flex flex-col space-y-2">
            <Link href="/features" className="text-white hover:underline">Features</Link>
            <Link href="/pricing" className="text-white hover:underline">Pricing</Link>
            <Link href="/contact" className="text-white hover:underline">Contact Us</Link>
          </div>
        </div>

        {/* Button to go back home */}
        <Link
          href="/"
          className="mt-6 inline-block px-4 py-2 text-black bg-white rounded hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
