import React from 'react';
import { NavbarLinks } from '../../constants/NavbarLinks';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        Patil
      </Link>
      <div className={styles.links}>
        {NavbarLinks.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
