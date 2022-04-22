import React from 'react';

import './Product.css';
const Products = (props) => {

  return (


<>
<div id="products"><div className="text">Our Products</div></div>
<div id='item'>

 
<div className="images">
<img src={props.image} alt="" />
</div>

<div className="info">
<div className="title"><span>Name</span>: {props.title}</div>
<div className="composition"><span>Composition</span>: {props.composition}</div>
<div className="dose"><span>Dose</span>:{props.dose} </div>
 <div className='benefit'><span>Benefit</span>: {props.benefit}</div> 


</div>
</div>



</>

    
  )
}


export  default Products;