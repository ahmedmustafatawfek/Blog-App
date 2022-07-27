import React from 'react'
import "./signin.css"
import GitHubIcon from '@mui/icons-material/GitHub';

const SignIn = () => {
  return (
    <div className="signIn-container">
      <h1>Sign in</h1>
      <h6>Need an account?</h6>
      <input type="email" className="input" placeholder="Email"></input>
      <input type="Password" className="input" placeholder="Password"></input>
      <button className="btn">Sign in</button>

      <div className="fotter-container">
        <GitHubIcon className='icon'/>
        <p>Fork on GitHub</p>
      </div>
    </div>
  )
}
export default SignIn
