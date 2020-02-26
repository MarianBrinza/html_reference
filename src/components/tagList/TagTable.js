import React from 'react';
import styles from './TagTable.module.scss';
import Tag from '../tag/Tag';
import { MyHtmlTags } from '../../util/constants';

const TagTable = (props) => {

  console.log('MyHtmlTags: ', MyHtmlTags);
  return (
    <div className={styles.tagListComp}>
      {
        MyHtmlTags.map((tag, index) => {
          return (<Tag tagName={tag.name}
                       tagType={tag.type}
                       key={index}/>);
        })
      }
    </div>
  );
};

export default TagTable;
