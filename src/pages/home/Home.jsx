// import React from 'react'
import React from "react";
import "./home.css"
import Header from "../../components/header/Header"
import News from "../../components/news/News"
import Footer from "../../components/footer/Footer"

const Home = () => {

  return (
    <div>
      <Header />
      <div className="Title">
        <h4>Global Feed</h4>
      </div>
      <News/>
      <Footer />
    </div>
  )
}

export default Home