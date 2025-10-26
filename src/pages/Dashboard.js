import React from 'react';
import '../components/ProtectedRoute';
const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <p>This is a protected page. Only authenticated users can see this.</p>
    </div>
  );
};

export default Dashboard;