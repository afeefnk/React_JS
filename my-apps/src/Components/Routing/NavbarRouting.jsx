import React from 'react'
import './Navbar.css';
import { Link, Outlet } from 'react-router-dom';

const NavbarRouting = () => {
  return (
   <>
   <nav className="navbar">
    <div className="logo">My Logo</div>
    <div className="menu">
        <h1><Link to = '/'>Home</Link></h1>
        <h1><Link to = '/about'>About</Link></h1>
        <h1><Link to = '/service'>Service</Link></h1>
        <h1><Link to = '/contact'>Contact</Link></h1>
    </div>
</nav>
<Outlet/>
   </>
  )
}

export default NavbarRouting
