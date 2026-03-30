import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const Chatbot = () => {
    return (
        <div className='flex flex-col mx-auto w-96 h-80 mt-5 
        bg-white rounded-2xl shadow-lg border border-gray-200'>
            <div className="flex flex-col flex-1  gap-2 
            bg-blue-50 overflow-y-auto">
                <ChatMessage sender={"user"} message={"hi"} />
                <ChatMessage sender={"robot"} message={"bye"} />
            </div>
            <ChatInput></ChatInput>
        </div>
    )
}

export default Chatbot;