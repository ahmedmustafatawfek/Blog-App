import React from 'react'
import {NavLink} from 'react-router-dom'


const MyArticles = () => {
  return (
    <div className="news-container">
        <div className="section-left">
          <div className="Title">
              <NavLink to="/MyArticles" className="feed"><h4>My Article</h4></NavLink>
              <NavLink to="/Favorited-Articles" className="feed"><h4>Favorited Articles</h4></NavLink>
          </div>
          <h5>No articles are here... yet.</h5>
        </div>
    </div>
  )
}

export default MyArticles
