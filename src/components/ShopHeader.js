import React from 'react';
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



function ShopHeader() {

    window.addEventListener("scroll",function(){
        const header = document.querySelector(".white-header");
        header.classList.add("scrolled-header");
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
                <p className="header-linkkk">CHARGING</p>
                <p className="header-linkkk">WEHICLE ACCESSORIES</p>
                <p className="header-linkkk">PARTS</p>
                <p className="header-linkkk">APPAREL</p>
                <p className="header-linkkk">LIFESTYLE</p>
            </div>
            <div className="header-right">
                <p className="header-linkkk">SIGN IN</p>
                <p className="header-linkkk"><SearchIcon className="white-logo"/></p>
                <p className="header-linkkk"><ShoppingCartOutlinedIcon className="white-logo"/></p>
            </div>
            
            <div className="cover-noscroll"></div>
        </div>
    )
}

export default ShopHeader;
