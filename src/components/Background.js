import React from 'react';
import Spotlights from './Spotlights'

const Background = () => {
  return (
    <div className="background__container">
      <img className="background__cloud background__cloud--1"
        src={`./images/cloud1.png`}
        srcSet='./images/mobile/cloud1.png 750w ./images/cloud1.png 1280w'
        alt="peach-colored cloud"
      />
      <img className="background__cloud background__cloud--2"
        src='./images/cloud2.png'
        srcSet='./images/mobile/cloud2.png 750w ./images/cloud2.png 1280w'
        alt="peach-colored cloud"
      />
      <img className="background__cloud background__cloud--3"
        src='./images/cloud3.png'
        srcSet='./images/mobile/cloud3.png 750w ./images/cloud3.png 1280w'
        alt="peach-colored cloud"
      />
      <img src='./images/mobile/cloud4.png'
        className="background__cloud background__cloud--4 mobile-only"
        alt="peach-colored cloud"
        width="254"
        height="100"
      />
      <img src='./images/mobile/cloud5.png'
        className="background__cloud background__cloud--5 mobile-only"
        alt="peach-colored cloud"
        width="158"
        height="71"
      />
      <img className="background__stars"
        src='./images/stars.png'
        srcSet='./images/mobile/stars.png 750w ./images/stars.png 1280w'
        alt="peach-colored cloud"
      />
      <Spotlights />
    </div>
  )
};

export default Background;
