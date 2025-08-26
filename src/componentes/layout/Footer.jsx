import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} InmobiliariaMillion. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;