import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">InmobiliariaMillion</Link>
      </div>
      <div className={styles.links}>
        <Link to="/">Inicio</Link>
      </div>
    </nav>
  );
}

export default Navbar;