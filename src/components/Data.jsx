import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Data = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '', email: '' });
  const [selectedRow, setSelectedRow] = useState(null);
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      await axios.post('/api/add', formData);
      setAddCount(addCount + 1);
      fetchData();
      setFormData({ name: '', age: '', email: '' });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const handleUpdate = async () => {
    if (!selectedRow) {
      alert('Please select a row to update');
      return;
    }

    try {
      await axios.put(`/api/update/${selectedRow._id}`, formData);
      setUpdateCount(updateCount + 1);
      fetchData();
      setFormData({ name: '', age: '', email: '' });
      setSelectedRow(null);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    setFormData({
      name: rowData.name,
      age: rowData.age,
      email: rowData.email
    });
  };

  return (
    // Form for adding data
    <div>
      <h1>Data Form</h1>
      <form>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      {/* Add Button and Update Button */}
        <button type="button" onClick={handleAdd}>Add</button>
        <button type="button" onClick={handleUpdate}>Update</button>
      </form>

{/* Table for Showing Data */}
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} onClick={() => handleRowClick(item)}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

{/* Add Count and Update Count */}
      <h2 style={{color:'red'}}>Counts</h2>
      <div className="count">Add Count: {addCount}</div>
      <div className='count'>Update Count: {updateCount}</div>
    </div>
  );
};

export default Data;
