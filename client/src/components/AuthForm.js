// client/src/components/AuthForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthForm.css'; // Update the import path

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, password });
  };

  return (
    <div className="auth-form-container">
      <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
      </form>
      <p className="auth-form-link">
        {type === 'login' ? (
          <>
            Don't have an account? <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            Already have an account? <Link to="/login">Login</Link>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForm;