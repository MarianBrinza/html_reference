import React, { useContext, useState } from 'react';
import styles from './search.module.scss';
import { SearchContext } from '../../context/SearchContext';

const Search = ({ placeholder = ''}) => {

  const [searchValue, setSearchValue] = useState('');
  const { setUserQuery } = useContext(SearchContext);

  return (
    <div className={styles.searchComp}>
      <input
        type='text'
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          setUserQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
