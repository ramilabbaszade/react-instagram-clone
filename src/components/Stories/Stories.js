import React from "react";
import ProfileAvatar from "../UI Elements/components/ProfileImage/ProfileAvatar";
import ProfileTitles from "../UI Elements/components/ProfileImage/ProfileTitles";
import Slider from "react-slick";

import "./Stories.css";

const Stories = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4
  };
  return (
    <div>
      <Slider className="stories" {...settings}>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
        <div className="stories-item">
          <ProfileAvatar className='medium-profile' />
          <ProfileTitles profileName='ramilabbaszade' profileNameNormal />
        </div>
      </Slider>
      
      </div>
  );
};

export default Stories;
