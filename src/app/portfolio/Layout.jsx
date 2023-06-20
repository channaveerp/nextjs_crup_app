import React from 'react';
import styles from './pages.module.css';
const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.maintitle}>Our Work</h1>
      {children}
    </div>
  );
};

export default Layout;
