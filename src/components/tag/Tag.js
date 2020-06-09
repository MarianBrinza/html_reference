import React from 'react';
import styles from './Tag.module.scss';

const Tag = ({ element }) => {
  const { name, inline, html5, selfClosing } = element;
  let tagType;

  if (JSON.parse(inline)) {
    tagType = 'inline';
  } else {
    tagType = 'block';
  }

  return (
    <div className={styles.tagRow}>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>{tagType}</span>
      </div>
      <div>
        <span>{html5}</span>
      </div>
      <div>
        <span>{selfClosing}</span>
      </div>
    </div>
  );
};

export default Tag;
