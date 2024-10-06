import { users } from '../../../data'; // Simulate a database or import your database logic

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Validate the user (you'll need to replace this with your actual validation logic)
    const user = users.find((user) => user.email === email && user.password === password);
    
    if (user) {
      // Respond with user data, omit password for security
      const { password, ...userData } = user;
      return res.status(200).json({ user: userData });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  }
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
