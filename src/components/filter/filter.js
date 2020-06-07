import React, { useContext, useState } from 'react';
import styles from './filter.module.scss';
import { FilterContext } from '../../context/FilterContext';

const Filter = () => {
  const [inlineCb, setInlineCb] = useState(false);
  const [blockCb, setBlockCb] = useState(false);
  const [html5Cb, setHtml5Cb] = useState(false);
  const [selfClosingCb, setSelfClosingCb] = useState(false);

  let { setUserFilters } = useContext(FilterContext);

  return (
    <div className={styles.filterComp}>
      <label>
        inline
        <input type='checkbox'
               checked={inlineCb}
               onChange={() => {
                 setInlineCb(!inlineCb);
                 setUserFilters({
                   inline: !inlineCb
                 });
               }}/>
      </label>

      <label>
        block
        <input type='checkbox'
               checked={blockCb}
               onChange={() => {
                 setBlockCb(!blockCb);
                 setUserFilters({
                   block: !blockCb
                 });
               }}/>
      </label>

      <label>
        html 5
        <input type='checkbox'
               checked={html5Cb}
               onChange={() => {
                 setHtml5Cb(!html5Cb);
                 setUserFilters({
                   html5: !html5Cb
                 });
               }}/>
      </label>

      <label>
        self-closing
        <input type='checkbox'
               checked={selfClosingCb}
               onChange={() => {
                 setSelfClosingCb(!selfClosingCb);
                 setUserFilters({
                   selfClosing: !selfClosingCb
                 });
               }}/>
      </label>
    </div>
  );

};

export default Filter;
