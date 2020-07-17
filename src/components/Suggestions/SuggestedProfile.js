import React from 'react'
import ProfileAvatar from '../UI Elements/components/ProfileImage/ProfileAvatar'
import ProfileTitles from '../UI Elements/components/ProfileImage/ProfileTitles'
import Button from '../UI Elements/components/Button/Button'
import './SuggestedProfile.css'

const SuggestedProfile = () => {
    return (
        <div className="suggestedProfile-container">
            <div className="suggestedProfile">
                <ProfileAvatar
                    className='small-profile'
                    profileName='ramilabbaszade'
                    subName='Ramil Abbaszade'
                    profileWithNameRow
                />
                <div className="suggestedProfile-title">
                    <ProfileTitles
                        profileTitlesRow
                        userName="ramilabbaszade"
                        subName="New to instagram"
                    />
                </div>
            </div>
            <Button btnTitle="Follow" />
        </div>
    )
}

export default SuggestedProfile
