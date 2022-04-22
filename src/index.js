import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Navbar from './Navbar.js';
import Home from './Home';
import About from './About.js';
import Product from './Product.js';
import Data from './Data';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';

const rootEle=document.getElementById('root');
const root=createRoot(rootEle);
function array(val){
  return(

       <Product  key={val.id} title={val.title} composition={val.composition} dose={val.dose}
       image={val.image} benefit={val.benefit} ></Product> 

  );
}
root.render(
<>
<Navbar></Navbar>
<Home></Home>
<About></About>
{Data.map(array)}
<Contact></Contact>
</>

)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
