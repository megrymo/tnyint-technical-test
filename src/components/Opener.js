import React from 'react';
import FacebookIcon from './logos/FacebookIcon';
import MailIcon from './logos/MailIcon';
import TwitterIcon from './logos/TwitterIcon';

const Opener = () => {
  return (
    <header className="opener desktop-only">
      <div className="opener__rubric">Page Turner</div>
      <h1 div className="opener__hed">
        <div className="opener__hed--big">The Art</div>
        <div className="opener__hed--small">of the</div>
        <div className="opener__hed--big">Hollywood Memoir</div>
      </h1>
      <h2 className="opener__dek">
        Accounts of life in Tinseltown reveal as much as they seek to hide.
      </h2>
      <div className="opener__byline-timestamp">
        <div className="opener__byline">
          By <a href="https://www.newyorker.com/contributors/rachel-syme">Rachel Syme</a>
        </div>
        <time className="opener__timestamp">July 00, 2021</time>
      </div>
      <ul className="opener__share">
        <li>
          <a href="https://facebook.com">
            <span className="sr-only">facebook</span>
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <span className="sr-only">twitter</span>
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="mailto:?subject=The Art of the Hollywood Memoir">
            <span className="sr-only">mail</span>
            <MailIcon />
          </a>
        </li>
      </ul>
    </header>
  );
};
export default Opener;
