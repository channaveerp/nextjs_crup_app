import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';
import cm from '../../../../public/cm.jpg';

const BlogPost = ({ params }) => {
  console.log('params:', params);
  return (
    <div className={styles.container}>
      <h1 className={styles.paramsId}>{params.category}</h1>
      <div className={styles.content}>
        <div className={styles.textCont}>
          <h1>Creative PortFolio111</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            distinctio blanditiis earum tempora, laborum labore voluptatum
            adipisci voluptate eos deserunt est unde doloremque aspernatur eius
            magnam voluptas, in vitae? Dicta?
          </p>
          {/* user profile */}
          <div className={styles.profileCont}>
            <div className={styles.profileImgCont}>
              <Image src={cm} alt='cm' className={styles.img} />
            </div>
            <p>John</p>
          </div>
        </div>
        <div className={styles.imgCont}>
          <Image src={cm} className={styles.img} />
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          facilis ea harum, quo ducimus officiis, earum aperiam tempore
          temporibus exercitationem optio corrupti, deleniti obcaecati mollitia
          perspiciatis voluptatibus! Ullam, quasi eius!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
