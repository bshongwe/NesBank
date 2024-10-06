import { users, addUser, findUserByEmail } from '../../../data'; // Simulate a database or import your database logic
import bcrypt from 'bcrypt'; // Make sure bcrypt is imported

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const userExists = findUserByEmail(email); // Use your function to check existence
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = { name, email, password: hashedPassword }; // Store hashed password
    addUser(newUser); // Simulate adding the user to the database

    // Respond with user data (omit password for security)
    const { password: _, ...userData } = newUser;
    return res.status(201).json({ user: userData });
    
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
