import React from 'react';
import styles from './filter.module.scss';

const Filter = (props) => {

  return (
    <div className={styles.filterComp}>
      <label>
        inline
        <input type='checkbox'/>
      </label>
      <label>
        block
        <input type='checkbox'/>
      </label>
      <label>
        html 5
        <input type='checkbox'/>
      </label>
      <label>
        lists
        <input type='checkbox'/>
      </label>
    </div>
  );
};

export default Filter;
