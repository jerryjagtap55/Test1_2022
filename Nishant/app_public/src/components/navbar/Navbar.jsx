import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <a href="/">Logo</a>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    
                    <li>
                        <a href="/discover">Discover</a>
                    </li>
                    
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="/signup">Sign Up</a>
                <a href="/login">Login</a>
            </div>
        </div>
    )
}

export default Navbar