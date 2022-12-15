import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import AddProducts from './Components/AddProducts'
import Cart from './Components/Cart'
import NotFound from './Components/NotFound'
import Wishlist from './Components/Wishlist'
import About from './Components/About'
import Contact from './Components/Contact'
import Giftcard from './Components/Giftcard'
import AllCollections from './Components/AllCollections'

function App () {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/add-products" element={<AddProducts/>}/>
        <Route path="/cart" element={<Cart/>}/>       
        <Route path="/wishlist" element={<Wishlist/>}/>       
        <Route path="/about" element={<About/>}/>       
        <Route path="/contact" element={<Contact/>}/>       
        <Route path="/giftcard" element={<Giftcard/>}/>       
        <Route path="/allcollections" element={<AllCollections/>}/>       
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App