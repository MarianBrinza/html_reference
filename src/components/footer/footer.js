import React from 'react';
import styles from './footer.module.scss';

const Footer = (props) => {

  return (
    <footer className={styles.footerComp}>
      <div>
        <p>made by © noAdsApps</p>
        <p>No ads, no tracking & forever free</p>
        <p>Website source code available at</p>
        <p>github link here</p>
        <p>Want to support my work or buy me a <span role="img" aria-label="beer emoji">🍺 </span></p>
      </div>
    </footer>
  );
};

export default Footer;
