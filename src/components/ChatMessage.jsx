import React from 'react';
import User from "../assets/User.png";
import Robot from "../assets/Robot.png";

const ChatMessage = ({ sender, message }) => {
    const isRobot = sender === "robot";

    return (
        <div className={`flex items-center ${isRobot ? "self-start" : "self-end"}`}>
            {isRobot && (
                <img className="w-10 h-10 rounded-full border-2 border-gray-300" src={Robot} alt="Robot" />
            )}

            <p className={`${isRobot ? "ml-2" : "mr-2"}`}>
                {message}
            </p>

            {!isRobot && (
                <img className="w-10 h-10 rounded-full border-2 border-gray-300" src={User} alt="User" />
            )}
        </div>
    );
}

export default ChatMessage;