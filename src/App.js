

import React, { Component ,useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './App.css' ;

import CompanyList from './components/companyList';
import CompanyDetails from './components/CompanyDetails';
import Table from 'react-bootstrap/Table';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
   state = {
             
  };
  
  render() { 
    return ( 
      <Router>
      <div className="App">

      <Route path="/" exact render={()=>{return(       
 <div>
    <Table striped bordered hover variant="white">
  <thead>
    <tr>      
      <th>Company Name</th>
      <th>company id</th>    
      <th>details</th>
      <th>hide company</th> 
    </tr>
  </thead>  
  <CompanyList/> 
  </Table>
  
 </div>  
    )}}  />

 <Route path={`/details/:id`} component={CompanyDetails}  />
    </div>
    </Router>
     );
  }
}
 
export default App;



