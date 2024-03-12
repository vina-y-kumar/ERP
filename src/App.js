// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link,  Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProductsManagement from './ProductsManagement';
import OrdersManagement from './Orders';
import "./App.css";

function App() {
  return (
    <Router>
       <div className="container">
        <header className="header">
          <h1>Modern ERP System</h1>
        </header>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
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
