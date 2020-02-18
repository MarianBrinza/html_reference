import React from 'react';
import styles from './search.module.scss';

const Search = (props) => {
  const { placeholder = '' } = props;

  return (
    <div className={styles.searchComp}>
      <input type='text' placeholder={placeholder}/>
    </div>
  );
};

export default Search;
