import React from 'react'
import "./settings.css"
import GitHubIcon from '@mui/icons-material/GitHub';


const Settings = () => {
  return (
    <div className="settings-container">
        <input type="text" className="Input first " placeholder="URL of profile picture"></input>
        <input type="text" className="Input sec" placeholder="Username"></input>
        <textarea rows="4" cols="50" className="textarea"  placeholder="Short bio about you"></textarea>
        <input type="email" className="Input sec" placeholder="Email"></input>
        <input type="password" className="Input sec pass" placeholder="Password"></input>
        <button className="Btn">Update Settings</button>
        <p className="or"><span>OR</span></p>
        <button className="Btn-logout">Click here to logout.</button>

        <div className="fotter-container">
            <GitHubIcon className='icon'/>
            <p>Fork on GitHub</p>
        </div>
  </div>
  )
}

export default Settings
