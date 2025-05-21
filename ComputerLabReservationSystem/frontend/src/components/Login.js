import React, { useState } from 'react';

function Login({ onLogin, switchToRegister, message }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(formData);
    }
  };

  return (
    <div className="form-content">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Login</button>
      </form>
      <p><button className="link-button" type="button">Forgot password?</button></p>
      <p>{message}</p>
      <p>
        Don't have an account?{' '}
        <button
          className="link-button"
          type="button"
          onClick={switchToRegister}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default Login;