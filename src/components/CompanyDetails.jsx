

import React from 'react';
import CompanyTable from './CompanyTable';

const Drm = () => {
  const companies = [
    {
      id: 1,
      companyName: "ABC Inc.",
      companyEmail: "abc@example.com",
      numberOfStocks: 1000
    },
    {
      id: 2,
      companyName: "XYZ Corp.",
      companyEmail: "xyz@example.com",
      numberOfStocks: 500
    }
  ];

  return (
    <div>
      <CompanyTable data={companies} />
    </div>
  );
};

export default Drm;


