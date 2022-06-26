import React from "react";
import navLogo from "../images/nav-world-logo.png";
export default function Navbar(){
    return(
      <nav className="journal-nav">
        <img className="journal-nav-logo" src={navLogo}></img>
        <span className="journal-nav-title">Travel Journal</span>
      </nav>
    );
}