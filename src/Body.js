import React from 'react';
import Background from './components/Background';
import Intro from './components/Intro';
import Opener from './components/Opener';
import TNYLogo from './components/TNYLogo';

const Body = () => {
  return (
    <div className="container">
      <Background />
      <article className="article">
        <a className="tny-link"
          href="https://www.newyorker.com/" >
          <TNYLogo />
        </a>
        <Opener />
        <Intro />
      </article>
    </div>
  );
};

export default Body;
