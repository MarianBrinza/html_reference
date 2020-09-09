import React from 'react';
import SearchContextProvider from '../../context/SearchContext';
import FilterContextProvider from '../../context/FilterContext';
import ToggleListProvider from '../../context/ToggleListContext';

const ContextWrapper = (props) => {
  return (
    <SearchContextProvider>
      <FilterContextProvider>
        <ToggleListProvider>
          {/*<SelectedElementProvider>*/}
            {props.children}
          {/*</SelectedElementProvider>*/}
        </ToggleListProvider>
      </FilterContextProvider>
    </SearchContextProvider>
  );
};

export default ContextWrapper;
