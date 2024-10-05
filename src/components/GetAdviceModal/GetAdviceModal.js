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
    "hello": "Hi! How can I assist you today?",
    "what is your name?": "My name is NesBot, here to help you navigate the NesBank app. How can I assist you today?",
    "how are you?": "I'm just a bot, but I'm here to help!",
    "help": "What would you like help with? I'm here to provide advice.",
    "bye": "Goodbye! Have a great day!",
    "what is currency trading?": "Currency trading, or forex trading, involves buying and selling currencies to make a profit. Would you like to know more about how it works?",
    "how can I invest in currencies?": "You can invest in currencies through our trading platform. Do you want guidance on setting up your account?",
    "what are the current exchange rates?": "I can help you check the current exchange rates. Please specify which currencies you're interested in.",
    "how do I open an investment account?": "To open an investment account, visit the investment section in the app or I can guide you through the process.",
    "what is the minimum deposit for trading?": "The minimum deposit for trading is usually $100. Would you like to know more about trading options?",
    "what are the risks of currency trading?": "Currency trading can be risky due to market volatility. It's important to do your research and invest wisely.",
    "can I set up alerts for exchange rates?": "Yes, you can set up alerts in your account settings to notify you of changes in exchange rates.",
    "what is a trading strategy?": "A trading strategy is a plan to buy and sell currencies based on specific market conditions. Would you like help developing one?",
    "tell me about your investment options": "We offer various investment options including stocks, bonds, and mutual funds. Which one are you interested in?",
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
    const botResponse = responses[userMessage.toLowerCase()] || "Sorry, I didn't understand that.";
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