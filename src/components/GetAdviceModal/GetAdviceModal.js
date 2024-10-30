import React, { useState, useEffect, useRef } from "react";
import Modal from "../Modal"; // Ensure correct path
import '../../styles/chatbot.css'; // Importing the chatbot styles

const GetAdviceModal = ({ isOpen, onClose }) => {
  const [userMessage, setUserMessage] = useState(""); // Stores user input
  const [chatHistory, setChatHistory] = useState([]); // Stores chat conversation
  const [isTyping, setIsTyping] = useState(false); // State to check if bot is typing
  const chatEndRef = useRef(null); // Reference to scroll to the bottom of the chat

  // Predefined responses for the chatbot
  const responses = {
    // greetings
    "hello": "Hi. Thank you for choosing NesBank. How can I assist you today?",
    "hi": "Hello. Thank you for choosing NesBank. How can I assist you today?",
    "how are you?": "I'm just a bot, but I'm here to help. Thank you for choosing NesBank.",
    "bye": "Goodbye! Have a great day. Thank you for choosing NesBank.",
    "goodbye": "Goodbye! Have a great day. Thank you for choosing NesBank.",
    "i'll be back": "Awesome! See you again soon. Have a great day. Thank you for choosing NesBank.",
    "yes": "Great. Awesome! Thank you for your response. Contact a NesBank agent for further assistance.",
    "no": "Aww... sorry about that. Thank you for your response. Contact a NesBank agent for further assistance.",
    "maybe": "Aww... sorry about that. Thank you for your response. Contact a NesBank agent for further assistance.",
    "kind of": "Aww... sorry about that. Thank you for your response. Contact a NesBank agent for further assistance.",
    "have a great day": "Thanks! Likewise. Thank you for choosing NesBank.",
    "good morning": "Good morning. Thank you for choosing NesBank. How can I assist today?",
    "good day": "Good day. Thank you for choosing NesBank. How can I assist today?",
    "good afternoon": "Good afternoon. Thank you for choosing NesBank. How can I assist today?",
    "good evening": "Good evening. Thank you for choosing NesBank. How can I assist today?",
    // general_inquiries
    "what is your name?": "My name is NesBot, here to help you navigate the NesBank app. How can I assist you today?",
    "hi. what is your name?": "My name is NesBot, here to help you navigate the NesBank app. How can I assist you today?",
    "hello. what is your name?": "My name is NesBot, here to help you navigate the NesBank app. How can I assist you today?",
    "good day. what is your name?": "My name is NesBot, here to help you navigate the NesBank app. How can I assist you today?",
    "good afternoon. what is your name?": "My name is NesBot, here to help you navigate the NesBank app. How can I assist you today?",
    "good morning. what is your name?": "My name is NesBot, here to help you navigate the NesBank app. How can I assist you today?",
    "good evening. what is your name?": "My name is NesBot, here to help you navigate the NesBank app. How can I assist you today?",
    "help": "How can I assist? I'm here to provide advice.",
    "I need your help": "How can I assist? I'm here to provide advice.",
    "I need help": "How can I assist? I'm here to provide advice.",
    // customer_relations_&_ratings
    "I am not happy with your service": "Aww... we are sorry to hear that. Please contact a NesBank agent and log your complaint. We, at NesBank, are determined to provide quality services. Thus, if a customer is unhappy, we are determined to correct that undesired experience.",
    "I am concerned about scams": "Kindly verify our services and authenticity with the relevant bodies in the Republic of south Africa concerning NesBank. We believe in operating in transparency. Please further contact a NesBank agent and log your concern. We, at NesBank, are determined to provide quality services. Thus, if a customer is unhappy, we are determined to correct that undesired experience.",
    "I am happy with your service": "Yipee!!! We are happy to hear that. Thank you for choosing NesBank.",
    // investment_basics
    "what is currency trading?": "Currency trading, or forex trading, involves buying and selling currencies to make a profit. Please contact a NesBank agent for indepth and proper guidance.",
    "how can I invest in currencies?": "You can invest in currencies through our trading platform. Please contact a NesBank agent for indepth and proper guidance.",
    "what are the current exchange rates?": "I can help you check the current exchange rates. Please specify which currencies you're interested in. Please contact a NesBank agent for indepth and proper guidance.",
    "what is the minimum deposit for trading?": "The minimum deposit for trading is usually ZAR 100. Please contact a NesBank agent for indepth and proper guidance.",
    "what are the risks of currency trading?": "Currency trading can be risky due to market volatility. It's important to do your research and invest wisely. Please contact a NesBank agent for indepth and proper guidance.",
    "can I set up alerts for exchange rates?": "Yes, you can set up alerts in your account settings to notify you of changes in exchange rates. Please contact a NesBank agent for indepth and proper guidance.",
    // account_management
    "how do I open an investment account?": "To open an investment account, visit the investment section in the app or I can guide you through the process. Please contact a NesBank agent for indepth and proper guidance.",
    "how do I reset my password?": "You can reset your password by visiting the settings section of the app and following the instructions. Please contact a NesBank agent for indepth and proper guidance.",
    // trading_strategies
    "what is a trading strategy?": "A trading strategy is a plan to buy and sell currencies based on specific market conditions. Please contact a NesBank agent for indepth and proper guidance.",
    "what is dollar-cost averaging?": "Dollar-cost averaging is an investment strategy where you invest a fixed amount regularly, regardless of the stock price. Please contact a NesBank agent for indepth and proper guidance.",
    "how do I analyze a stock?": "To analyze a stock, consider its financial health, market conditions, and trends. Please contact a NesBank agent for indepth and proper guidance.",
    "how can I minimize investment risks?": "You can minimize risks by diversifying your portfolio and conducting thorough research. Please contact a NesBank agent for indepth and proper guidance.",
    // financial_education
    "what is a stock market?": "The stock market is a collection of markets where stocks (shares of ownership in businesses) are bought and sold. Please contact a NesBank agent for indepth and proper guidance.",
    "what is compound interest?": "Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods. Please contact a NesBank agent for indepth and proper guidance.",
    "how can I improve my financial literacy?": "You can improve your financial literacy by reading books, taking courses, and following financial news. Please contact a NesBank agent for indepth and proper guidance.",
    "what is risk tolerance?": "Risk tolerance is the degree of variability in investment returns that an individual is willing to withstand. Please contact a NesBank agent for indepth and proper guidance.",
    "what is a financial advisor?": "A financial advisor provides guidance on investments and financial planning. Please contact a NesBank agent for indepth and proper guidance.",
    "how do I diversify my investment portfolio?": "To diversify your portfolio, consider investing in different asset classes, such as stocks, bonds, and real estate. Please contact a NesBank agent for indepth and proper guidance.",
    "what is the difference between stocks and bonds?": "Stocks represent ownership in a company, while bonds are loans made to a company or government. Please contact a NesBank agent for indepth and proper guidance.",
    "how do I read stock charts?": "Stock charts show historical price movements of stocks. Please contact a NesBank agent for indepth and proper guidance.",
    // trading_options
    "can I invest with a small amount of money?": "Yes, many platforms allow you to start investing with small amounts. Please contact a NesBank agent for indepth and proper guidance.",
    "what are penny stocks?": "Penny stocks are low-priced stocks, typically trading below $5. They can be very volatile. Please contact a NesBank agent for indepth and proper guidance.",
    "what is day trading?": "Day trading involves buying and selling securities within the same trading day. Please contact a NesBank agent for indepth and proper guidance.",
    "how can I start trading?": "To start trading, you'll need to open a trading account and fund it. Please contact a NesBank agent for indepth and proper guidance.",
    "what is the best time to invest?": "The best time to invest depends on your financial goals. Generally, a long-term approach is advised. Please contact a NesBank agent for indepth and proper guidance.",
  };

  // Function to simulate typing effect for bot response
  const typeChatbotResponse = (message) => {
    setIsTyping(true);
    const newChatHistory = [{ sender: "user", message: userMessage }, { sender: "bot", message: "" }];
    
    // Update chat history with user message immediately
    setChatHistory((prevHistory) => [...prevHistory, ...newChatHistory]);
    setUserMessage(""); // Clear the input after sending

    let i = 0;
    const typingSpeed = 50; // Speed of typing in milliseconds

    const typeInterval = setInterval(() => {
      if (i < message.length) {
        newChatHistory[1].message += message.charAt(i);
        setChatHistory((prevHistory) => {
          const updatedHistory = [...prevHistory];
          updatedHistory[updatedHistory.length - 1] = newChatHistory[1]; // Update the last message to reflect typing
          return updatedHistory;
        });
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, typingSpeed);
  };

  // Function to handle sending message
  const handleSendMessage = () => {
    if (userMessage.trim() === "") return; // Prevent sending empty messages

    // Get chatbot response and start typing effect
    const botResponse = responses[userMessage.toLowerCase()] || "Sorry, your response is not in my restricted customer response database. Please try again or contact NesBank for clarification";
    typeChatbotResponse(botResponse);
  };

  // Scroll to the bottom of the chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 bg-black rounded-lg glass-background">
        <h2 className="text-lg font-bold mb-4 text-white">Get Advice Chatbot</h2>

        {/* Chat Display */}
        <div className="chat-window mb-4 h-64 p-4 overflow-y-scroll glass-container">
          {chatHistory.length === 0 ? (
            <p className="text-gray-300">Start chatting with <i>NesBot</i>...</p>
          ) : (
            chatHistory.map((chat, index) => (
              <div key={index} className={`message ${chat.sender === "user" ? "text-right" : "text-left"}`}>
                <p className={`inline-block p-3 my-2 rounded-lg ${chat.sender === "user" ? "user-bubble" : "bot-bubble"}`}>
                  {chat.message}
                </p>
              </div>
            ))
          )}
          {/* Scroll to bottom */}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="input-area flex items-center glass-input p-3 rounded-lg">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="flex-1 p-2 bg-transparent border-none text-white focus:outline-none placeholder-gray-400"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="ml-3 px-4 py-2 bg-gradient-to-r from-white to-gray-300 text-black rounded-full shadow-lg hover:opacity-90"
          >
            Send
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default GetAdviceModal;
