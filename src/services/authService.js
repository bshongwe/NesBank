// services/authService.js
const API_URL = "/api/auth"; // Adjust to your actual API endpoint

const authService = {
  isAuthenticated: () => {
    return !!localStorage.getItem("user"); // Check if user data is stored in local storage
  },
  
  getUser: () => {
    return JSON.parse(localStorage.getItem("user")); // Get user data
  },
  
  login: async (email, password) => {
    const response = await fetch(`${API_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user)); // Store user data
      return data.user;
    } else {
      throw new Error("Login failed");
    }
  },

  signup: async (name, email, password) => {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user)); // Store user data
      return data.user;
    } else {
      throw new Error("Sign Up failed");
    }
  },

  logout: () => {
    localStorage.removeItem("user"); // Remove user data from local storage
  },
};

export default authService;
