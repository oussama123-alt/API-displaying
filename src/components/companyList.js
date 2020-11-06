import React, { Component } from 'react';
import '../App.css' ;
import CompanyDetails from './CompanyDetails';
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom'
class CompanyList extends Component {
   
        state = {
        results :[] ,
        currentPage: 1,
        companyPerPage: 100       
        };
        handleClick = this.handleClick.bind(this);
        handleClick(event) {
          this.setState({
            currentPage: Number(event.target.id)
          });
        }
      
 componentDidMount() { 
  for(let i=1; i<= 87; i+=1){
    var url = "http://localhost:3000/api/companies-"+i+".json";
     fetch(url)
    .then(response => {      
      return response.json();    
    })
    .then(d => {
      this.setState({ results:this.state.results.concat(d.results) });
      for(var i=0; i<this.state.results.length; i++){  //add hidden attribut to
    this.state.results[i].hidden= true;
   
  }
    })
    .catch(error => console.log(error)) 
  }
   console.log(this.state.results);
}
hideme = (id)=>{    //change the didden attribut
  let results =this.state.results ;
  let  item =results[id];
  item.hidden =false;
  results[id]=item;
  this.setState({results});
}

render() {   
  const { results, currentPage, companyPerPage } = this.state;
  // Logic for displaying todos
  const indexOfLastCompany = currentPage * companyPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companyPerPage;
  const currentCompanys = results.slice(indexOfFirstCompany, indexOfLastCompany);
  const renderCompanys = currentCompanys.map((company, index) => {
    if(company.hidden ){
      return(   
                
     <tr key ={index}> 
      <td>{company.name}</td>   
      <td>{company.id}</td>
      <td><Link to={"/details/"+company.id}  >details</Link></td>
      <td>
        <button className="btn btn-outline-primary ml-2 my-2 my-sm-0" onClick={()=>{ this.hideme(company.id-1);}} >hide</button>
      </td>
     </tr> )
  }})
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(results.length / companyPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li  class="page-link"
        key={number}
        id={number}
        onClick={this.handleClick}
      >
       {number} 
      </li>
    );
  });

  return (  
  
  <tbody> 
      {renderCompanys}
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    
      {renderPageNumbers}
      
  </ul>
</nav>
  </tbody>  
   
      )}            
        }
 
export default CompanyList ;