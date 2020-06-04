import React from 'react';
import styles from './TagTable.module.scss';
import Tag from '../tag/Tag';

const TagTable = ({ htmlElementsToDisplay }) => {

  return (
    <div className={styles.tagListComp}>
      {
        htmlElementsToDisplay.map((file, index) => {
          return (
            <Tag
              tagName={file.node.frontmatter.name}
              tagType={file.node.frontmatter.type}
              html5={file.node.frontmatter.html5}
              key={file.node.frontmatter.name}
            >
            </Tag>
          );
        })
      }
    </div>
  );
};

export default TagTable;
