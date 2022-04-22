import React from 'react';
import  './Contact.css';
import {FaInstagram} from 'react-icons/fa';
import {FaWhatsapp} from  'react-icons/fa';
const Contact = () => {
    const address1=`281, Krishna Niwnas,\n Rabale, Ghanasoli,\n Navi Mumbai 400701.`;
    const address2=`Gate No 595, Near bus stand,\n Ghatnandre Road, Jarandi ,\n Tasgaon, sangli 416311.`;
    const name=`Aniket J.Chavan \n Mob-7756053097` ;
    const style = { color: "red", fontSize: "2em",backgroundColor:"white", cursor:"pointer" };
    
  return (
    <>
    <div id="contact"><div className="heading">Contact Us</div></div>

    <div className="main">
    <div className="address">
<div className="title">Manasvi Crop Science</div>
<div className="company"><div className="com">Company Address</div> {address1}</div>
<div className="home"><div className="hom">Godawoon Address</div>{address2}</div>

    </div>
    <div className="other">
 <div className="kiran">
     {name}     <div className="wa"></div>
 </div>
<div className="center">
<div className="follow">
 <div className="head">follow us for updates</div>
 <div className="social">
 <a href="https://www.instagram.com/manasvicropscience/" target="_blank"><FaInstagram style={style}></FaInstagram></a>
 </div>


</div>
    

     </div>
<div className="ad"></div>
    <div className='naw'>WebDesign and Developed By Suhas Shivajirao Chavan</div>


    </div>
    
 </div>
   
    
    
    
    
    
    </>
  )
}

export default Contact;