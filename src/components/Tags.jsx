import React from 'react'

const Tags = (props) => {
    console.log(props.tags);
return (
    <>
    <button className="tags-btn">{props.tags}</button>
    </>

)}

export default Tags
