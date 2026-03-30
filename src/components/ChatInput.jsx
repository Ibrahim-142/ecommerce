import { useState } from "react";

const ChatInput = ({ addMessage }) => {
  const [input, setInput] = useState("");

  function addMessageHandler() {
    if (!input.trim()) return;

    // Calls parent addMessage
    addMessage({ sender: "user", message: input });
    setInput("");
  }

  return (
    <div className="flex items-center p-2 border-t border-gray-200 bg-white">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addMessageHandler()}
        className="flex-1 px-4 py-2 mr-2 rounded-full border border-gray-300 outline-none text-sm placeholder-gray-400
                   focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all duration-150"
        placeholder="Type a message..."
      />
      <button
        onClick={addMessageHandler}
        className="px-5 py-2 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 active:scale-95 transition-all duration-150 shadow-sm"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;