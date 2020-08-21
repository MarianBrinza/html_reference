import React, { useState } from 'react';

// create a context
export const SelectedElement = React.createContext();

const SelectedElementProvider = (props) => {
  // state -> this will be shared to all components
  const [selectedElement, setSelectedElement] = useState({ });

  return (
    <SelectedElement.Provider value={{ selectedElement, setSelectedElement }}>
      {props.children}
    </SelectedElement.Provider>
  );
};

export default SelectedElementProvider;
