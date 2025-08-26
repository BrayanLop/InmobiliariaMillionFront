import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

/**
 * Layout principal que incluye Navbar y Footer.
 * @param {Object} props
 */
function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.contenido}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;