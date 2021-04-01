/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo1 from "../log.jpg";
//React FONTAWOSEME
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import {faBars} from "@fortawesome/free-solid-svg-icons" ;
export const Navbar = () => {
    return (       
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className ="logo" src={logo1} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <FontAwesomeIcon icon ={faBars} style ={{color:"#fff"}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
               <a class="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
               <a class="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
               <a class="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
               <a class="nav-link" href="#">Experiance</a>
              </li>
              <li className="nav-item">
               <a class="nav-link" href="#">Porfolio</a>
              </li>
              <li className="nav-item">
               <a class="nav-link" href="#">Contact</a>
              </li>             
             </ul>
           
          </div>
        </div>
      </nav>
 

    )
}

export default Navbar;