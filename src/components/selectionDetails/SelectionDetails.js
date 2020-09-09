import React, { useContext } from 'react';
import styles from './SelectionDetails.module.scss';
import { SelectedElementContext } from '../../context/SelectedElementContext';
import { toggle } from '../../resources/util';

const SelectionDetails = () => {
  let { selectedElement } = useContext(SelectedElementContext);
  const a = selectedElement.test;
  const { html } = selectedElement;
  if (a) {
    console.log(JSON.parse(selectedElement.test));
  }

  return (
    <div id="selection-details" className={styles.tagDetailsComp}>
      {Object.keys(selectedElement).length > 0 && (
        <>
          <button id={styles.toggleBtn}
                  onClick={() => {
                    toggle('#searchWrapper');
                    toggle('#elementsTable');
                  }}
          >
            Close me!
          </button>

          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </>
      )}
    </div>
  );
};

export default SelectionDetails;
