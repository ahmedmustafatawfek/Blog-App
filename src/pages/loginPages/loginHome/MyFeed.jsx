import React from 'react'
import {NavLink} from 'react-router-dom'
import "./loginhome.css"
import Footer from "../../../components/footer/Footer"

const MyFeed = () => {
  return (
<div>
    <div className="news-container">
            <div className="section-left">
            <div className="Title">
                <NavLink to="/myfeed" className="feed"><h4>Your Feed</h4></NavLink>
                <NavLink to="/GlobalFeed" className="feed"><h4>Global Feed</h4></NavLink>
            </div>
            <h5>No articles are here... yet.</h5>
        </div>

        <div className="section-right">
            <h1>Popular Tags</h1>
            <button className="tags-btn">#_implementations</button>
            <button className="tags-btn">#_Welcome</button>
            <button className="tags-btn">#_introduction</button>
            <button className="tags-btn">#_codebaseShow</button>
        </div>
    </div>
        
        <Footer />
</div>
  )
}
export default MyFeed