import React, { useContext } from 'react';
import styles from './TagTable.module.scss';
import Tag from '../tag/Tag';
import { SearchContext } from '../../context/SearchContext';
import { FilterContext } from '../../context/FilterContext';
import { getDisplayElements, getStringFilters } from '../../resources/util';

const TagTable = ({ htmlElementsToDisplay }) => {
  const { userQuery } = useContext(SearchContext);
  const { filters } = useContext(FilterContext);

  const elements = userQuery.length > 0 ? htmlElementsToDisplay.filter(el => el.name.includes(userQuery)) : htmlElementsToDisplay;
  const trueFilters = getStringFilters(filters);
  const trueElements = getDisplayElements(elements, trueFilters);

  let displayElements;
  if (trueFilters) {
    displayElements = trueElements;
  } else {
    displayElements = elements;
  }

  return (
    <div id="elementsTable" className={styles.tagTableComp}>
      <div className={styles.tableHeader}>
        <span>Tag</span>
        <span>inline block</span>
        <span>html5</span>
        <span>self closing</span>
      </div>
      {
        displayElements.map(element => {
          return (


            <Tag element={element}
                 key={element.name}>
            </Tag>

          );
        })
      }
    </div>
  );
};

export default TagTable;
