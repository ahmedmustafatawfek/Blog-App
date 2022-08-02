import React from 'react'
import "./newarticle.css"
import GitHubIcon from '@mui/icons-material/GitHub';


const NewArticle = () => {
  return (
    <div className="newArticle-container">
    <input type="text" className="Input first" placeholder="Article Tittle"></input>
    <input type="text" className="Input" placeholder="What's this article about?"></input>
    <textarea rows="4" cols="50" className="textarea"  placeholder="Write your article (in markdown)"></textarea>
    <input type="text" className="Input" placeholder="Enter tags"></input>
    <button className="Btn">Publish Article</button>

    <div className="fotter-container">
      <GitHubIcon className='icon'/>
      <p>Fork on GitHub</p>
    </div>
  </div>
  )
}

export default NewArticle
