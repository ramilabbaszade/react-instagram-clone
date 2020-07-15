import React from "react";

import ProfileAvatar from "../UI Elements/components/ProfileImage/ProfileAvatar";
import SuggestedProfile from "./SuggestedProfile";

import "./Suggestions.css";
import ProfileTitles from "../UI Elements/components/ProfileImage/ProfileTitles";

const Suggestions = () => {
  return (
    <div className='suggestions-container'>
      <div className='suggestions-user-profile'>
        <ProfileAvatar
          className='medium-profile'
          profileName='ramilabbaszade'
          subName='Ramil Abbaszade'
          profileWithNameRow
        />
        <ProfileTitles
          profileTitlesRow
          profileName="ramilabbaszade"
          subName="Ramil Abbaszade"
          paddingStyle={{paddingLeft:'5px'}}
        />
      </div>
      <div className="suggestionsForYou">
        <div className="suggestions-header">
          <div>Suggestions For You</div>
          <b>See all</b>
        </div>
        <SuggestedProfile />
        <SuggestedProfile />
        <SuggestedProfile />
        <SuggestedProfile />
        <SuggestedProfile />
      </div>

    </div>
  );
};

export default Suggestions;
