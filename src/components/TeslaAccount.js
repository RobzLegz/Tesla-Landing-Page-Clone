import React from 'react';
import LoginHeader from './LoginHeader';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import "./TeslaAccount.css";

function TeslaAccount() {
    return (
        <div>
            <LoginHeader />
            <div className="all-sign-in">
                <h2>Sign In</h2>
                <div className="signin-form">
                    <div className="input-container">
                        <div id="toptop" className="email-container">
                            <label>Email Address</label>
                            <p><InfoOutlinedIcon className="pointer" style={{ fill: 'rgb(117, 117, 117)' }}/></p>
                        </div>
                        <input type="text" autoComplete="off"/>
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type="password" autoComplete="off"/>
                    </div>
                    <button className="signin-btn">SIGN IN</button>
                    <div className="under-btn-text">
                        <p>Forgot email?</p>
                        <p id="dashdash">|</p>
                        <p>Forgot password?</p>
                    </div>
                    <div className="or-container">
                        <div className="or-line"></div>
                        <p>OR</p>
                        <div className="or-line"></div>
                    </div>
                    <button className="create-account-btn">CREATE ACCOUNT</button>
                </div>
            </div>
        </div>
            
    )
}

export default TeslaAccount
