import React, { useContext } from 'react';
import styles from './selectionDetails.module.scss';
import { SelectedElementContext } from '../../context/SelectedElementContext';
import { toggle } from '../../resources/util';

const SelectionDetails = () => {
  let { selectedElement } = useContext(SelectedElementContext);

  //todo: make a html API
  console.log(selectedElement);
  const {
    block,
    html5,
    inline,
    name,
    selfClosing,
    title,
    description,
    attribArr,
    valuesArr
  } = selectedElement;

  return (
    <div id="selection-details" className={styles.selectionDetailsComp}>
      {/*{Object.keys(selectedElement).length > 0 && (*/}
      {/*  <>*/}
      {/*    /!*<button id={styles.toggleBtn}*!/*/}
      {/*    /!*        onClick={() => {*!/*/}
      {/*    /!*          toggle('#searchWrapper');*!/*/}
      {/*    /!*          toggle('#elementsTable');*!/*/}
      {/*    /!*        }}*!/*/}
      {/*    /!*>*!/*/}
      {/*    /!*  Close me!*!/*/}
      {/*    /!*</button>*!/*/}

      {/*    <p>{block}</p>*/}
      {/*    <p>{html5}</p>*/}
      {/*    <p>{inline}</p>*/}
      {/*    <p>{name}</p>*/}
      {/*    <p>{selfClosing}</p>*/}
      {/*  </>*/}
      {/*)}*/}
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dignissimos incidunt ipsa libero nobis nulla placeat, qui quidem quisquam. Accusantium beatae cumque distinctio nesciunt obcaecati quae quia quo recusandae?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dignissimos incidunt ipsa libero nobis nulla placeat, qui quidem quisquam. Accusantium beatae cumque distinctio nesciunt obcaecati quae quia quo recusandae?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dignissimos incidunt ipsa libero nobis nulla placeat, qui quidem quisquam. Accusantium beatae cumque distinctio nesciunt obcaecati quae quia quo recusandae?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dignissimos incidunt ipsa libero nobis nulla placeat, qui quidem quisquam. Accusantium beatae cumque distinctio nesciunt obcaecati quae quia quo recusandae?</p>
    </div>
  );
};

export default SelectionDetails;
