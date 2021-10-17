import React from "react";
import ProfileAvatar from "../UI Elements/components/ProfileImage/ProfileAvatar";
import ProfileTitles from "../UI Elements/components/ProfileImage/ProfileTitles";
import "./Stories.css";
import {users} from "../../data";

const Stories = () => {

  return (
    <div>
      <div className="stories" >
        {users.map(user=> {
          return <div className="stories-item">
            <ProfileAvatar picture={user.picture} className='medium-profile'/>
            <ProfileTitles userName={user.username} profileNameNormal/>
          </div>
        })}
      </div>
    </div>
  );
};

export default Stories;
