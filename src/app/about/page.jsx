import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/component/Button/Button';

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
        <div className={styles.headingDesc}>
          <h1>Digital Storytellers</h1>
          <p>Handcrafting award winning digital experience</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textContainerOne}>
          <h1 className={styles.textHaeding}>Who Are We?</h1>
          <p className={styles.textDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis a illum odio,
            <br />
            <br /> consectetur delectus deleniti numquam quasi suscipit odit
            iste impedit, asperiores sit sapiente doloribus temporibus? Debitis
            culpa amet numquam.
          </p>
        </div>
        <div className={styles.textContainerOne}>
          <h1 className={styles.textHaeding}>What We Do?</h1>
          <p className={styles.textDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis a illum odio,
            <br />
            <br />
            consectetur delectus deleniti numquam quasi suscipit odit iste
            impedit, asperiores sit sapiente doloribus temporibus? Debitis culpa
            amet numquam.
          </p>
          <div className={styles.btnConatainer}>
            
          <Button text='Contact' url='/contact' className={styles.btn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
