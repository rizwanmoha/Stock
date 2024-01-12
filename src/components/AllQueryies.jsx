


import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';

const AllQueries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/user/allquery');
        setQueries(response.data.queries);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <Header />
      <div>
        <h2>All Queries</h2>
        <table>
          <thead>
            <tr>
              <th>Name of Stock</th>
              <th>Email of Comany</th>
              <th>Company Name</th>
              <th>Query</th>
              
            </tr>
          </thead>
          <tbody>
            {queries.map((query) => (
              <tr key={query._id}>
                <td>{query.name}</td>
                <td>{query.email}</td>
                <td>{query.comapnyName}</td>
                <td>{query.reason}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllQueries;
