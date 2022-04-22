import React from 'react';
import './Navbar.css';
const Navbar = () => {
  
  return (
    <>
   <div className="navbar">
   <div className="container-fluid">
    <div className="navbar-header">
      <img src="./images/logo.png" alt="Manaswi agro" className='Manaswi '/>
    </div>
     <ul className="navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#aboutus">About us</a></li>
      <li><a href="#products">Our Products</a></li>
      <li><a href="#contact">Contact us</a></li>
    </ul> 
  </div>




   </div>
  
  

    
    
    
    
    
    
    </>
  )
}

export default Navbar