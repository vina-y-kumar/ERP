import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ totalProducts, totalOrders }) => {
  return (
    <>    
    <br/>
    <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Products</h2>
        <p className="text-gray-600">100</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Orders</h2>
        <p className="text-gray-600">50</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Revenue</h2>
        <p className="text-gray-600">$10,000</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Customers</h2>
        <p className="text-gray-600">500</p>
      </div>
    </div>
    <div className="flex justify-center mt-12 space-x-4">
      <Link to="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Products Management
      </Link>
      <Link to="/orders" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Orders Management
      </Link>
    </div>
  </div></>
  );
}

export default Dashboard;
