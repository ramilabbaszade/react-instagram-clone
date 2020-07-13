import React from "react";

import ProfileImage from "../UI Elements/components/ProfileImage/ProfileImage";
import SuggestedProfile from "./SuggestedProfile";

import "./Suggestions.css";


const Suggestions = () => {
  return (
    <div className='suggestions-container'>
      <div className='user-profile'>
        <ProfileImage
          className='medium-profile'
          profileName='ramilabbaszade'
          subName='Ramil Abbaszade'
          profileWithNameRow
        />
        <div className="suggestionsForYou">
            <div className="suggestions-header">
                <div>Suggestions For You</div>
                <b>See all</b>
            </div>
            <SuggestedProfile/>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
