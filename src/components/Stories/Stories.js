import React from "react";
import ProfileAvatar from "../UI Elements/components/ProfileImage/ProfileAvatar";
import ProfileTitles from "../UI Elements/components/ProfileImage/ProfileTitles";

import "./Stories.css";

const Stories = () => {

  return (
    <div>
      <div className="stories" >
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles userName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles userName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles userName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles userName='ramilabbaszade' profileNameNormal />
        </div>
      </div>
    </div>
  );
};

export default Stories;
