import React from 'react'
import exProfilePhoto from '../../../../assets/img/profile1.jpg'

import './ProfileImage.css'

const ProfileImage = props => {
    return (
        <div>
            <a href="/" className="profileWithName">
                <img src={exProfilePhoto} alt={props.profileName && 'profile'} className={`${props.className}`} />
                {props.profileName ? <div className="profileName">{props.profileName}</div> : null}
            </a>
        </div>
    )
}

export default ProfileImage
