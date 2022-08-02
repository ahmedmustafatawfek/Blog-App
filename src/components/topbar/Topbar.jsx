import React from 'react'
import {NavLink} from 'react-router-dom'
import "../topbar/topbar.css"

const  Topbar = () => {
  return (
    <div className="topbar-container">
        <div className="topbar-left">
            <div className="logo">Knowledge Blog</div>
        </div>
        <div className="topbar-right">
            <NavLink to="/" className="btn home" >Home</NavLink>
            <div className="btn-sign">
                <NavLink to="/login" className="btn">Sign in</NavLink>
                <NavLink to="/register" className="btn">Sign up</NavLink>
            </div>
        </div> 
    </div>
  )
}

export default Topbar