import React from "react"
import MenuItem from "./MenuItem"
import "../styles/Megamenu.scss";


export const Megamenu = () => {

    return(
        <div className="dropdown">
            <MenuItem>
            <h3>Physical Collection</h3>
            <p>Lorem Ipsum</p>
            </MenuItem>
            <MenuItem>
            <h3>NFTs</h3>
            <p>Lorem Ipsum</p>
            </MenuItem>
            <MenuItem>
            <h3>Installations</h3>
            <p>Lorem Ipsum</p>
            </MenuItem>
        </div>
    )    
}