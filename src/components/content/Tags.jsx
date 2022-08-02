import React ,{useState,useCallback,useEffect}from 'react'
import axios from "axios";


const Tags = () => {
    const [loading,setLoading]=useState(false)
    const [tags,setTags]=useState([]);


// get tags 
const getTags = useCallback(async()=>{
        setLoading(true)
    try{
        await axios
        .get("https://api.realworld.io/api/tags")
        .then((response)=>{
            setLoading(false);
            setTags(response.data.tags);
            // console.log(response.data.tags);
        })
    }catch(err){
        console.log(err)
    }
},[])

// useEffect function
useEffect(()=>{
        getTags();
    },[getTags])


return (
    <>
    {loading ? 
        <p className="loading">Loading... </p> 
    : 
    <> 
        {tags.map(tag => <button className="tags-btn">{tag}</button> )} 
    </>
    }
    </>
)}

export default Tags
