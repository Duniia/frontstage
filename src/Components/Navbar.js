import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { GrShop } from 'react-icons/gr';
import { AiOutlineUser, AiOutlineMenu, AiOutlineHeart, AiOutlineClose} from 'react-icons/ai';
import { auth } from '../Config/Config';

function Navbar() {
    const [isMobile, setIsMobile]=useState(false);

  return (
    <nav className='navbar'>
        <Link to="/"className='logo'>FRONTSTAGE</Link>
            <div className="navlink-icons">
                <Link className='navlink' to="login"><AiOutlineUser/> </Link>
                <Link className='navlink' to="wishlist"><AiOutlineHeart/> </Link>
              <Link className='navlink' to="cart"><GrShop/> </Link>
            </div>    
        
        <ul 
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
        > 
            {/* <Link to="/" className='home'>
                <li>Forside</li>
            </Link>  */}
            <Link to="/allcollections" className='login'>
                <li>Alle kollektioner</li>
            </Link> 
            <Link to="/about" className='about'>
                <li>Om os</li>
            </Link> 
            <Link to="/contact" className='contact'>
                <li>Kontakt</li>
            </Link> 
            <Link to="/giftcard" className='giftcard'>
                <li>Gavekort</li>
            </Link> 
        </ul>
       <button className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
        >
        
        {isMobile ? (
            <AiOutlineClose/>        )
            :(
         <AiOutlineMenu/>
        )
        }
       </button>

    
    </nav>
  )
}

export default Navbar

// const Navbar = () => {

//     // to change burger classes
//     const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
//     const [menu_class, setMenuClass] = useState("menu hidden")
//     const [isMenuClicked, setIsMenuClicked] = useState(false)

//     // toggle burger menu change
//     const updateMenu = () => {
//         if(!isMenuClicked) {
//             setBurgerClass("burger-bar clicked")
//             setMenuClass("menu visible")
//         }
//         else {
//             setBurgerClass("burger-bar unclicked")
//             setMenuClass("menu hidden")
//         }
//         setIsMenuClicked(!isMenuClicked)
//     }

//     return(
//         <div style={{width: '100%', height: '100vh'}}>
//             <nav>
//                 <Link ><img src={logo} to="/" className="logo" alt="logo"/></Link>
//                 <div className="rightside">
                //  <Link className='navlink' to="cart"><AiOutlineUser size="25"/> </Link> */}
                //  <Link className='navlink' to="cart"><AiOutlineHeart size="25"/> </Link>
                //  <Link className='navlink' to="cart"><GrShop size="25"/> </Link>

//                 <br />
            
//                 <div className="burger-menu" onClick={updateMenu}>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>
//                     </div>
//                 </div>
//             </nav>

//             <div className={menu_class}></div>
//         </div>
//     )
// }

// export default Navbar


// function Navbar({user,totalProducts}) {

//   const navigate = useNavigate();

//   const handleLogout=()=>{
//       auth.signOut().then(()=>{
//           navigate.push('/login');
//       })
//   }

//   return (
// <div className='navbar'>
//             <div className='leftside'>
//                 <div className='logo'>
//                     <img src={logo} alt="logo"/>
//                 </div>
//             </div>
//             <div className='rightside'>

//                 {!user&&<>
//                   <Link className='navlink' to="cart"><GrShop size="20"/> </Link>
//                   <Link className='navlink' to="cart"><AiOutlineUser size="20"/> </Link>
//                   <Link className='navlink' to="cart"><GrShop size="20"/> </Link>
//                     <div><Link className='navlink' to="signup">Registrér dig</Link></div>
//                     <div><Link className='navlink' to="login">Login</Link></div>
//                 </>} 

//                 {user&&<>
//                     <div><Link className='navlink' to="/">{user}</Link></div>
//                     <div className='cart-menu-btn'>
//                         <Link className='navlink' to="cart"><GrShop size="20"/>                        </Link>
//                         <span className='cart-indicator'>{totalProducts}</span>
//                     </div>
//                     <div className='btn btn-danger btn-md'
//                     onClick={handleLogout}>LOGUD</div>
//                 </>}                     
                                
//             </div>
//         </div>
//   )
// }

// export default Navbar
