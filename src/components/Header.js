import React from 'react';
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import {Link} from "react-router-dom";

const openBurger = () => {
    const burger = document.querySelector(".burger");
    const burgerNav = document.querySelector(".burger-sidebar");
    const noScroll = document.querySelector(".cover-noscroll");
    burgerNav.classList.toggle("open-burger");
    burger.classList.toggle("animline");
    if(burgerNav.classList.contains("open-burger")){
        noScroll.style.display = "block";
    }else{
        noScroll.style.display = "none";
    }
};

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/"><img src={TeslaLogo} alt="tesla logo"/></Link>
            </div>
            <div className="header-center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar PanelS</p>
            </div>
            <div className="header-right">
                <Link to="/shop"><p id="shop-link">Shop</p></Link>
                <Link to="/teslacloneaccount"><p id="account-link">Tesla Account</p></Link>
                <div className="burger" onClick={openBurger}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
            <div className="burger-sidebar">
                <ul className="burger-links">
                    <li><a href="#">EXISTING INVENTORY</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">USED INVENTORY</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">TRADE-IN</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">CYBERTRUCK</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">ROADSTER</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">SEMI</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">CHARGING</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">POWERWALL</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">COMMERCIAL SOLAR</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">TEST DRIVE</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">FIND US</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">SUPPORT</a></li>
                    <div className="link-underline"></div>
                    <li><a href="#">UNITED STATES</a></li>
                    <div className="link-underline"></div>
                </ul>
            </div>
            <div className="cover-noscroll"></div>
        </div>
    )
}

export default Header
