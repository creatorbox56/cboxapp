import React from 'react'
import "../styles/Header.module.scss";

export default function MenuItem(props) {
    return(
        <div className="dropdown-item">
            {props.children}
        </div>
    )
}