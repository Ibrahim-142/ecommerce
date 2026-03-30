import React from 'react';
import User from "../assets/User.png";
import Robot from "../assets/Robot.png";

const ChatMessage = ({ sender, message, products }) => {
    const isRobot = sender === "robot";

    return (
        <div className={`flex items-center ${isRobot ? "self-start" : "self-end"}`}>
            {isRobot && (
                <img className="w-10 h-10 rounded-full border-2 border-gray-300" src={Robot} alt="Robot" />
            )}

            <p className={`${isRobot ? "ml-2" : "mr-2"}`}>
                {message}
            </p>

            {products && products.length > 0 && (
                <div
                    className="flex flex-col h-full bg-white shadow-sm border border-slate-200 rounded-2xl overflow-hidden transition hover:shadow-md" >
                    {products.map((product, index) => (
                        <>
                            <div key={index} className="h-48 w-full overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col flex-1 p-4">
                                
                            </div>
                        </>
                    ))}

                </div>
            )}
            {!isRobot && (
                <img className="w-10 h-10 rounded-full border-2 border-gray-300" src={User} alt="User" />
            )}
        </div>
    );
}

export default ChatMessage;