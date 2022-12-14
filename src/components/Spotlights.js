import React from 'react';
const Spotlights = () => (
  <div className="background__spotlights">
    <picture className="background__spotlight background__spotlight--left">
      <source media="(max-width: 750px)"
        width="914"
        height="1130"
        srcSet='./images/mobile/spotlight-left.png'
      />
      <img src='./images/spotlight-left.png'
        alt="lefthand spotlight"
        width="1210"
        height="1539"
      />
    </picture>
    <picture className="background__spotlight background__spotlight--right">
      <source media="(max-width: 750px)"
        width="914"
        height="1130"
        srcSet='./images/mobile/spotlight-right.png'
      />
      <img src='./images/spotlight-right.png'
        alt="righthand spotlight"
        width="1210"
        height="1539"
      />
    </picture>
  </div>
);

export default Spotlights;
