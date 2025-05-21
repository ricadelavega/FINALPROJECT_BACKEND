// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      {/* Later: Add reservation form, table, etc. */}
    </div>
  );
};

export default Dashboard;