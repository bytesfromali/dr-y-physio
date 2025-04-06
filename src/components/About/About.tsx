"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src="/images/exercise-area.jpeg"
            alt="Dr. Y Physio Clinic"
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.textContainer}>
          {/* <h2 className={styles.sectionTitle}>About Dr. Y Physio</h2> */}
          <h3 className={styles.subTitle}>Our Mission</h3>
          <p className={styles.sectionText}>
            At <b>Dr. Y Physio</b>, we are dedicated to providing exceptional physiotherapy care that
            focuses on holistic healing and personalized treatment. Our mission is to empower you to
            achieve optimum health and mobility through innovative therapies.
          </p>
          <h3 className={styles.subTitle}>Our Approach</h3>
          <p className={styles.sectionText}>
            We offer one of the best in-clinic treatments and home visits in Noida area. 
            We also provide online consultations using advanced techniques and modern equipment. 
            Our expert team tailors each treatment plan to meet your
            unique needs, ensuring faster recovery and long-term well-being.
          </p>
          <h3 className={styles.subTitle}>Why Choose Us?</h3>
          <ul className={styles.featuresList}>
            <li>Expert and compassionate care</li>
            <li>State-of-the-art facilities</li>
            <li>Personalized treatment plans</li>
            <li>Comprehensive physiotherapy services</li>
            <li>Proven track record in patient recovery</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
