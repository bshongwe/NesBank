import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

export const metadata = {
  title: "NesBank",
  description: "Bank App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable /> {/* Add ToastContainer here */}
      </body>
    </html>
  );
}
