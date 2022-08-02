import React ,{ useState }from 'react'
import axios from 'axios';
import "./signup.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import {NavLink} from 'react-router-dom'

const url = "https://api.realworld.io/api/users"

const SignUp = () => {
  const [data , setData ]= useState({
    username:'',
    email:"",
    password:""
  })

  const submit=async(e)=>{
    e.preventDefault();
    await axios.post(url , {
      username:data.username,
      email:data.email,
      password:data.password
    }).then(res=>{
      console.log(res.data);
    })
  }

  const handleSubmit =(e) => {
    const newData = {...data}
    newData[e.target.id]=e.target.value;
    setData(newData);
    console.log(newData)

    // try{
      // const res= await axios.post(url , {data});
      // console.log(res.data);
    // }catch(err){
      // console.log(err.response);
    // }
  }

return (
    <div className="signUp-container">
      <h1>Sign up</h1>
      <NavLink to="/login" className="link"><h6>Have an account?</h6></NavLink>
      
      <form className="form" onSubmit={(e)=>submit(e)}>
          <input 
            type="text" 
            placeholder="Username"
            className="input" 
            id="username" 
            value={data.username} 
            onChange={(e)=>{handleSubmit(e)}} 
          />

          <input 
            type="email" 
            placeholder="Email"
            className="input fill" 
            id="email" 
            value={data.email} 
            onChange={(e)=>{handleSubmit(e)}} 
          />

          <input 
            type="Password" 
            placeholder="Password"
            className="input fill" 
            id="password" 
            value={data.password} 
            onChange={(e)=>{handleSubmit(e)}} 
          />

          <button type="submit" className="btn"> Sign up</button>

          {/* <NavLink to="/register"></NavLink> */}
      </form>

      <div className="fotter-container">
        <GitHubIcon className='icon'/>
        <p>Fork on GitHub</p>
      </div>
    </div>

    )
}

export default SignUp