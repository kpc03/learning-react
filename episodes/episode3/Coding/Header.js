import React from 'react';
import ReactDOM from 'react-dom';
import "./Header.css";
import logo from './logo.webp';
import userProfile from './profile-icon.svg';
import searchIcon from './search-icon.svg';


function HeaderComp() {
    return (
        <header>
            <img className="logo" src={logo} alt="logo" height="50"/>
            <div className="inputContainer">
                <img src={searchIcon} alt="searchIcon" height="20"/>
                <input type="search" placeholder="Are you finding something 👀, look here !"/>
            </div>
            <img className="userProfile" src={userProfile} alt="user_profile_icon" height="40"/>
        </header>
    );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<HeaderComp/>);