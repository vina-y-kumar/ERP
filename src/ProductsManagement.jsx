// ProductsManagement.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', category: 'Category A', price: 10, stockQuantity: 100 },
    { id: 2, name: 'Product B', category: 'Category B', price: 20, stockQuantity: 200 }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stockQuantity: ''
  });

  const [editProduct, setEditProduct] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editProduct) {
      // Update existing product
      const updatedProducts = products.map(product =>
        product.id === editProduct.id ? { ...editProduct, ...formData } : product
      );
      setProducts(updatedProducts);
      setEditProduct(null);
    } else {
      // Add new product
      const newProduct = {
        id: products.length + 1,
        ...formData
      };
      setProducts([...products, newProduct]);
    }
    setFormData({ name: '', category: '', price: '', stockQuantity: '' });
  };

  const handleEdit = product => {
    setFormData(product);
    setEditProduct(product);
  };

  const handleDelete = id => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="content">
      <h2>Products Management</h2>
      <h3>Add/Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          name="stockQuantity"
          value={formData.stockQuantity}
          onChange={handleChange}
          required
        />
        <button type="submit">{editProduct ? 'Edit' : 'Add'}</button>
      </form>
      <h3>Products List</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price} - Stock: {product.stockQuantity}
            <button className="button" onClick={() => handleEdit(product)}>Edit</button>
            <button className="button" onClick={() => handleDelete(product.id)}>Delete</button>
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

export default ProductsManagement;
