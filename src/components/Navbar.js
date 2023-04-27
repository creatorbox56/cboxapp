import React from "react"
import {Link} from "react-router-dom"

export const Navbar = (props) => {
    return(
    <nav className="navbar">
        <ul className="navbar-nav">
        {props.children}
    </ul>
    
 </nav>
    )
}

export default Navbar;