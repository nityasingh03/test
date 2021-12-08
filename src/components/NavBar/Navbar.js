import React from 'react';
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarcontainer container">
        <Link to='/' className="navbar-logo">
          <link rel="shortcut icon" type="image/png" href="https://cdn.shopify.com/static/shopify-favicon.png"/>
          Shopify
        </Link>
        <div className="menu">
          <ul className="menuitems">
            <li>Start</li>
            <li>Sell</li>
            <li>Market</li>
            <li>Manage</li>
          </ul>
          <ul className="menuitems2">
            <li>Pricing</li>
            <li>Learn</li>
            <li>Log in</li>
          </ul>
          <btn className="greenbutton">Try for free</btn>
          

        </div>
      </div>
      
    </div>
  );
}
export default Navbar;