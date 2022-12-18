import {React, useState, useEffect} from 'react'
import Navbar from './Navbar'
import Bgvideo from '../assets/bg-video.mp4'
import Bannerimg from '../assets/banner.png'
import { Link } from 'react-router-dom'
// import {auth,fs} from '../Config/Config'
// import { IndividualFilteredProduct } from './IndividualFilteredProduct'
import Footer from './Footer'



export const Home = (props) => {

 
  return (
    <>
      <Navbar/>
      <div className="main">
        <div className="overlay"></div>
        <video src={Bgvideo} autoPlay loop muted/>
        <div className="content">
          <h1>HOUDINI</h1>
          <p>Nyeste model 2022</p>
          <Link to="/allcollections"><button className='btn-shop'>Køb nu</button></Link>
        </div>
        </div>
        <br /><br />
        <div className="banner">
        <div className="overlay2"></div>
        <img src={Bannerimg} alt="banner"/>
        <div className="content2">
          <h1>F R O N T S T A G E </h1>
          <Link to="/allcollections"><button className='btn-shop'>Køb nu</button></Link>
        </div>
        <br /><br />       
            </div>
            <Footer/>  
            </>
    )
}

