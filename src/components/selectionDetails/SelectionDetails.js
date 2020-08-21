import React, { useContext } from 'react';
import styles from './SelectionDetails.module.scss';
import { SelectedElement } from '../../context/SelectedElement';

const SelectionDetails = () => {
  let { selectedElement } = useContext(SelectedElement);

  const { name, inline, block, html5, selfClosing, html } = selectedElement;
  return (
    <div className={styles.tagDetailsComp}>
      { Object.keys(selectedElement).length > 0 && (
        <div>
          <p>name: {name}</p>
          <p>inline: {inline}</p>
          <p>block: {block}</p>
          <p>html5: {html5}</p>
          <p>selfClosing: {selfClosing}</p>
          <p>html: {html}</p>
        </div>
      )}
    </div>
  );
};

export default SelectionDetails;
