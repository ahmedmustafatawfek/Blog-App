import  React from 'react';
import "./loginhome.css"
import Tags from '../../../components/content/Tags';
import BasicTabs from '../../../components/Basic-Tabs/BasicTabs'

const LoginHome = () => {
return (
    <>
        <div className="news-container">
            <div className="section-left">
                <BasicTabs />
            </div>  
            <div className="section-right fixedTags">
                <h1>Popular Tags</h1>
                <Tags/>
            </div>
        </div>
    </>
    )
}

export default LoginHome