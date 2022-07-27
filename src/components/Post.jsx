import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./news/news.css"
import {NavLink} from 'react-router-dom'


const Post = (props) => {

const tags = props.postData.tagList;
const btn= tags.map(tag =>  <button className="footer-btn">{tag}</button>);

return (
    <div className="post">
        <div className="author">
            <img src="https://api.realworld.io/images/demo-avatar.png" alt="author-img" />
            <div className="info">
                <h4>{props.postData.author.username}</h4>
                <p>November 24, 2021</p>
            </div>
            <NavLink to="/signup" className="btn"><FavoriteIcon className="like"/>{props.postData.favoritesCount}</NavLink>
        </div>
        <div className="details">
            <h1>{props.postData.title}</h1>
            <p>{props.postData.description}</p>
        </div>
        <div className="footer">
            <div className="p">
                <p>Read more...</p>
            </div>

            <div className="btns">{btn}</div>
        </div>      
    </div>
)}
export default Post;