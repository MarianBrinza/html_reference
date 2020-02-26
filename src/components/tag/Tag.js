import React from 'react';
import styles from './Tag.module.scss';

const Tag = ({ tagName, tagType }) => {

  return (
    <div className={styles.tagComp}>
      <div>
        <span>{tagName}</span>
      </div>
      <div>
        <span>{tagType}</span>
      </div>
    </div>
  );
};

export default Tag;
