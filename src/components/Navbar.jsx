import React from 'react';
import './Navbar.css';

const Navbar=()=>{
    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <h2>GoCar</h2>
            </div>
            <div className='navbar-right'>
                <a href="/">Home</a>
                 <a href="/Login">Login </a>
                <a href="/about">About us</a>
               
                
            </div>
        </nav>
    )
}
export default Navbar;