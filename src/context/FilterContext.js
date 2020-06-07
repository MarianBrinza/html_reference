import React, { useState } from 'react';

// create a context
export const FilterContext = React.createContext();

const FilterContextProvider = (props) => {
  // state -> this will be shared to all components
  const [filters, setFilters] = useState([]);

  const setUserFilters = (selectedFilter) => {
    const selectedFilterKey = Object.keys(selectedFilter)[0];

    let foundFilter = false;
    for (let i = 0; i < filters.length; i++) {
      const currentItemKey = Object.keys(filters[i])[0];
      if (currentItemKey === selectedFilterKey) {
        filters.splice(i, 1, selectedFilter);
        foundFilter = true;
        break;
      }
    }
    if (!foundFilter) {
      filters.push(selectedFilter);
    }
    setFilters([...filters]);
  };

  return (
    <FilterContext.Provider value={{ filters, setUserFilters }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
