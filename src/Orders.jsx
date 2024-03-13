import React, { useState } from 'react';

const OrdersManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', date: '2022-09-15', status: 'Pending' },
    { id: 2, customer: 'Jane Smith', date: '2022-09-16', status: 'Delivered' },
    { id: 3, customer: 'Alice Johnson', date: '2022-09-17', status: 'Shipped' },
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Orders Management</h1>
      <div className="grid grid-cols-1 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow">
            <p className="text-lg font-semibold">Order ID: {order.id}</p>
            <p className="text-md">Customer: {order.customer}</p>
            <p className="text-md">Date: {order.date}</p>
            <p className="text-md">Status: {order.status}</p>
            <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded" onClick={() => handleViewDetails(order)}>
              View Details
            </button>
            <button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-5 rounded" onClick={() => handleUpdateStatus(order.id, 'Shipped')}>
              Update Status
            </button>
            <button className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-5 rounded" onClick={() => handleDelete(order.id)}>
              Delete Order
            </button>
          </div>
        ))}
      </div>
      {selectedOrder && (
        <div className="bg-white p-4 mt-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Order Details</h2>
          <p>Order ID: {selectedOrder.id}</p>
          <p>Customer: {selectedOrder.customer}</p>
          <p>Date: {selectedOrder.date}</p>
          <p>Status: {selectedOrder.status}</p>
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedOrder(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default OrdersManagement;
