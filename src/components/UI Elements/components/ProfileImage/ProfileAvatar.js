import React from 'react'
import exProfilePhoto from '../../../../assets/img/profile1.jpg'

import './ProfileAvatar.css'

const ProfileAvatar = (props) => {
    return (
        <img src={props.picture || exProfilePhoto} alt={props.profileName && 'profile'} className={`${props.className}`} />
    )
}

export default ProfileAvatar
