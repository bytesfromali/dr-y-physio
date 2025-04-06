import { Metadata } from "next";
import Image from "next/image";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Our Services - Comprehensive Physiotherapy in Noida | Dr. Y Physio",
  description:
    "Discover the comprehensive physiotherapy services offered by Dr. Y Physio in Noida. Our services include in-clinic treatments, home visits, online consultations, sports rehabilitation, orthopedic care, and postural correction.",
};

export default function ServicesPage() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.servicesPage}>
        <header className={styles.header}>
          <h1>Our Services</h1>
          <p>
            At Dr. Y Physio in Noida, we provide top-quality, personalized
            physiotherapy care tailored to your unique needs. Our
            state-of-the-art treatments are designed to help you recover faster
            and improve your overall well-being.
          </p>
        </header>
        <section className={styles.servicesList}>
          {/* Repeat service items as before */}
          <article className={styles.serviceItem}>
            <Image
              src="/images/service-clinic.jpg"
              alt="In-Clinic Physiotherapy"
              className={styles.serviceImage}
              width={500}
              height={500}
              quality={90}
            />
            <div className={styles.serviceContent}>
              <h2>In-Clinic Physiotherapy</h2>
              <p>
                Experience world-class physiotherapy at our modern Noida clinic.
                At Dr. Y Physio, our expert team uses advanced diagnostic tools
                and personalized treatment plans to address musculoskeletal
                conditions effectively, ensuring a swift recovery.
              </p>
            </div>
          </article>
          <article className={styles.serviceItem}>
            <Image
              src="/images/service-home.jpg"
              alt="Home Visit Physiotherapy"
              className={styles.serviceImage}
              width={500}
              height={500}
              quality={90}
            />
            <div className={styles.serviceContent}>
              <h2>Home Visit Physiotherapy</h2>
              <p>
                Enjoy the convenience of receiving top-quality physiotherapy
                care at your home. Our home visit service in Noida brings expert
                treatment right to your doorstep, offering comfort and
                personalized care without the need for travel.
              </p>
            </div>
          </article>
          <article className={styles.serviceItem}>
            <Image
              src="/images/service-online.jpg"
              alt="Online Consultation"
              className={styles.serviceImage}
              width={500}
              height={500}
              quality={90}
            />
            <div className={styles.serviceContent}>
              <h2>Online Consultation</h2>
              <p>
                Connect with the best physiotherapists at Dr. Y Physio through
                our online consultation service. Get comprehensive assessments
                and customized treatment plans without leaving your home.
              </p>
            </div>
          </article>
          <article className={styles.serviceItem}>
            <Image
              src="/images/service-sports.jpg"
              alt="Sports Rehabilitation"
              className={styles.serviceImage}
              width={500}
              height={500}
              quality={90}
            />
            <div className={styles.serviceContent}>
              <h2>Sports Rehabilitation</h2>
              <p>
                Our sports rehabilitation program in Noida is designed for
                athletes seeking rapid recovery and performance enhancement. Dr.
                Y Physio employs cutting-edge techniques to treat sports
                injuries and boost athletic performance safely.
              </p>
            </div>
          </article>
          <article className={styles.serviceItem}>
            <Image
              src="/images/service-ortho.jpg"
              alt="Orthopedic Physiotherapy"
              className={styles.serviceImage}
              width={500}
              height={500}
              quality={90}
            />
            <div className={styles.serviceContent}>
              <h2>Orthopedic Physiotherapy</h2>
              <p>
                At Dr. Y Physio, our orthopedic physiotherapy service in Noida
                is tailored to treat joint pain, post-surgical recovery, and
                chronic conditions. Our expert approach ensures improved
                mobility and enhanced quality of life.
              </p>
            </div>
          </article>
          <article className={styles.serviceItem}>
            <Image
              src="/images/service-posture.jpg"
              alt="Postural Correction & Ergonomics"
              className={styles.serviceImage}
              width={500}
              height={500}
              quality={90}
            />
            <div className={styles.serviceContent}>
              <h2>Postural Correction & Ergonomics</h2>
              <p>
                Improve your posture and prevent chronic pain with Dr. Y
                Physio&apos;s expert postural correction services. Our specialists
                provide customized ergonomic solutions that transform your work
                and living environments in Noida.
              </p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
