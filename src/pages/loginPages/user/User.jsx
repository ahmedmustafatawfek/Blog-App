import React from 'react'
import "./user.css"
import SettingsIcon from '@mui/icons-material/Settings';
import {NavLink} from 'react-router-dom'
import Footer from '../../../components/footer/Footer';


const User = () => {
  return (
    <div className="user-container">
        <div className="header">
            <img src="https://cdn0.iconfinder.com/data/icons/emoticons-2/512/27-512.png" alt="logo" className="Icons" />
            <p className="username">Username</p>
            <button className="bTn">
                <SettingsIcon className="icon"/>
                <p className="p">Edit Profile Settings</p>
            </button>
        </div>
        <div className="news-container">
            <div className="section-left">
              <div className="Title">
                  <NavLink to="/MyArticles" className="feed"><h4>My Article</h4></NavLink>
                  <NavLink to="/Favorited-Articles" className="feed"><h4>Favorited Articles</h4></NavLink>
              </div>
              <h5>No articles are here... yet.</h5>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default User
