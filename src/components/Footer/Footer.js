import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer container">
            <div className="footer-links">
                <div className="footer-links-1">
                    <Link to='/'>ABOUT</Link>
                    <Link to='/'>HELP</Link>
                    <Link to='/'>PRESS</Link>
                    <Link to='/'>API</Link>
                    <Link to='/'>JOBS</Link>
                </div>
                <div className="footer-links-2">
                    <Link to='/'>PRIVACY</Link>
                    <Link to='/'>TERMS</Link>
                    <Link to='/'>LOCATIONS</Link>
                    <Link to='/'>TOP ACCOUNTS</Link>
                    <Link to='/'>HASHTAGS</Link>
                </div>
                <Link to='/'>LANGUAGE</Link>
            </div>
            <div className="footer-copyright">
                © 2020 Instagram from ramilabbaszade
            </div>
        </div>
    )
}

export default Footer
