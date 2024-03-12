// OrdersManagement.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrdersManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', orderDate: '2024-03-12', status: 'Pending' },
    { id: 2, customerName: 'Jane Doe', orderDate: '2024-03-10', status: 'Shipped' }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = order => {
    setSelectedOrder(order);
  };

  const handleUpdateStatus = (id, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleDelete = id => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
    setSelectedOrder(null);
  };

  return (
    <div className="content">
      <h2>Orders Management</h2>
      {selectedOrder && (
        <div>
          <h3>Order Details</h3>
          <p>Order ID: {selectedOrder.id}</p>
          <p>Customer Name: {selectedOrder.customerName}</p>
          <p>Order Date: {selectedOrder.orderDate}</p>
          <p>Status: {selectedOrder.status}</p>
          <button className="button" onClick={() => setSelectedOrder(null)}>Close</button>
        </div>
      )}
      <h3>Orders List</h3>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order ID: {order.id} - Customer Name: {order.customerName} - Order Date: {order.orderDate} - Status: {order.status}
            <button className="button" onClick={() => handleViewDetails(order)}>View Details</button>
            <button className="button" onClick={() => handleUpdateStatus(order.id, 'Shipped')}>Mark as Shipped</button>
            <button className="button" onClick={() => handleDelete(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <Link to="/">
          <button className="button">Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default OrdersManagement;
