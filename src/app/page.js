import Image from 'next/image';
import styles from './page.module.css';
import hero from '../../public/hero.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Bettrer design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your Idea Into Reality , we bring together the teams from the
          global tech industry
        </p>
        <button className={styles.btn}>See Our Work</button>
      </div>
      <div className={styles.item}>
        <Image src={hero} alt='hero' className={styles.img} />
      </div>
    </div>
  );
}
