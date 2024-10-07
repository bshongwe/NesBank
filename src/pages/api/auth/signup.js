import authService from "../../../services/authService"; // Adjust the import path as needed

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, password } = req.body;

    try {
      // Implement your signup logic here
      await authService.signUp(fullName, email, password);
      return res.status(200).json({ message: "User registered successfully." });
    } catch (error) {
      return res.status(400).json({ error: "Signup failed. Please try again." });
    }
  } else {
    // Method Not Allowed
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
