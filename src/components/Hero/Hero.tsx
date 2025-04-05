"use client";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Best Physiotherapy Clinic in Noida</h1>
        <p className={styles.subtitle}>
          In-Clinic, Home Visits & Online Consultations by Expert Physiotherapists
        </p>
        <a href="/appointments" className={styles.ctaButton}>
          Book Appointment
        </a>
      </div>
    </section>
  );
};

export default Hero;
