import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const handleRegister = async (formData) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage(result.message || 'Registration successful!');
        setShowLogin(true); // switch to login
      } else {
        setMessage(result.message || 'Registration failed.');
      }
    } catch (error) {
      setMessage(`Registration error: ${error.message}`);
    }
  };

  const handleLogin = async (formData) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setIsLoggedIn(true);
        setMessage('');
      } else {
        setMessage(result.message || 'Login failed.');
      }
    } catch (error) {
      setMessage(`Login error: ${error.message}`);
    }
  };

  const switchToRegister = () => {
    setShowLogin(false);
    setMessage('');
  };

  const switchToLogin = () => {
    setShowLogin(true);
    setMessage('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLogin(true);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <div className="form-box">
          {showLogin ? (
            <Login onLogin={handleLogin} switchToRegister={switchToRegister} message={message} />
          ) : (
            <Register onRegister={handleRegister} switchToLogin={switchToLogin} message={message} />
          )}
        </div>
      ) : (
        <Dashboard onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;