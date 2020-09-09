import React, { useContext } from 'react';
import styles from './Tag.module.scss';
import { SelectedElementContext } from '../../context/SelectedElementContext';
import { toggle } from '../../resources/util';

const Tag = ({ element }) => {
  const { name, inline, html5, selfClosing } = element;
  let tagType;
  let { setSelectedElement } = useContext(SelectedElementContext);

  if (JSON.parse(inline)) {
    tagType = 'inline';
  } else {
    tagType = 'block';
  }

  return (
    <div className={styles.tagRow}
         onClick={() => {
           const clientWidth = document.body.clientWidth;
           if (clientWidth < 791) {
             toggle('#searchWrapper');
             toggle('#elementsTable');
           }

           setSelectedElement(element);
         }}
    >
      <span>{name}</span>
      <span>{tagType}</span>
      <span>{html5}</span>
      <span>{selfClosing}</span>
    </div>
  );
};

export default Tag;
