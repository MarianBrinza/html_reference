import React, { useState } from 'react';

// create a context
export const SelectedElementContext = React.createContext();

const SelectedElementProvider = (props) => {
  // state -> this will be shared to all components
  const [selectedElement, setSelectedElement] = useState({});
  return (
    <SelectedElementContext.Provider value={{ selectedElement, setSelectedElement }}>
      {props.children}
    </SelectedElementContext.Provider>
  );
};

export default SelectedElementProvider;
