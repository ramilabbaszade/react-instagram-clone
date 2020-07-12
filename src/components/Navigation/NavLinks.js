import React from 'react'
import ProfileImage from '../UI Elements/components/ProfileImage/ProfileImage'

import './NavLinks.css'

const NavLinks = () => {
    return (
        <div className="nav-links">
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
            </a>
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                    <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                </svg>
            </a>
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                    <circle cx="12" cy="12" r="9" />
                </svg>
            </a>
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                </svg>
            </a>
            <ProfileImage
                className="small-profile"
            />
        </div>
    )
}

export default NavLinks
