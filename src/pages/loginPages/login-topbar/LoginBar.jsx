import React from 'react'
import {NavLink} from 'react-router-dom'
import "./loginbar.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

const  LoginBar = () => {
  return (
    <div className="LoginBar-container">
        <div className="LoginBar-left">
            <div className="logo">Knowledge Blog</div>
        </div>
        <div className="LoginBar-right">
            <NavLink to="/loginhome" className="btn home" >Home</NavLink>

            <div className="icons">
                <AddCircleIcon className="icon"/>
                <NavLink to="/newartical" className="btn">New Article</NavLink>
            </div>

            <div className="icons">
                <SettingsIcon className="icon"/>
                <NavLink to="/settings" className="btn">Settings</NavLink>
            </div>

            <div className="icons">
                <PersonIcon className="icon"/>
                <NavLink to="/user" className="btn user">User</NavLink> 
            </div>

        </div> 
    </div>
  )
}

export default LoginBar