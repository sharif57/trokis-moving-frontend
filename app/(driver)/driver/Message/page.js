'use client'
import React, { useState } from "react";

const App = () => {
  const [chats] = useState([
    {
      id: 1,
      name: "Lisa Benet",
      message: "Hey! How are you?",
      time: "10:20 AM",
      avatar: "https://via.placeholder.com/40",
      messages: [
        { sender: "Lisa", text: "Hey! How are you?", time: "10:20 AM" },
        { sender: "You", text: "I'm good, how about you?", time: "10:21 AM" },
        { sender: "Lisa", text: "Just got here, so 5 more days!", time: "10:22 AM" },
      ],
    },
    {
      id: 2,
      name: "Ben",
      message: "What’s up?",
      time: "10:10 AM",
      avatar: "https://via.placeholder.com/40",
      messages: [
        { sender: "Ben", text: "What’s up?", time: "10:10 AM" },
        { sender: "You", text: "Nothing much, you?", time: "10:11 AM" },
      ],
    },
  ]);

  const [currentChat, setCurrentChat] = useState(chats[0]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;
    const updatedChat = {
      ...currentChat,
      messages: [
        ...currentChat.messages,
        { sender: "You", text: message, time: new Date().toLocaleTimeString() },
      ],
    };
    setCurrentChat(updatedChat);
    setMessage("");
  };

  return (
    <div className="flex max-h-fit bg-gray-100">
      {/* Chat List */}
      <div className="w-1/4 bg-white shadow-md overflow-y-auto ">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setCurrentChat(chat)}
            className={`flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-200 ${
              currentChat.id === chat.id ? "bg-gray-200" : ""
            }`}
          >
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-800">{chat.name}</p>
              <p className="text-sm text-gray-500 truncate">{chat.message}</p>
            </div>
            <p className="text-xs text-gray-500">{chat.time}</p>
          </div>
        ))}
      </div>

      {/* Chat Conversation */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center p-4 bg-white shadow-md">
          <img
            src={currentChat.avatar}
            alt={currentChat.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-4">
            <p className="font-medium text-gray-800">{currentChat.name}</p>
            <p className="text-sm text-green-500">online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {currentChat.messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg shadow ${
                  msg.sender === "You"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p>{msg.text}</p>
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
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={sendMessage}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
