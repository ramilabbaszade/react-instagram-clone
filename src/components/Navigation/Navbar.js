import React from 'react'
import instagramLogo from '../../assets/icons/instagram.png'

import Search from './Search'
import NavLinks from './NavLinks'

import './Navbar.css'

function Navbar() {
    return (
        <nav className="">
            <div className="navigation container">
                <img className="insta-logo" src={instagramLogo} alt="instagram" />
                <Search/>
                <NavLinks/>
            </div>
        </nav>
    )
}

export default Navbar
