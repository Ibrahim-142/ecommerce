import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = async (msg) => {
    // 1️⃣ Add user message immediately
    setMessages((prev) => [...prev, msg]);

    try {
      // 2️⃣ Call backend API
      const res = await axios.post(
        "/api/chatbot",
        { message: msg.message },
        { withCredentials: true }
      );

      // 3️⃣ Add bot message from response
      const botMessage = {
         sender: "robot", 
        message: res.data.message ,
        products:res.data.data||[],
        suggestions:res.data.suggestions||[]
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      // fallback bot message if error occurs
      setMessages((prev) => [
        ...prev,
        { sender: "robot", message: "Sorry, something went wrong." }
      ]);
    }
  };

  return (
    <div className="flex flex-col mx-auto w-96 h-80 mt-5 bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="flex flex-col flex-1 gap-2 bg-blue-50 overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} message={msg.message} products={msg.products} />
        ))}
      </div>

      <ChatInput addMessage={addMessage} />
    </div>
  );
};

export default Chatbot;