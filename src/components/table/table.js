import React, { useContext } from 'react';
import styles from './table.module.scss';
import TableRow from '../tableRow/tableRow';
import { SearchContext } from '../../context/SearchContext';
import { FilterContext } from '../../context/FilterContext';
import { getDisplayElements, getStringFilters } from '../../resources/util';

const Table = ({ htmlElementsToDisplay }) => {
  const { userQuery } = useContext(SearchContext);
  const { filters } = useContext(FilterContext);

  const elements = userQuery.length > 0 ? htmlElementsToDisplay.filter(el => el.name.includes(userQuery)) : htmlElementsToDisplay;
  const appliedFilters = getStringFilters(filters);
  const trueElements = getDisplayElements(elements, appliedFilters);
  let displayElements;

  if (appliedFilters) {

    displayElements = trueElements;
  } else {
    displayElements = elements;
  }

  return (
    <div id='elementsTable' className={styles.tagTableComp}>
      {/* table header */}
      <div className={styles.tableHeader}>
        <span>Tag</span>
        <span>inline /
          block</span>
        <span>html5</span>
        <span>self closing</span>
      </div>

      {
        displayElements.map(element => {
          return (
            <TableRow element={element}
                      key={element.name}>
            </TableRow>

          );
        })
      }
    </div>
  );
};

export default Table;
