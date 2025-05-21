import React, { useState } from 'react';

function Register({ onRegister, switchToLogin, message }) {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(`Submitting:`, formDataormData);
    onRegister(formData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />

        <input
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          required
        /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        /><br />

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}

      <p>
        Already have an account?{' '}
        <span
          onClick={switchToLogin}
          style={{ color: 'blue', cursor: 'pointer' }}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;