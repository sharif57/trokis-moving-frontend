"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Message = () => {
  const [chats] = useState([
    {
      id: 1,
      name: "Lisa Benet",
      message: "Hey! How are you?",
      time: "10:20 AM",
      avatar: "/images/user.png",
      messages: [
        { sender: "Lisa", text: "Hey! How are you?", time: "10:20 AM" },
        { sender: "You", text: "I'm good, how about you?", time: "10:21 AM" },
        {
          sender: "Lisa",
          text: "Just got here, so 5 more days!",
          time: "10:22 AM",
        },
      ],
    },
    {
      id: 2,
      name: "Ben",
      message: "What’s up?",
      time: "10:10 AM",
      avatar: "/images/profle.png",
      messages: [
        { sender: "Ben", text: "What’s up?", time: "10:10 AM" },
        { sender: "You", text: "Nothing much, you?", time: "10:11 AM" },
      ],
    },
    {
      id: 3,
      name: "Ben",
      message: "What’s up?",
      time: "10:10 AM",
      avatar: "/images/user.png",
      messages: [
        { sender: "Ben", text: "What’s up?", time: "10:10 AM" },
        { sender: "You", text: "Nothing much, you?", time: "10:11 AM" },
      ],
    },
    {
      id: 4,
      name: "Ben",
      message: "What’s up?",
      time: "10:10 AM",
      avatar: "/images/profle.png",
      messages: [
        { sender: "Ben", text: "What’s up?", time: "10:10 AM" },
        { sender: "You", text: "Nothing much, you?", time: "10:11 AM" },
      ],
    },
  ]);

  const [currentChat, setCurrentChat] = useState(chats[0]);
  const [message, setMessage] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Set the current time when the component mounts
    setCurrentTime(new Date().toLocaleTimeString());
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;
    const updatedChat = {
      ...currentChat,
      messages: [
        ...currentChat.messages,
        { sender: "You", text: message, time: currentTime },
      ],
    };
    setCurrentChat(updatedChat);
    setMessage("");
    setCurrentTime(new Date().toLocaleTimeString()); // Update time after sending the message
  };

  return (
    <div className="flex flex-col md:flex-row px-10 mx-auto h-screen bg-gray-100">
      {/* Fixed Sidebar */}
      <div className="md:w-1/4 bg-white shadow-md border-r h-full overflow-y-auto fixed md:relative">
        <div className="p-4 border-b bg-blue-500 text-primaryText">
          <h2 className="text-lg font-semibold">Chats</h2>
        </div>
        <div className="mt-4">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setCurrentChat(chat)}
              className={`flex items-center space-x-4 p-4 cursor-pointer hover:bg-blue-50 transition ${
                currentChat.id === chat.id ? "bg-blue-100" : ""
              }`}
            >
              <Image
                height={40}
                width={40}
                src={chat.avatar}
                alt={chat.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-800">{chat.name}</p>
                <p className="text-sm text-gray-500 truncate">{chat.message}</p>
              </div>
              <p className="text-xs text-gray-400">{chat.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Content */}
      <div className="flex-1 flex flex-col md:ml-1/4">
        {/* Header */}
        <div className="p-4 bg-white border-b shadow flex items-center">
          <Image
            height={40}
            width={40}
            src={currentChat.avatar}
            alt={currentChat.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4">
            <p className="font-medium text-gray-800">{currentChat.name}</p>
            <p className="text-sm flex items-center text-green-500">
              <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
              Online
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {currentChat.messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"} mb-3`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs shadow-md ${
                  msg.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                <p>{msg.text}</p>
                <span className="text-xs mt-1 block text-right opacity-70">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center p-4 bg-white border-t">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            aria-label="Type your message"
            className="flex-1 px-4 py-2 border text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={sendMessage}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
