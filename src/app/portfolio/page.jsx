import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href='/portfolio/illustration' className={styles.item}>
          <span className={styles.title1}>Illustration</span>
        </Link>
        <Link href='/portfolio/website' className={styles.item}>
          <span className={styles.title1}>Websites</span>
        </Link>{' '}
        <Link href='/portfolio/application' className={styles.item}>
          <span className={styles.title1}>Applications</span>
        </Link>{' '}
      </div>
    </div>
  );
};

export default Portfolio;
