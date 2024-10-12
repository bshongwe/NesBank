import authService from "../../../services/authService"; // Adjust the import path as needed
import Cors from 'cors'; // for middleware

// Initialize the cors middleware
const cors = Cors({
  methods: ['POST', 'OPTIONS'],
  origin: 'http://localhost:3000', // Adjusted origin to match frontend domain
});

// Helper method to wait for a middleware to execute before continuing
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (req.method === "POST") {
    const { fullName, email, password } = req.body;

    try {
      // Signup logic
      await authService.signUp(fullName, email, password);
      return res.status(200).json({ message: "User registered successfully." });
    } catch (error) {
      return res.status(400).json({ error: "Signup failed. Please try again." });
    }
  } else {
    // Method Not Allowed
    res.setHeader("Allow", ["POST", "OPTIONS"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
