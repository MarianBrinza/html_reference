import React from 'react';
import styles from './Tag.module.scss';

const Tag = ({ tagName, tagType, html5 }) => {

  return (
    <div className={styles.tagRow}>
      <div>
        <span>{tagName}</span>
      </div>
      <div>
        <span>{tagType}</span>
      </div>
      <div>
        <span>{html5}</span>
      </div>
    </div>
  );
};

export default Tag;
