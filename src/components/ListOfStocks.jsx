

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removetodo } from '../features/todo/todoSlice';
import Header from './Header';
import './List.css'; 

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="container">
        <h2>List of Stock Purchased </h2>
        <table>
          <thead>
            <tr>
              <th>Name of the stock</th>
              <th>Company Name</th>
              <th> Company Phone</th>
              <th>Price</th>
              <th>Sell Stock</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.name}</td>
                <td>{todo.companyName}</td>
                <td>{todo.email}</td>
                <td>{todo.price}</td>
                <td>
                  <button onClick={() => dispatch(removetodo(todo.id))}>
                    Sell Stock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;

