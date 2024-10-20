import authService from "../../../services/authService"; // Facilitates Auth
import Cors from 'cors'; // for middleware

// Initialize the cors middleware
const cors = Cors({
  methods: ['POST', 'OPTIONS'],
  origin: '*', // Adjust the origin as needed
});

// Helper method to wait for a middleware to execute before continuing
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async function handler(req, res) {
  // Run middleware
  await runMiddleware(req, res, cors);

  if (req.method === "POST") {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    try {
      // Attempt to log in user
      const userData = await authService.login(email, password);
      return res.status(200).json({ 
        message: "User logged in successfully.",
        user: userData // Optionally return user data
      });
    } catch (error) {
      return res.status(400).json({ 
        error: error.message || "Login failed. Please try again." 
      }); // Use the error message from authService
    }
  } else {
    // Method Not Allowed
    res.setHeader("Allow", ["POST", "OPTIONS"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
