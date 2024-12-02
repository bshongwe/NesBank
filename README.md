# 💼 NesBank - Investment Banking App

![Visits Badge](https://badges.pufler.dev/visits/bshongwe/NesBank)
![GitHub Repo Stars](https://img.shields.io/github/stars/bshongwe/NesBank)
![GitHub Forks](https://img.shields.io/github/forks/bshongwe/NesBank)
![GitHub Issues](https://img.shields.io/github/issues/bshongwe/NesBank)
![GitHub License](https://img.shields.io/github/license/bshongwe/NesBank)

**NesBank** is a modern investment banking platform designed to help users manage their investments efficiently, track portfolio performance, and explore new financial opportunities. In addition to core investment features, **NesBank** includes user authentication (sign in/sign out) and a chatbot for personalized investment advice.

---

## 🚀 **Tech Stack**

| **Technology**      | **Description**                                                                                     | **Why Used?**                                                                                                          |
|---------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| **Frontend**        |                                                                                                     |                                                                                                                       |
| React ⚛️            | JavaScript library for building user interfaces.                                                   | Provides dynamic, reusable components and a smooth user experience.                                                  |
| Next.js 🚀          | React framework for building server-side rendered applications.                                     | Enables server-side rendering (SSR) for improved SEO and performance.                                                |
| Tailwind CSS 🖌️    | A utility-first CSS framework for quickly building custom designs.                                   | Provides a highly customizable and responsive design framework for the frontend.                                    |
| **Backend**         |                                                                                                     |                                                                                                                       |
| Node.js 🛠️         | JavaScript runtime environment for building scalable applications.                                  | Ensures a fast, asynchronous, and non-blocking server for handling real-time user interactions.                      |
| Express.js 🧰      | Minimalist web framework for Node.js, used for building RESTful APIs.                               | Simplifies routing, request handling, and API creation, making it efficient for backend development.                |
| **Database**        |                                                                                                     |                                                                                                                       |
| MongoDB 🗃️         | NoSQL database for storing unstructured data.                                                       | Provides flexible and scalable storage for user data and financial information.                                      |
| **Authentication**  |                                                                                                     |                                                                                                                       |
| JWT 🔑              | JSON Web Tokens for stateless authentication.                                                       | Ensures secure, token-based authentication that doesn’t require session storage.                                     |
| **Payment Gateway** |                                                                                                     |                                                                                                                       |
| Stripe 💳           | Payment gateway for handling financial transactions.                                                | Securely handles payments, making it easy for users to deposit and withdraw funds.                                   |
| PayPal 💳           | Online payment system for seamless transaction handling.                                             | Another reliable payment system for secure transactions in the platform.                                            |
| **Containerization**|                                                                                                     |                                                                                                                       |
| Docker 🐳           | Containerization platform for building, shipping, and running applications in isolated environments. | Ensures consistency between development, testing, and production environments.                                       |
| **Cloud Services**  |                                                                                                     |                                                                                                                       |
| Vercel 🌐           | Deployment platform for frontend hosting and serverless functions.                                  | Provides fast, global CDN hosting for frontend assets with CI/CD support.                                           |
| Google Cloud (GCP) 🌩️ | Cloud platform for backend hosting and database management.                                          | Offers scalable and reliable cloud infrastructure for backend services and database storage.                         |
| **Others**          |                                                                                                     |                                                                                                                       |
| MongoDB Atlas 🌍    | Managed database platform for MongoDB.                                                              | Ensures high availability, automated backups, and security features for MongoDB deployments.                         |

---

## 📄 License

NesBank is available under a **dual license**:

- **For Non-Commercial Use:** You may use the software under the terms of [Creative Commons Non-Commercial (CC BY-NC 4.0)](LICENSE-CC-BY-NC.md).
- **For Commercial Use and Open-Source Contributions:** You must use the software under the [GNU Affero General Public License (AGPL-3.0)](LICENSE-AGPL.md).

Choose the license that fits your needs. For commercial usage, you are required to comply with AGPL-3.0, which includes sharing source code modifications.

---

## 🔑 **Key Features**

| **Feature**                          | **Feature Stack**                          | **How it works**                                                                                                                                                    |
|--------------------------------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **🔐 User Authentication**           | React, Next.js, Node.js, MongoDB, JWT      | Secure user login and signup modals, with session persistence via JWT. Users can securely access their investment accounts after signing in.                       |
| **📊 Investment Portfolio Management**| React, MongoDB, Node.js                    | Users can manage and track their investments, view portfolio performance, and access detailed investment data. All data is stored in MongoDB for quick and efficient access. |
| **🤖 Chatbot (Investment Advice)**   | React, Node.js, Custom Chatbot Modal       | The chatbot offers investment tips, suggests new opportunities, and assists users with managing their portfolios. It provides a conversational interface for easy navigation. |
| **💸 Fund Transfers**                | Stripe, PayPal, Node.js                    | Users can securely deposit and withdraw funds via Stripe and PayPal integration. Transactions are handled securely using these payment gateways.                  |

---

## 🔨 **How to Run Locally**

1. Clone the repository:
   ```bash
   git clone https://github.com/bshongwe/nesbank.git
   cd nesbank
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root and add:
   ```bash
   MONGODB_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_API_KEY=your_stripe_key
   PAYPAL_CLIENT_ID=your_paypal_client_id
   ```

4. Start the app:
   ```bash
   npm run dev
   ```

5. Access the app at:
   ```bash
   http://localhost:3000
   ```

---

## 🛡️ **Security**

- **Encryption**: Sensitive user information, including financial data, is encrypted both in transit and at rest.
- **Authentication**: JWT ensures that user sessions are securely maintained across the app, preventing unauthorized access.

---

## 🧑‍💻 **Contributing**

We welcome contributions. Contact us on how you can contribute towards any new features, bug fixes, or enhancements.

---

## 📄 **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) files for details.

---

## 🙏 **Acknowledgments**

Kudos to **NesBank** contributors and investors. Special appreciation to the developers of React, Next.js and MongoDB for their amazing tools and frameworks that made this project possible.

---

Here's the API documentation table with relevant emojis added for better readability:

---

## API Documentation 🚀

This table outlines the available API endpoints, methods, required request bodies, and expected responses for authentication and user management in this application.

| **Endpoint**        | **Method** | **Description**                                             | **Request Body**                                                                                                                                                                           | **Response (Success)**                                                                                                                                                                                                                                                                                                              | **Response (Error)**                                                                                                                                                                                |
|---------------------|------------|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/api/auth/signup`   | `POST`     | 📝 Registers a new user                                         | ```json { "fullName": "John Doe", "email": "johndoe@example.com", "password": "securepassword" } ```                                                                                         | ```json { "id": "64a8b4d...", "fullName": "John Doe", "email": "johndoe@example.com", "token": "jwt.token.here" } ```                                                                                                                                                                                                               | ```json { "message": "Email already exists" } ``` <br/> ⚠️ HTTP Status: `400 Bad Request`                                                                                                                      |
| `/api/auth/login`    | `POST`     | 🔑 Logs in an existing user                                     | ```json { "email": "johndoe@example.com", "password": "securepassword" } ```                                                                                                                 | ```json { "id": "64a8b4d...", "fullName": "John Doe", "email": "johndoe@example.com", "token": "jwt.token.here" } ```                                                                                                                                                                                                               | ```json { "message": "Invalid email or password" } ``` <br/> ⚠️ HTTP Status: `401 Unauthorized`                                                                                                                |
| `/api/auth/logout`   | `POST`     | 🚪 Logs out the current user                                    | N/A                                                                                                                                                                                         | ✅ No response. User session cleared. Local storage should also be cleared client-side.                                                                                                                                                                                                                                                | N/A                                                                                                                                                                                                  |
| `/api/auth/profile`  | `GET`      | 👤 Retrieves the logged-in user's profile                       | N/A                                                                                                                                                                                         | ```json { "id": "64a8b4d...", "fullName": "John Doe", "email": "johndoe@example.com", "createdAt": "2024-01-01T12:34:56Z" } ```                                                                                                                                                                                                     | ```json { "message": "Unauthorized access" } ``` <br/> ⚠️ HTTP Status: `401 Unauthorized`                                                                                                                      |
| `/api/auth/refresh`  | `POST`     | 🔄 Refreshes the JWT token                                      | ```json { "token": "expired.jwt.token" } ```                                                                                                                                                | ```json { "token": "new.jwt.token.here" } ```                                                                                                                                                                                                                                                                                      | ```json { "message": "Token is invalid or expired" } ``` <br/> ⚠️ HTTP Status: `401 Unauthorized`                                                                                                              |

---

### Error Response Format ⚠️

All error responses follow this structure:

```json
{
  "message": "Error message"
}
```

---

### Notes 📝

- **🔐 Authentication**: For protected routes (e.g., `/api/auth/profile`), the `Authorization` header must be included in the request with a valid JWT token:

  ```
  Authorization: Bearer {token}
  ```

- **🛠️ Response Codes**: 
  - `200 OK` for successful requests.
  - `400 Bad Request` for invalid inputs.
  - `401 Unauthorized` for authentication failures (e.g., invalid or expired tokens).
  
- **🔑 Token Handling**: The JWT token must be stored client-side (e.g., localStorage or cookies) after successful login or signup to authorize future requests. 

- **🛑 Session Management**: Use the `/logout` route to terminate the session and clear stored tokens client-side.

---

This table provides a detailed overview of your API endpoints and their functionality. Expand it as the application grows to cover additional features.

---

This version with emojis makes the API documentation more engaging and easy to navigate!

Here's how we can generate GitHub issues based on your project's outlined features and tasks, and denote completed tasks in the `README.md` with a green checkmark (✅) and outstanding ones with a red cross (❌). This structure will provide a clear guide for contributors on the current state of the project and the remaining work to be done.

---

## 🛠️ **Project Features & Status**

### 1. **Frontend: React & Next.js** ⚛️

| Feature                                        | Status    |
|------------------------------------------------|-----------|
| **React & Next.js setup**                      | ✅ Completed |
| **Tailwind CSS integration**                   | ✅ Completed |
| **Responsive user interface (UI)**             | ✅ Completed |

### 2. **Backend: Node.js & Express** 🛠️

| Feature                                        | Status    |
|------------------------------------------------|-----------|
| **Node.js & Express setup**                    | ❌ Outstanding |
| **RESTful API for user authentication**        | Ongoing |
| **Investment transactions API**                | ❌ Outstanding |
| **Chatbot API integration**                    | Ongoing (using a prototype) |

### 3. **Database: MongoDB** 🗃️

| Feature                                        | Status    |
|------------------------------------------------|-----------|
| **MongoDB integration**                        | ✅ Completed |
| **Store user data (authentication)**           | Ongoing |
| **Investment portfolio data**                  | ❌ Outstanding |
| **Transaction history records**                | ❌ Outstanding |

### 4. **Authentication: JWT & AuthService** 🔑

| Feature                                        | Status    |
|------------------------------------------------|-----------|
| **JWT implementation for user sessions**       | Ongoing |
| **AuthService login & signup functionality**   | ✅ Completed |
| **Password recovery mechanism**                | Ongoing |

### 5. **Investment Features** 📈

| Feature                                        | Status    |
|------------------------------------------------|-----------|
| **Investment portfolio management**            | ❌ Outstanding |
| **Transaction history records**                | ❌ Outstanding |
| **Performance analytics & charts**             | ❌ Outstanding |

### 6. **Chatbot: GetAdviceModal** 🤖

| Feature                                        | Status    |
|------------------------------------------------|-----------|
| **AI-powered investment advice chatbot**       | Ongoing |

### 7. **Payment Integration: Stripe & PayPal** 💳

| Feature                                        | Status    |
|------------------------------------------------|-----------|
| **Stripe payment gateway integration**         | ❌ Outstanding |
| **PayPal payment gateway integration**         | ❌ Outstanding |

### 8. **Containerization: Docker** 🐳

| Feature                                        | Status    |
|------------------------------------------------|-----------|
| **Docker containerization for the project**    | ❌ Outstanding |

### 9. **Deployment: Vercel & GCP** 🚀

| Feature                                        | Status    |
|------------------------------------------------|-----------|
| **Vercel frontend deployment**                 | ❌ Outstanding |
| **Google Cloud Platform (GCP) for backend**    | ❌ Outstanding |

---

### GitHub Issues (yet-to-be-created)

| **Issue**                           | **Description**                                                                                   | **Feature**          | **Status**  |
|-------------------------------------|---------------------------------------------------------------------------------------------------|----------------------|-------------|
| **📱 Responsive UI Implementation**    | Implement a responsive UI for the platform using Tailwind CSS, ensuring that it works across all devices and screen sizes. | 🌐 Frontend             | ✅ Completed |
| **💳 Investment Transactions API**     | Develop and integrate a RESTful API to handle investment transactions (buy/sell) for users.       | ⚙️ Backend              | 🔄 Ongoing     |
| **📈 Investment Portfolio Management** | Build the user interface and backend API logic for users to view, add, and track their investments in various asset classes. | 📊 Investment Features  | 🔄 Ongoing     |
| **🤖 AI-Powered Chatbot**              | Integrate an AI-powered chatbot to offer personalized investment advice.                          | 💬 Chatbot              | 🔄 Ongoing     |



