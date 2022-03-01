import React from "react";
import icoGlobe from "../images/globe.png"


export default function Navbar(){
    return(
        <nav>
            <img src={icoGlobe} className="nav--ico" alt=""/>
            <p>my travel journal</p>
        </nav>
    )
}