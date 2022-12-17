import React from 'react'
import Navbar from './Navbar'
import errorimg from '../assets/404.jpg'

function NotFound() {
  return (
    <>
    <Navbar/>
    <div className='container-fluid'>
      <img src={errorimg} class="errorimg" alt='errorimage'/>
</div>
    </>
     )
}

export default NotFound