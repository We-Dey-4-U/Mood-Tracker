// src/components/CommunityForum.js
import React, { useState } from 'react';
import '../styles/CommunityForum.css'; // Import the CSS file


const CommunityForum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [personalizedContent, setPersonalizedContent] = useState([]);

  const addPost = () => {
    if (newPost.trim() !== '') {
      setPosts([...posts, { id: posts.length + 1, content: newPost }]);
      setNewPost('');
    }
  };

  return (
    <div>
      <h2>Community Forum</h2>
      <div>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts..."
        />
        <button onClick={addPost}>Post</button>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;