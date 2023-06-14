import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/dream-about-the-ocean-mathieu-rivrin.jpg'
          fill={true}
          alt='about'
          className={styles.img}
        />
        <h1></h1>
      </div>
      <div className={styles.textContainer}></div>
    </div>
  );
};

export default About;
