"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="/images/about.jpg" alt="About Dr. Y Physio" className={styles.aboutImage} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.sectionTitle}>About Dr. Y Physio</h2>
          <p className={styles.sectionText}>
            At Dr. Y Physio, we are committed to providing the best physiotherapy care in Noida.
            Our team of highly qualified physiotherapists offers in-clinic treatments, home visits,
            and online consultations. We combine advanced techniques with personalized care to help
            you achieve optimal health and mobility.
          </p>
          <p className={styles.sectionText}>
            Whether you're recovering from an injury or looking to improve your overall wellness, we
            tailor our approach to meet your unique needs. Experience the difference with our caring,
            professional, and effective physiotherapy services.
          </p>
        </div>
      </div>
    </section>
  );
}
