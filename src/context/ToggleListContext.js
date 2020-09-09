import React, { useState } from 'react';

// step 1: create a context
export const ToggleListContext = React.createContext();

const ToggleListProvider = (props) => {
  // state -> this will be shared to all components
  const [toggleValue, setToggleValue] = useState('block');

  const toggleList = (toggleValue) => {
    if (toggleValue === 'block') {
      setToggleValue('none');
    } else {
      setToggleValue('block');
    }
  };

  return (
    <ToggleListContext.Provider value={{ toggleValue, toggleList }}>
      {props.children}
    </ToggleListContext.Provider>
  );

};

export default ToggleListProvider;

