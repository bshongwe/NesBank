import { users } from '../../../data'; // Simulate a database or import your database logic

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Simple validation (you should implement actual validation)
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Simulate adding user to the database
    const newUser = { name, email, password }; // Store hashed passwords in a real application
    users.push(newUser); // Add to users (replace with your actual DB logic)

    return res.status(201).json({ user: newUser });
  }
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
