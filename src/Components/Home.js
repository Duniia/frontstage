import React from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Bgvideo from '../assets/bg-video.mp4'
import { Link } from 'react-router-dom'


function Home() {
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
      <Products/>
      </>
    )
}

export default Home;

