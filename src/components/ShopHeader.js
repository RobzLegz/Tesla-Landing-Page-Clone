import React from 'react';
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



function ShopHeader() {

    window.addEventListener("scroll",function(){
        document.querySelector(".header-link").style.color = "#333";
        document.querySelector(".header-linki").style.color = "#333";
        document.querySelector(".header-linkk").style.color = "#333";
        document.querySelector(".header-linkkkkk").style.color = "#333";
        document.querySelector(".header-linkkkk").style.color = "#333";
        document.querySelector(".header-linkkkkkk").style.color = "#333";
        document.querySelector(".white-logo").style.filter =  "brightness(0) invert(0)";
        document.querySelector(".white-logos").style.filter =  "brightness(0) invert(0)";
        document.querySelector(".white-logod").style.filter =  "brightness(0) invert(0)";
        const header = document.querySelector(".white-header");
        header.classList.add("scrolled-header");
        const headerLink = document.querySelector(".header-linkkk")
        headerLink.style.color = "#333";
    })

    function refreshPage() {
        window.location.reload(false);
    }

    function returner() {
        return;
    }

    const onscrollStyles = {
        display: "none"
    }

    return (
        <div className="header white-header">
            <div className="header-logo shop-logo">
                <Link to="/"><img src={TeslaLogo} onClick={returner} onscroll={onscrollStyles} className="white-logo" alt="tesla logo"/></Link>
                <Link to="/shop"><p className="dash-shop header-linkkk" onClick={refreshPage}>| SHOP</p></Link>
            </div>
            <div className="header-center">
                <p className="header-link">CHARGING</p>
                <p className="header-linkk">WEHICLE ACCESSORIES</p>
                <p className="header-linkkkk">PARTS</p>
                <p className="header-linkkkkk">APPAREL</p>
                <p className="header-linkkkkkk">LIFESTYLE</p>
            </div>
            <div className="header-right">
                <p className="header-linki">SIGN IN</p>
                <p><SearchIcon className="white-logos"/></p>
                <p><ShoppingCartOutlinedIcon className="white-logod"/></p>
            </div>
            
            <div className="cover-noscroll"></div>
        </div>
    )
}

export default ShopHeader;
