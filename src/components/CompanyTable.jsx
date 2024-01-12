
import React from 'react';
import Header from './Header';

const CompanyTable = ({ data }) => {
  return (
    <>
      <Header />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Company Email</th>
            <th>Number of Stocks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((company) => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.companyName}</td>
              <td>{company.companyEmail}</td>
              <td>{company.numberOfStocks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CompanyTable;