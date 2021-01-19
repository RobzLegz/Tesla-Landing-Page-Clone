import React from 'react';
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";

function LoginHeader() {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/"><img src={TeslaLogo} alt="tesla logo"/></Link>
            </div>
            <div className="header-right">
                
            </div>
        </div>
    )
}

export default LoginHeader
