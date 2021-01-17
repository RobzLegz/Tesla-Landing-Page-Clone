import React from 'react';
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



function ShopHeader() {
    return (
        <div className="header white-header">
            <div className="header-logo shop-logo">
                <Link to="/"><img src={TeslaLogo} className="white-logo" alt="tesla logo"/></Link>
                <p className="dash-shop">| SHOP</p>
            </div>
            <div className="header-center">
                <p>CHARGING</p>
                <p>WEHICLE ACCESSORIES</p>
                <p>PARTS</p>
                <p>APPAREL</p>
                <p>LIFESTYLE</p>
            </div>
            <div className="header-right">
                <p>SIGN IN</p>
                <p><SearchIcon className="white-logo"/></p>
                <p><ShoppingCartOutlinedIcon className="white-logo"/></p>
            </div>
            
            <div className="cover-noscroll"></div>
        </div>
    )
}

export default ShopHeader;
