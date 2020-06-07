import React, { useState } from 'react';

// step 1: create a context
export const SearchContext = React.createContext();

const SearchContextProvider = (props) => {
  // state -> this will be shared to all components
  const [userQuery, setUserQuery] = useState('');

  return (
    <SearchContext.Provider value={{ userQuery, setUserQuery }}>
      {props.children}
    </SearchContext.Provider>
  );

};

export default SearchContextProvider;
