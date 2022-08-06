import React from 'react';
import PropTypes from 'prop-types';
import Spotlights from './Spotlights'

const Background = () => {
  const srcPath = process.env.PUBLIC_URL;
  return (
    <div className="background__container">
      <img className="background__cloud background__cloud--1"
        src={`${srcPath}/images/cloud1.png`}
        srcSet={`${srcPath}/images/mobile/cloud1.png 750w, ${srcPath}/images/cloud1.png 1280w`}
        alt="peach-colored cloud"
      />
      <img className="background__cloud background__cloud--2"
        src={`${srcPath}/images/cloud2.png`}
        srcSet={`${srcPath}/images/mobile/cloud2.png 750w, ${srcPath}/images/cloud2.png 1280w`}
        alt="peach-colored cloud"
      />
      <img className="background__cloud background__cloud--3"
        src={`${srcPath}/images/cloud3.png`}
        srcSet={`${srcPath}/images/mobile/cloud3.png 750w, ${srcPath}/images/cloud3.png 1280w`}
        alt="peach-colored cloud"
      />
      <img src={`${srcPath}/images/mobile/cloud4.png`}
        className="background__cloud background__cloud--4 mobile-only"
        alt="peach-colored cloud"
        width="254"
        height="100"
      />
      <img src={`${srcPath}/images/mobile/cloud5.png`}
        className="background__cloud background__cloud--5 mobile-only"
        alt="peach-colored cloud"
        width="158"
        height="71"
      />
      <img className="background__stars"
        src={`${srcPath}/images/cloud2.png`}
        srcSet={`${srcPath}/images/mobile/stars.png 750w, ${srcPath}/images/stars.png 1280w`}
        alt="peach-colored cloud"
      />
      <Spotlights />
    </div>
  )
};

export default Background;
