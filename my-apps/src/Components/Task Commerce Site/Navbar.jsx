import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <ul className="nav-left">
                    <li><Link to = '/shop'>Shop</Link></li>
                    <li><Link to = '/about'>About</Link></li>
                </ul>
                <div className="nav-center">
                    <span><Link to = '/'>Commerce</Link></span>
                </div>
                <div className="nav-right">
                    <span><Link to = '/login'>Login</Link></span>
                    <span className="cart-icon"><Link to = '/cart'>🛒 0</Link></span>
                </div>
            </div>
        </nav>
      <Outlet/>
      </>
    );
};

export default Navbar;
