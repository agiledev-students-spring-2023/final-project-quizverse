import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'testuser' && password === '123') {
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  }

  return (
    <div className="login-page-container">
      <h1 className="login-page-title">Log In</h1>
      <form className="login-page-form" onSubmit={handleSubmit}>
        <div className="login-page-input-container">
          <label htmlFor="username" className="login-page-label">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="login-page-input"
          />
        </div>
        <div className="login-page-input-container">
          <label htmlFor="password" className="login-page-label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="login-page-input"
          />
        </div>
        <button type="submit" className="login-page-button">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
