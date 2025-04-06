"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import styles from "./Services.module.css";

interface Service {
  id: number;
  title: string;
  image: string;
  content: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "In-Clinic Physiotherapy",
    image: "/images/clinic-treatment-4.jpeg",
    content:
      "At Dr. Y Physio in Noida, our in-clinic physiotherapy provides the best treatment for musculoskeletal conditions. Experience personalized care with advanced technology and expert guidance to ensure a fast and effective recovery.",
  },
  {
    id: 2,
    title: "Home Visit Physiotherapy",
    image: "/images/in-house.jpeg",
    content:
      "Our home visit physiotherapy service in Noida offers top-quality care at your doorstep. Enjoy the convenience of expert treatment tailored to your needs, ensuring comfort and rapid recovery in the familiarity of your home.",
  },
  {
    id: 3,
    title: "Online Consultation",
    image: "/images/remote-consultancy.jpg",
    content:
      "Dr. Y Physio’s online consultations bring expert physiotherapy advice to your screen. Get comprehensive assessments, personalized treatment plans, and ongoing support from the best physiotherapists in Noida—all from the comfort of your home.",
  },
  {
    id: 4,
    title: "Sports Rehabilitation",
    image: "/images/clinic-treatment-2.jpeg",
    content:
      "Our sports rehabilitation program in Noida is designed for athletes seeking optimal recovery and performance enhancement. At Dr. Y Physio, we use innovative techniques to treat sports injuries and boost athletic performance.",
  },
  {
    id: 5,
    title: "Orthopedic Physiotherapy",
    image: "/images/clinic-treatment-3.jpeg",
    content:
      "Dr. Y Physio in Noida offers comprehensive orthopedic physiotherapy to address joint pain, post-surgical recovery, and related issues. Our specialized treatments help restore mobility and improve overall quality of life.",
  },
  {
    id: 6,
    title: "Postural Correction & Ergonomics",
    image: "/images/clinic-treatment-1.jpeg",
    content:
      "Improve your posture and prevent chronic pain with Dr. Y Physio's expert postural correction and ergonomic assessments in Noida. Our specialists provide customized solutions to enhance your work and living environments.",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service>(servicesData[0]);
  const [expandedServiceId, setExpandedServiceId] = useState<number | null>(servicesData[0].id);

  const handleSelect = (service: Service) => {
    setSelectedService(service);
    setExpandedServiceId(service.id);
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Left Column: Service Image & CTA Button */}
        <div className={styles.imageColumn}>
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className={styles.serviceImage}
          />
          <Link href="/appointments" className={styles.ctaButton}>
            Book Appointment
          </Link>
        </div>

        {/* Right Column: Accordion List */}
        <div className={styles.accordionColumn}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.accordionItem}>
              <button
                className={`${styles.accordionHeader} ${
                  expandedServiceId === service.id ? styles.active : ""
                }`}
                onClick={() => handleSelect(service)}
              >
                <span className={styles.indicator}>
                  {expandedServiceId === service.id ? <FaMinus /> : <FaPlus />}
                </span>
                {service.title}
              </button>
              <AnimatePresence>
                {expandedServiceId === service.id && (
                  <motion.div
                    className={styles.accordionContent}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{service.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
