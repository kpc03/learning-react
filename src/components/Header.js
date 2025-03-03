import React from 'react';
import { useState } from 'react';
import logo from '../../utils/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    const [btnName, setBtnName] = useState('Login')
    
    return(
        <header>
            <div className="container">
                <div className="logoContainer">
                    <Link to="/"><img src={logo} alt="freshForkslogo"/></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Cart</li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li>
                            <button onClick={() => {
                                btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                            }}>{btnName}</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;