"use client";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.copyText}>
          © {new Date().getFullYear()} Dr. Y Physio. All rights reserved.
        </p>
        <p className={styles.tagline}>
          Designed with ❤️ and precision by <a href="https://bytesfromali.com">BYTESFROMALI</a> for the best physiotherapy care in Noida.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
