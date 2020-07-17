import React from 'react'
import instaLogo from '../../../../assets/icons/instagram.png'
import appstore from '../../../../assets/img/appstore.png'
import playstore from '../../../../assets/img/playstore.png'

import './AuthFrame.css'
import { Link } from 'react-router-dom'

const AuthFrame = (props) => {
    return (
        <>
            <div className="authframe">
                <div className="authframe-header">
                    <img className="auth-logo" src={instaLogo} alt="" />
                    {props.signup && <h2>Sign up to see photos and videos from your friends.</h2>}
                </div>
                <div className="authframe-body">
                    {props.children}
                    {props.signup && <div className="authframe-body-info">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</div>}
                </div>
            </div>
            <div className="authframe authframe-footer">
                {props.signup && <div>Have an account? <Link to="/login"><strong> Log in</strong></Link></div>}
                {props.login && <div>Don't have an account? <Link to="/signup"> <strong> Sign up</strong></Link></div>}
            </div>
            <div className="getApp">
                <div>Get the app</div>
                <div className="getAppStoreLogos">
                    <img className="appstoreLogo" src={appstore} alt=""/>
                    <img className="playstoreLogo" src={playstore} alt=""/>
                </div>
            </div>
        </>
    )
}

export default AuthFrame
