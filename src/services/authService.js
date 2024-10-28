import axios from 'axios';

// Gets API URL from ENVs
const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api/auth'; // Fallback to default if not set

// Creates an axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Adds request interceptor to include JWT token in headers
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
      throw new Error(error.response?.data?.error || 'Login failed. Please try again.'); // Server's error message (ALT)
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
      return response.data;
    } catch (error) {
      console.error('Error during authentication:', error.response?.data || error.message); // Log detailed error
      throw new Error(error.response?.data?.error || 'Sign up failed. Please try again.'); // Server's error message (ALT)
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
    return JSON.parse(localStorage.getItem('user')); // Returns parsed user data
  },

  updateProfile: async (profileData) => {
    try {
      const response = await axiosInstance.put('/profile', profileData);
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error.response?.data || error.message);
      throw new Error(error.response?.data?.error || 'Profile update failed. Please try again.'); // handle sending of updated profile data to backend server
    }
  },
};

export { axiosInstance };
export default authService;
