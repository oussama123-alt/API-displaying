
import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom'
class CompanyDetails extends Component {
     
    state = { 
        results :[] ,
     }
  componentDidMount() { 
        var id= this.props.match.params.id
          var url = "http://localhost:3000/api/companies/"+id+".json";
           fetch(url)
          .then(response => {      
            return response.json();    
          })
          .then(d => {
            this.setState({ results:d });
            
          })
          .catch(error => console.log(error))
          
        }
         
 render() { 
        
   return(
       <div>
    <Table striped bordered hover variant="white">
        <thead>
    <tr>      
      <th>Company Name</th>
      <th>company id</th>    
      <th>company website</th> 
      <th>city</th>  
    </tr>
  </thead> 
  <tbody>
 <tr>
     <td>{this.state.results.name}</td>
     <td>{this.state.results.id}</td>
     <td>{this.state.results.website}</td>
     <td>{this.state.results.city}</td>
 </tr>
  </tbody>
  </Table> 
  <Link to={"/"}><button type="button" class="btn btn-secondary">back</button></Link>
  </div>   
        )
        
        }   
    }

 
export default CompanyDetails;