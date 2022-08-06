import React from 'react';
const Stars = () => {
  return (
    <div className="background__star-container">
      {Array.from(Array(7), (e, i) =>
        {
          return (
            <img className={`background__star background__star--${i}`}
              src={`./images/stars/star${i}.png`}
              key={i}
              alt="star"
              width="50"
              height="50"
            />
          )
        }
      )}
     <img className="background__stars"
        src='./images/stars/static-stars.png'
        srcSet='./images/mobile/stars.png 750w ./images/stars/static-stars.png 1280w'
        alt="peach-colored cloud"
      />
    </div>
  )
};

export default Stars;
