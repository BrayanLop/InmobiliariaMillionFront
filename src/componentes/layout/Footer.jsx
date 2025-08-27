import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} InmobiliariaMillion. </span>
      <small>Todos los derechos reservados.</small>
    </footer>
  );
}

export default Footer;