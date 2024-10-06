import bcrypt from 'bcrypt';

let users = []; // Array to store user data temporarily

// Function to add a new user
export const addUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10); // Hash the password
  const newUser = { ...user, password: hashedPassword }; // Store hashed password
  users.push(newUser); // Add the user to the array
};

// Function to find a user by email
export const findUserByEmail = (email) => {
  return users.find((user) => user.email === email); // Find user by email
};

// Function to check password
export const checkPassword = async (email, password) => {
  const user = findUserByEmail(email); // Find the user
  if (!user) return false; // Return false if user not found
  
  // Compare password with the hashed password
  const isMatch = await bcrypt.compare(password, user.password); 
  return isMatch; // Return true if passwords match
};

// Additional functions can be added as needed
