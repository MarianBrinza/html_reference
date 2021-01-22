import React, { useContext } from 'react';
import styles from './tableRow.module.scss';
import { SelectedElementContext } from '../../context/SelectedElementContext';
import { getTagType, toggle, toggleActiveClass } from '../../resources/util';

const TableRow = ({ element }) => {
  const { name, html5, selfClosing } = element;
  let { setSelectedElement, previousSelectedElement, setPreviousSelectedElement } = useContext(SelectedElementContext);
  let { inline } = element;
  let tagType = getTagType(inline);

  return (
    <div className={styles.tableRow}
         onClick={(event) => {
           const clientWidth = document.body.clientWidth;
           if (clientWidth < 791) {
             toggle('#searchWrapper');
             toggle('#elementsTable');
             toggle('#selection-details');
           }

           setSelectedElement(element);
           toggleActiveClass(event, previousSelectedElement);
           setPreviousSelectedElement(element);
         }}
    >
      <span>{name}</span>
      <span>{tagType}</span>
      <span>{html5}</span>
      <span>{selfClosing}</span>
    </div>
  );
};

export default TableRow;
