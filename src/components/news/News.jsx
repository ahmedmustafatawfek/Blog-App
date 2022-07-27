import React ,{useEffect,useState,useCallback}from 'react'
import "./news.css"
import axios from "axios";
import Post from '../Post';
import Tags from '../Tags';


const News = () => {
    const [posts,setPosts]=useState([])
    const [loading,setLoading]=useState(false)
    const [tags,setTags]=useState([]);

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

    // get tags 
    const getTags = useCallback(async()=>{
        setLoading(true)
    try{
        await axios
        .get("https://api.realworld.io/api/tags")
        .then((response)=>{
            setLoading(false);
            setTags(response.data.tags);
            console.log(response.data.tags);
        })
    }catch(err){
        console.log(err)
    }
},[])

useEffect(()=>{
    getPosts();
    getTags();
},[getTags])


return (
    <>
        <div className="news-container">
            <div className="section-left">
                {loading ? <p className="loading">Loading... </p> :<> {posts.map(post => <Post postData={post}/> )} </>}
            </div>

            <div className="section-right">
                <h1>Popular Tags</h1>
                {loading ? <p className="loading">Loading... </p> : <> {tags.map(tag => <Tags tags={tag}/> )} </>}
            </div>
        </div>
    </>
  )
}

export default News