import authService from "../../../services/authService"; // Adjust the import path as needed

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    try {
      // Attempt to log in the user
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
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
