import { users, addUser, findUserByEmail } from '../../../../data'; // Simulate a database or import your database logic

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user object
    const newUser = { name, email, password }; // Note: In a real app, passwords should be hashed!
    users.push(newUser); // Simulate adding the user to the database

    // Respond with user data (omit password for security)
    const { password: _, ...userData } = newUser;
    return res.status(201).json({ user: userData });
  }

  // Check if user already exists
    if (findUserByEmail(email)) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Otherwise, add the user
    addUser({ email, password }); // Hash the password before storing it
    return res.status(201).json({ message: 'User created successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
