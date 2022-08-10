import React from 'react';
const Stars = () => (
  /*
    w/ more time, i would have liked to explore the following approaches:
      1. try a few css mask animation options, although the browser support could be
        better for this.
      2. a bit of a hack maybe, but create a video w/ the twinkling animation for
        desktop + a gif fallback for mobile.
      3. go all out exporting + positioning each star and testing whether so many
        animations on the page would severely impact performance. i believe it would
        work okay but warrants testing.
  */
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
);

export default Stars;
