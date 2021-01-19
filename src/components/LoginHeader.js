import React from 'react';
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import {Link} from "react-router-dom";
import LanguageIcon from '@material-ui/icons/Language';

function LoginHeader() {
    return (
        <div className="header">
            <div className="login-header-between">
                <div className="header-logo">
                    <Link to="/"><img src={TeslaLogo} alt="tesla logo"/></Link>
                </div>
                <div className="language-country-container">
                    <LanguageIcon />
                    <p>en-US</p>
                </div>
            </div>
        </div>
    )
}

export default LoginHeader
