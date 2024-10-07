# 💼 NesBank - Investment Banking App

**NesBank** is a modern investment banking platform designed to help users manage their investments efficiently, track portfolio performance, and explore new financial opportunities. In addition to core investment features, **NesBank** includes user authentication (sign in/sign out) and a chatbot for personalized investment advice.

---

## 🚀 **Tech Stack**

### 1. **Frontend: React & Next.js** ⚛️

- **React**: Provides a modular, dynamic front-end experience with reusable components such as user authentication forms, chatbot interactions, and financial dashboards.
- **Next.js**: Utilizes server-side rendering (SSR) to enhance SEO, improve performance, and ensure faster load times for the investment platform.
- **Tailwind CSS**: Enables quick, responsive, and modern UI design, ensuring that the app remains accessible across all devices.

**Why?**  
Combining React and Next.js ensures smooth client-server communication and enhances the app's performance, while Tailwind CSS makes the development of responsive layouts efficient.

### 2. **Backend: Node.js & Express** 🛠️

- **Node.js**: Provides the runtime environment for handling asynchronous user requests and ensures that the platform can scale efficiently.
- **Express**: A minimalistic, fast backend framework used to build RESTful APIs that handle tasks such as user authentication, investment transactions, and chatbot responses.

**Why?**  
This combination makes NesBank's backend lightweight, scalable, and capable of handling real-time requests efficiently.

### 3. **Database: MongoDB** 🗃️

- **MongoDB**: A NoSQL database for storing user data, investment portfolios, transaction history, and chatbot interactions. Its flexibility allows for efficient storage and retrieval of unstructured data related to the investments.

**Why?**  
MongoDB ensures that investment records and financial data are securely stored while being flexible enough to handle ever-changing financial data models.

### 4. **Authentication: JWT & AuthService** 🔑

- **JWT (JSON Web Tokens)**: Provides a secure, stateless authentication mechanism for user sign-in and sign-out operations. Users stay logged in securely during their sessions without having to repeatedly authenticate.
- **AuthService**: Manages authentication operations such as login, signup, and password recovery. This service ensures secure access to the app’s investment features.

**Why?**  
JWT allows for secure user authentication, while AuthService ensures that user sessions and permissions are handled correctly across the platform.

### 5. **Investment Features** 📈

- **Investment Portfolio Management**: Users can view, add, and track their investments across multiple asset classes, including stocks, bonds, and cryptocurrencies.
- **Transaction History**: Records all user transactions, providing a transparent history of buy/sell activities.
- **Performance Analytics**: Provides visual analytics and charts to display the performance of the user's investment portfolio over time.

**Why?**  
The investment features allow users to manage their finances with ease and provide the necessary data to make informed decisions about their financial future.

### 6. **Chatbot: GetAdviceModal** 🤖

- **AI-Powered Chatbot**: Offers personalized investment advice based on user preferences, portfolio performance, and market trends. The chatbot helps users discover new investment opportunities or manage existing ones.

**Why?**  
The chatbot improves user engagement by providing instant assistance, guiding users through complex investment decisions, and offering insights into financial markets.

### 7. **Payment Integration: Stripe & PayPal** 💳

- **Stripe & PayPal**: These payment gateways handle secure deposits and withdrawals, allowing users to transfer funds into their investment accounts.

**Why?**  
Stripe and PayPal ensure that users can securely manage their funds and transactions, making NesBank a reliable financial platform.

### 8. **Containerization: Docker** 🐳

- **Docker**: Containerizes the app to ensure a consistent environment from development to production. This minimizes compatibility issues between different environments.

**Why?**  
Docker ensures that NesBank runs the same way on any machine, making deployments smoother and avoiding configuration issues.

### 9. **Deployment: Vercel & GCP** 🚀

- **Vercel**: Hosts the frontend, delivering optimized assets for faster and more efficient browsing.
- **Google Cloud Platform (GCP)**: Manages the backend and database, ensuring high availability and scalability for the app.

**Why?**  
Vercel ensures quick load times and a great user experience, while GCP provides robust infrastructure for backend services.

## 📄 License

NesBank is available under a **dual license**:

- **For Non-Commercial Use:** You may use the software under the terms of [Creative Commons Non-Commercial (CC BY-NC 4.0)](LICENSE-CC-BY-NC.md).
- **For Commercial Use and Open-Source Contributions:** You must use the software under the [GNU Affero General Public License (AGPL-3.0)](LICENSE-AGPL.md).

Choose the license that fits your needs. For commercial usage, you are required to comply with AGPL-3.0, which includes sharing source code modifications.

---

## 🔑 **Key Features**

### 🔐 User Authentication
- **Feature Stack**: React, Next.js, Node.js, MongoDB, JWT  
- **How it works**: Secure user login and signup modals, with session persistence via JWT. Users can securely access their investment accounts after signing in.

### 📊 Investment Portfolio Management
- **Feature Stack**: React, MongoDB, Node.js  
- **How it works**: Users can manage and track their investments, view portfolio performance, and access detailed investment data. All data is stored in MongoDB for quick and efficient access.

### 🤖 Chatbot (Investment Advice)
- **Feature Stack**: React, Node.js, Custom Chatbot Modal  
- **How it works**: The chatbot offers investment tips, suggests new opportunities, and assists users with managing their portfolios. It provides a conversational interface for easy navigation.

### 💸 Fund Transfers
- **Feature Stack**: Stripe, PayPal, Node.js  
- **How it works**: Users can securely deposit and withdraw funds via Stripe and PayPal integration. Transactions are handled securely using these payment gateways.

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

### GitHub Issues Example

For contributors to join the project and work on outstanding features, here are examples of potential GitHub issues you can create:

1. **Responsive UI Implementation**  
   *Description*: Implement a responsive UI for the platform using Tailwind CSS, ensuring that it works across all devices and screen sizes.  
   *Feature*: Frontend  
   *Status*: ✅ Completed

2. **Investment Transactions API**  
   *Description*: Develop and integrate a RESTful API to handle investment transactions (buy/sell) for users.  
   *Feature*: Backend  
   *Status*: Ongoing

3. **Investment Portfolio Management**  
   *Description*: Build the user interface and backend API logic for users to view, add, and track their investments in various asset classes.  
   *Feature*: Investment Features  
   *Status*: Ongoing

4. **AI-Powered Chatbot**  
   *Description*: Integrate an AI-powered chatbot to offer personalized investment advice.  
   *Feature*: Chatbot  
   *Status*: Ongoing

By clearly outlining these tasks in the project README, and associating them with relevant GitHub issues, contributors can easily understand which features need attention and how they can help!

Let me know if you need help with the GitHub issues or anything else!

