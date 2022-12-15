import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import { GrShop } from 'react-icons/gr';
import { AiOutlineUser } from 'react-icons/ai';
import { auth } from '../Config/Config';
import { useNavigate } from 'react-router-dom';

function Navbar({user,totalProducts}) {

  const navigate = useNavigate();

  const handleLogout=()=>{
      auth.signOut().then(()=>{
          navigate.push('/login');
      })
  }

  return (
<div className='navbar'>
            <div className='leftside'>
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            <div className='rightside'>

                {!user&&<>
                  <Link className='navlink' to="cart"><GrShop size="20"/> </Link>
                  <Link className='navlink' to="cart"><AiOutlineUser size="20"/> </Link>
                    <div><Link className='navlink' to="signup">Registrér dig</Link></div>
                    <div><Link className='navlink' to="login">Login</Link></div>
                </>} 

                {user&&<>
                    <div><Link className='navlink' to="/">{user}</Link></div>
                    <div className='cart-menu-btn'>
                        <Link className='navlink' to="cart"><GrShop size="20"/>                        </Link>
                        <span className='cart-indicator'>{totalProducts}</span>
                    </div>
                    <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>LOGUD</div>
                </>}                     
                                
            </div>
        </div>
  )
}

export default Navbar
