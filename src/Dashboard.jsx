// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ totalProducts, totalOrders }) => {
  return (
    <div className='content'>
      <h2>Dashboard</h2>
      <div>
        <h3>Key Metrics</h3>
        <p>Total Products: 20</p>
        <p>Total Orders: 80</p>
      </div>
      <div>
        <h3>Quick Navigation</h3>
        <Link to="/products">
          <button className='button'>Products Management</button>
        </Link>
        <Link to="/orders">
          <button className='button'>Orders Management</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
