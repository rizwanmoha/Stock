

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../features/todo/todoSlice';
import Header from './Header';
import './PurchasedStock.css'; 
import { useNavigate } from 'react-router-dom';
const AddTodo = () => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email , setEmail] = useState('');
  const [price , setPrice] =  useState('');
  const [phone, setPhone] = useState('');
  const [hotel, sethotel] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleCompanyName = (event) =>{
    setCompanyName(event.target.value);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handlehotel = (event) =>{
    sethotel(event.target.value);
  }

  const handlePrice = (event) =>{
    setPrice(event.target.value);
  }

  const validateForm = () => {
    if (!name || !companyName || !email || !price) {
      setError('All fields are required');
      return false;
    }

  

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is not in a proper format');
      return false;
    }

    setError('');
    return true;
  };

  const addToDosubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(companyName);
    console.log(email);
    console.log(price);
    if (validateForm()) {
      dispatch(addtodo({ name: name, companyName: companyName, email: email, price : price }));
      setName('');
      setCompanyName('')
      setEmail('');
      setPrice('');
      setPhone('');
      sethotel('');
      navigate('/');
    }
  };

  return (
    <>
      <Header />

      <div>
        <h1>
        Purchase Stock
        </h1>
      </div>
      <form onSubmit={addToDosubmit} className="form">
        <label htmlFor="nameInput" className="label">
          Enter Name:
        </label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={handleName}
          className="input"
        />

        <label htmlFor="emailInput" className="label">
          Enter Company Name:
        </label>
        <input
          type="text"
          id="emailInput"
          value={companyName}
          onChange={handleCompanyName}
          className="input"
        />

        <label htmlFor="phoneInput" className="label">
          Enter Email:
        </label>
        <input
          type="email"
          id="phoneInput"
          value={email}
          onChange={handleEmail}
          className="input"
        />

<     label htmlFor="hotelInput" className="label">
          Enter Price:
        </label>
         <input
          type="text"
          id="hotelInput"
          value={price}
          onChange={handlePrice}
          className="input"
        />

        <button type="submit" className="button">
          Submit
        </button>

        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default AddTodo;


