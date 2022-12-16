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
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quia tempore deserunt itaque nisi. Accusantium commodi ut a perspiciatis, distinctio magnam eos quod, nisi ratione nulla temporibus, at sed necessitatibus.</p>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos commodi fuga sunt culpa atque voluptatem corrupti, dolorum iste molestiae rem totam architecto officia ab, modi doloremque illum. Voluptatibus, perspiciatis suscipit.
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus iste vero, accusamus delectus repudiandae, praesentium cupiditate ipsa porro ad alias rerum aut animi quos quisquam id quidem natus cumque!</h1>
      </h1>
      <Products/>
      </>
    )
}

export default Home;

