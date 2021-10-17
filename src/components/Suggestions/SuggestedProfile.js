import React from 'react'
import ProfileAvatar from '../UI Elements/components/ProfileImage/ProfileAvatar'
import ProfileTitles from '../UI Elements/components/ProfileImage/ProfileTitles'
import Button from '../UI Elements/components/Button/Button'
import './SuggestedProfile.css'

const SuggestedProfile = ({user}) => {
    return (
        <div className="suggestedProfile-container">
            <div className="suggestedProfile">
                <ProfileAvatar
                    className='small-profile'
                    profileName={user.username}
                    picture={user.picture}
                    subName='Ramil Abbaszade'
                    profileWithNameRow
                />
                <div className="suggestedProfile-title">
                    <ProfileTitles
                        profileTitlesRow
                        userName={user.username}
                        subName="New to instagram"
                    />
                </div>
            </div>
            <Button btnTitle="Follow" />
        </div>
    )
}

export default SuggestedProfile
