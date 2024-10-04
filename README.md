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

Kudo to **NesBank** contributors and investors. Special appreciation to the developers of React, Next.js and MongoDB for their amazing tools and frameworks that made this project possible.

