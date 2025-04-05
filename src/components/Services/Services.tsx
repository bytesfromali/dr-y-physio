"use client";

import styles from "./Services.module.css";

const servicesData = [
  {
    title: "In-Clinic Physiotherapy",
    description: "Receive personalized treatment at our state-of-the-art clinic.",
    icon: "/icons/clinic.svg", // Place your icon in public/icons
  },
  {
    title: "Home Visits",
    description: "Get professional physiotherapy services at your home.",
    icon: "/icons/home.svg",
  },
  {
    title: "Online Consultations",
    description: "Consult with our experts online from anywhere.",
    icon: "/icons/online.svg",
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className="container mx-auto px-4 py-8">
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className={styles.serviceIcon}
              />
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
