import React from 'react';
import styles from '../Bordered/Bordered.module.css';

const Bordered = (props) => {
  return (
    <div className={styles.bordered}>
      <h2>About Us</h2>
      {props.children}
    </div>
  );
};

export default Bordered;
