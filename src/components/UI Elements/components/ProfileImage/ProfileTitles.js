import React from 'react'
import { Link } from 'react-router-dom'

import './ProfileTitles.css'

const ProfileTitles = props => {
    return (
        <Link to="/" className="profileTitles" style={props.paddingStyle}>
            {props.userName ? <div className={`profileName ${props.profileNameNormal && 'profileNameNormal'}`}>{props.userName}</div> : null}
            {props.subName ? <small className="profileSubname">{props.subName}</small> : null}
        </Link>
    )
}

export default ProfileTitles
