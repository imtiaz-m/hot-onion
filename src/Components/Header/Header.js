import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import background from  '../../images/bannerbackground.png'
const Header = () => {
    return (
        <div className="header">
         <div className="logo"> 
            <div>
                 <img src={logo} alt=""/>
            </div>
            <div className="sign-i-up">
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up</button>
            </div>
        </div>
        <div className="back"><img src={background} alt=""/></div>
        <nav className="">
            
            <a href="/breakfast">Breakfast</a>
            <a href="launch">Launch</a>
            <a href="dinner">Dinner</a>
            
        </nav>
           
        </div>
    );
};

export default Header;