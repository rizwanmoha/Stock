

import React, { useState } from 'react';
import axios from 'axios';
import './Query.css'; 
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Query = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comapnyName: '',
    reason: '',
  });

    const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.comapnyName || !formData.reason) {
      setError('All fields are required');
      return false;
    }

   
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError('Invalid email format');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (validateForm()) {
     
      const backendEndpoint = 'http://localhost:8080/api/v1/user/query';

      try {
        const response = await axios.post(backendEndpoint, formData);

        console.log('Data sent successfully:', response.data);

        navigate('/allquery');
      } catch (error) {
        console.error('Error sending data:', error);
       
      }
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1>
        Please Write your Query
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name of Stock</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email of Comapny</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="hotelName">Comapny Name</label>
        <input
          type="text"
          id="hotelName"
          name="comapnyName"
          value={formData.comapnyName}
          onChange={handleChange}
        />

        <label htmlFor="query">Query:</label>
        <textarea
          id="query"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>

        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default Query;


