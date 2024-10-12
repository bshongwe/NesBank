import axios from 'axios';

// Get the API URL from the environment variable
const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api/auth'; // Fallback to default if not set

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to include the JWT token in the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      config.headers['Authorization'] = `Bearer ${user.token}`; // Attach token to headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const authService = {
  login: async (email, password) => {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data)); // Save user data to local storage
      }
      return response.data;
    } catch (error) {
      console.error('Error during authentication:', error.response?.data || error.message); // Log detailed error
      throw new Error(error.response?.data?.error || 'Login failed. Please try again.'); // Use server's error message if available
    }
  },

  signUp: async (fullName, email, password) => {
    // Input validation
    if (!fullName || !email || !password) {
      throw new Error('All fields are required');
    }
    try {
      const response = await axiosInstance.post('/signup', { fullName, email, password });
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data)); // Save user data to local storage
      }
      return response.data; // Return the response
    } catch (error) {
      console.error('Error during authentication:', error.response?.data || error.message); // Log detailed error
      throw new Error(error.response?.data?.error || 'Sign up failed. Please try again.'); // Use server's error message if available
    }
  },

  logout: () => {
    localStorage.removeItem('user'); // Clear user data from local storage
  },

  isAuthenticated: () => {
    const user = localStorage.getItem('user');
    return user !== null; // Check if user data is in local storage
  },

  getUser: () => {
    return JSON.parse(localStorage.getItem('user')); // Return parsed user data
  },
};

export { axiosInstance }; // Exporting axios instance for reuse if needed
export default authService;
