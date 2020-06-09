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

  let displayElements = [];
  if (trueFilters) {
    displayElements = trueElements;
  } else {
    displayElements = elements;
  }

  return (
    <div className={styles.tagListComp}>
      <div className={styles.tableHeader}>
        <div>Tag</div>
        <div>inline / block</div>
        <div>html5</div>
        <div>self-closing</div>
      </div>
      {
        displayElements.map(element => {
          return (
            <Tag
              element={element}
              key={element.name}>
            </Tag>
          );
        })
      }
    </div>
  );
};

export default TagTable;
