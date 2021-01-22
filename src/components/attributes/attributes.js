import React from 'react';
import styles from './attributes.module.scss';

const Attributes = ({ attributes }) => {

  return (
    <div className={styles.attributesComp}>


      <section>
        <table>
          <thead>
          <tr>
            <th>name</th>
            <th>value</th>
            <th>description</th>
          </tr>
          </thead>
          <tbody>
          {attributes.map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.name}</td>
                <td>{el.value}</td>
                <td>{el.description}</td>
              </tr>

            );
          })}
          </tbody>
        </table>
      </section>
    </div>);
};

export default Attributes;