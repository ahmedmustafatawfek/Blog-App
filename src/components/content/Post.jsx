import React ,{useEffect,useState} from 'react'
import axios from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../news/news.css"
import {NavLink} from 'react-router-dom'


const Post = () => {
    const [posts,setPosts]=useState([])
    const [loading,setLoading]=useState(false)

    // get posts 
    async function  getPosts(){
        setLoading(true)
    try {
        await axios
            .get("https://api.realworld.io/api/articles?limit=10&offset=0")
            .then((response) => {
                setLoading(false)
                setPosts(response.data.articles)
            });
        } catch (error) {
            console.log(error)
        }
}

useEffect(()=>{
    getPosts();
},[])


return (
    <>
    {loading ? 
        <p className="loading">Loading... </p> 
        :<> 
            {posts.map(post => 
                <div className="post">    
                    <div className="author">
                        <img src="https://api.realworld.io/images/demo-avatar.png" alt="author-img" />
                        <div className="info">
                            <h4>{post.author.username}</h4>
                            <p>November 24, 2021</p>
                        </div>
                        <NavLink to="/register" className="btn"><FavoriteIcon className="like"/>{post.favoritesCount}</NavLink>
                    </div>
                    <div className="details">
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                    </div>
                    <div className="footer">
                        <div className="p">
                            <p>Read more...</p>
                        </div>
                        <div className="btns">
                        {post.tagList.map(tag => <button className="footer-btn">{tag}</button> )}
                        </div>
                    </div>      
                </div>
            )} 
        </>
    }
    </>
)}
export default Post;