// src/components/RealTimeChat.js
import React, { useState } from 'react';
import '../styles/RealTimeChat.css'; // Import the CSS file

const RealTimeChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, content: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h2>Real-time Chat</h2>
      <div>
        <div>
          {messages.map((message) => (
            <div key={message.id}>
              <p>{message.content}</p>
            </div>
          ))}
        </div>
        <div>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default RealTimeChat;