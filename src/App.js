import React from 'react';
import { BrowserRouter as Router, Route, Link,  Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProductsManagement from './ProductsManagement';
import OrdersManagement from './Orders';
import "./App.css";

function App() {
  return (
    <Router>
      <div>
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
    <h1 className="text-white text-xl font-bold text-center">MODERN ERP SYSTEM</h1>
    <ul className="flex space-x-4">
      <li>
        <Link to="/" className="text-white hover:text-gray-300">Dashboard</Link>
      </li>
      <li>
        <Link to="/orders" className="text-white hover:text-gray-300">Orders</Link>
      </li>
      <li>
        <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
      </li>
    </ul>
  </nav>

        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/products" element={<ProductsManagement/>} />
          <Route path="/orders" element={<OrdersManagement/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
