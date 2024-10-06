const authService = {
  // Check if the user is authenticated by verifying the presence of user data in localStorage
  isAuthenticated: () => {
    return !!localStorage.getItem('user'); // Check if user info exists in localStorage
  },

  // Simulate login - this would typically involve an API request
  login: (email, password) => {
    // Mock login: normally, this would send a request to the server
    const user = { email, name: 'John Doe', token: 'fake-jwt-token' }; // Simulate a user object with a token
    localStorage.setItem('user', JSON.stringify(user)); // Save user info and token to localStorage
    return user;
  },

  // Log out by removing the user from localStorage
  logout: () => {
    localStorage.removeItem('user'); // Clear user data from localStorage
  },

  // Get the currently authenticated user from localStorage
  getUser: () => {
    return JSON.parse(localStorage.getItem('user')); // Parse the user data from localStorage
  },

  // Get the user's authentication token (if you're using tokens for API requests)
  getToken: () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.token || null; // Return the token if it exists, else return null
  },
};

export default authService;