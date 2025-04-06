import { Metadata } from "next";
import Image from "next/image";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Dr. Y Physio - Expert Physiotherapy in Noida",
  description:
    "Learn about Dr. Y Physio, a leading physiotherapy clinic in Noida offering personalized in-clinic, home, and online physiotherapy care with state-of-the-art facilities.",
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/doctor-room.jpeg"
              alt="Dr. Y Physio Clinic"
              className={styles.aboutImage}
              width={500} // set appropriate width
              height={450} // set appropriate height
              quality={90} // optional: adjust quality if needed
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.pageTitle}>About Dr. Y Physio</h1>
            <p className={styles.introText}>
              At Dr. Y Physio, located in Noida, we combine cutting-edge
              technology with compassionate care to deliver top-quality
              physiotherapy services. Our clinic offers in-clinic treatments,
              home visits, and online consultations designed for your fast and
              effective recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.textColumn}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.sectionText}>
              Founded with a vision to revolutionize physiotherapy in Noida, Dr.
              Y Physio has grown into a trusted name. Our journey began with a
              passion for delivering personalized, evidence-based treatment to
              help our patients regain mobility and lead healthier lives.
            </p>
            <h2 className={styles.sectionTitle}>Our Mission & Values</h2>
            <ul className={styles.featuresList}>
              <li>
                Personalized, evidence-based treatment plans tailored to your
                needs
              </li>
              <li>
                State-of-the-art facilities and advanced therapeutic techniques
              </li>
              <li>
                Accessible care via in-clinic, home visit, and online
                consultation services
              </li>
              <li>Commitment to long-term wellness and recovery</li>
            </ul>
            <h2 className={styles.sectionTitle}>Why Choose Dr. Y Physio?</h2>
            <p className={styles.sectionText}>
              Our team of experienced physiotherapists is dedicated to your
              recovery. With a focus on innovation and compassionate care, we
              provide the best physiotherapy services in Noida. Experience the
              difference at Dr. Y Physio, where your health is our top priority.
            </p>
          </div>
          <div className={styles.imageColumn}>
            {/* Secondary image or graphic element */}
            <Image
              src="/images/clinic-lobby.jpeg"
              alt="Our Clinic Environment"
              className={styles.secondaryImage}
              width={500}
              height={350}
              quality={90}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
