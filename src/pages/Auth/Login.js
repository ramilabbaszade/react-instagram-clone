import React from 'react'
import AuthFrame from '../../components/UI Elements/components/AuthFrame/AuthFrame'
import signupImage from '../../assets/img/insta1i.png'

import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="login-container container">
                <div className="login-image">
                    <img className="" src={signupImage} alt="" />
                </div>
                <div className="login-frame">
                    <AuthFrame login>
                        <form className="login-form">
                            <input type="text" placeholder="Phone number, username or email" />
                            <input type="text" placeholder="Password" />
                            <button>Submit</button>
                            <small>Forgot password?</small>
                        </form>
                    </AuthFrame>
                </div>
            </div>
        </div>
    )
}

export default Login
