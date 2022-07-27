import React from 'react'
import "./signup.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import {NavLink} from 'react-router-dom'


// ("https://api.realworld.io/api/users")
// <NavLink to="/GlobalFeed" className="btn">Sign up</NavLink>


const SignUp = () => {
  return (
    <div className="signUp-container">
      <h1>Sign up</h1>
      <h6>Have an account?</h6>
      <input type="text" className="input" placeholder="Username"></input>
      <input type="email" className="input" placeholder="Email"></input>
      <input type="Password" className="input" placeholder="Password"></input>
      <NavLink to="/myfeed" className="btn">Sign up</NavLink>

      <div className="fotter-container">
        <GitHubIcon className='icon'/>
        <p>Fork on GitHub</p>
      </div>
    </div>

    )
}

export default SignUp