import React from 'react'
import "./news.css"
import Post from '../content/Post';
import Tags from '../content/Tags';


const News = () => {
return (
    <>
        <div className="news-container">
            <div className="section-left">
                <Post/>
            </div>

            <div className="section-right">
                <h1>Popular Tags</h1>
                <Tags/>
            </div>
        </div>
    </>
  )
}

export default News