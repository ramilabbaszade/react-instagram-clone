import React from 'react'
import { Link } from 'react-router-dom'
import exProfilePhoto from '../../../../assets/img/profile1.jpg'
import Button from '../Button/Button'

import './ProfileImage.css'

const ProfileImage = props => {
    return (
        <div>
            <Link to="/" className={`profileWithName ${props.profileWithNameRow && 'profileWithNameRow'} ${props.followUser && 'btnPosition'}`}>
                <img src={exProfilePhoto} alt={props.profileName && 'profile'} className={`${props.className}`} />
                <div className="profileTitles">
                    {props.profileName ? <div className="profileName">{props.profileName}</div> : null}
                    {props.subName ? <small className="profileSubname">{props.subName}</small> : null}
                </div>
                {props.followUser && <Button/>}
            </Link>
        </div>
    )
}

export default ProfileImage
