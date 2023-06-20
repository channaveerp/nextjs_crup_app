import React from 'react';
import styles from './page.module.css';
import contact from '../../../public/contact.png';
import Image from 'next/image';
import Button from '@/component/Button/Button';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Lets Keep In Touch</h1>
      <div className={styles.imgformConatiner}>
        <div className={styles.imgcont}>
          <Image src={contact} alt='contact' className={styles.img} />
        </div>
        <form action='' className={styles.formContainer}>
          <input type='text' placeholder='name' />
          <input type='text' placeholder='email' />
          <textarea name='' placeholder='message' id=''></textarea>
          <Button text="send" url="#"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
