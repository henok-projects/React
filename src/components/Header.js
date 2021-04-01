/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from 'react-typed';
export const Navbar = () => {
    return (       
      <div className ="header-wraper">
             <div className ="main-info">
              <h1> Web Development and Website Promotion. </h1>
              <Typed
               className="typed-text"
               strings ={["Web design","WebDevelopment","Facebook ads SSM","Google ads"]}
               typeSpeed ={40}
               backSpeed={60}
               loop
               />
               <a href ="" className ="btn-main-offer">Contact Me</a>
              </div>  
      </div>

    )
}

export default Navbar;