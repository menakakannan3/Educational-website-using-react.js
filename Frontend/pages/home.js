import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from "../assets/banner.png"
import "../styles/home.css"
function home() {
  return (
    <div className='home' style={{backgroundImage:`url(${bannerImage})`}}>
        <div className='headerContainer'>
            <Link to="/menu">
            <button>Explore</button></Link>
        </div>
    </div>
  )
}

export default home