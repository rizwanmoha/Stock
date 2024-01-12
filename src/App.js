import React from 'react';
import Addtodo from './components/PurchasedStock';
import Todo  from './components/ListOfStocks';
import Query from './components/Query';
import AllQueryies from './components/AllQueryies';

import CompanyDetails from './components/CompanyDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  
  return (
   

    <>
    <Router>
      
      <Routes>
          
        <Route  path="/" element={<Todo />} />
        <Route path="/book" element={<Addtodo />} />
        <Route path="/query" element={<Query />} />
        <Route path="/allquery" element={<AllQueryies />} />
      
        <Route path="/companyDetails" element={<CompanyDetails />} />
        </Routes>
    
  </Router>
  </>
  );
}

export default App;
