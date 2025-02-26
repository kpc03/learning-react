import React from 'react';
import { useState } from 'react';
import logo from '../../utils/logo.png';


const Header = () => {
    const [btnName, setBtnName] = useState('Login')
    
    return(
        <header>
            <div className="container">
                <div className="logoContainer">
                    <img src={logo} alt="freshForkslogo"/>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>Contact Us</li>
                        <li>Profile</li>
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