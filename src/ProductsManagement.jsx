import React, { useState } from 'react';

const ProductsManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Samsung Galaxy', category: 'Samrtphone', price: 1000, stock: 10 },
    { id: 2, name: 'Macbook Pro', category: 'Laptop', price: 150000, stock: 5 },
    { id: 3, name: 'HP Victus', category: 'Laptop', price: 120000, stock: 8 },
    { id: 4, name: 'HP Pavillion', category: 'Laptop', price: 18000, stock: 8 },
    { id: 5, name: 'Boat Nirvana', category: 'Sound', price: 3000, stock: 8 },
    { id: 5, name: 'Moto G54', category: 'Smartphone', price: 5000, stock: 80 },
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 0, stock: 0 });
  const [editProductId, setEditProductId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = () => {
    if (editProductId !== null) {
      const editedProducts = products.map((product) =>
        product.id === editProductId ? { ...product, ...newProduct } : product
      );
      setProducts(editedProducts);
      setEditProductId(null);
    } else {
      setProducts([...products, { id: products.length + 1, ...newProduct }]);
    }
    setNewProduct({ name: '', category: '', price: 0, stock: 0 });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (product) => {
    setNewProduct(product);
    setEditProductId(product.id);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Products Management</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                onClick={() => editProduct(product)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 mx-10 ">
        <h2 className="text-xl font-bold mb-2 text-center">{editProductId !== null ? 'Edit Product' : 'Add New Product'}</h2>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="border border-gray-300 p-2 rounded-lg mb-2 "
        />
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="border border-gray-300 p-2 rounded-lg mb-2 "
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="border border-gray-300 p-2 rounded-lg mb-2 "
        />
        <input
          type="text"
          name="stock"
          value={newProduct.stock}
          onChange={handleInputChange}
          placeholder="Stock"
          className="border border-gray-300 p-2 rounded-lg mb-2 "
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2" onClick={addProduct}>
          {editProductId !== null ? 'Save Changes' : 'Add Product'}
        </button>
        {editProductId !== null && (
          <button className="bg-gray-500 text-white px-3 py-1 rounded-md" onClick={() => setEditProductId(null)}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsManagement;
