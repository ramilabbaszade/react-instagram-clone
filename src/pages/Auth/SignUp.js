import React from 'react'
import AuthFrame from '../../components/UI Elements/components/AuthFrame/AuthFrame'

import './SignUp.css'

const SignUp = () => {
    return (
        <div className="signup">
            <div className="signup-container container">
                <div className="signup-frame">
                    <AuthFrame signup>
                        <form className="login-form">
                            <input type="text" placeholder="Phone number or email" />
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button>Submit</button>
                        </form>
                    </AuthFrame>
                </div>
            </div>
        </div>
    )
}

export default SignUp
