import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/component/Button/Button';
import cm from '../../../public/cm.jpg';

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href='/blog/testId'>
        <div className={styles.content}>
          <div className={styles.textCont}>
            <h1>Creative PortFolio</h1>
            <p className={styles.desc}>test</p>
          </div>
          <div className={styles.imgCont}>
            <Image src={cm} className={styles.img} />
          </div>
        </div>
      </Link>
      <Link href='/blog/testId'>
        <div className={styles.content}>
          <div className={styles.textCont}>
            <h1>Creative PortFolio</h1>
            <p className={styles.desc}>test</p>
          </div>
          <div className={styles.imgCont}>
            <Image src={cm} className={styles.img} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
