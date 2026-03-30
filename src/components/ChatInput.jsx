const ChatInput = () => {
    return (
      <div className="flex items-center 
            border-t border-gray-200 bg-white">

                <input
                    className="flex-1 px-3 py-2 
                    border-none outline-none focus:outline-none 
                    text-sm placeholder-gray-400"
                    placeholder="Send a message..."
                />
                <button className="px-4 py-2 
                bg-blue-500 text-white text-sm font-medium 
                hover:bg-blue-600 active:scale-95 transition-all duration-150">
                    Send
                </button>
            </div>
    )
}

export default ChatInput;
