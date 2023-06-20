import Button from '@/component/Button/Button';
import React from 'react';
import styles from '../page.module.css';
import Image from 'next/image';
import cm from '../../../../public/cm.jpg';

const Category = ({ params }) => {
  console.log('params:', params);

  return (
    <div className={styles.container}>
      <h1>{params.category}</h1>
      <div className={styles.content}>
        <div className={styles.textCont}>
          <h1>Creative PortFolio111</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            distinctio blanditiis earum tempora, laborum labore voluptatum
            adipisci voluptate eos deserunt est unde doloremque aspernatur eius
            magnam voluptas, in vitae? Dicta?
          </p>
          <Button url='/#' text='see more' />
        </div>
        <div className={styles.imgCont}>
          <Image src={cm} className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default Category;
