"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Testimonials.module.css";

const testimonialsData = [
  {
    name: "Alice",
    review:
      "Dr. Y Physio provided excellent care and my recovery was swift. Highly recommended!",
    rating: 5,
  },
  {
    name: "Bob",
    review:
      "The home visit service was convenient and the consultation was thorough.",
    rating: 4,
  },
  {
    name: "Charlie",
    review:
      "Great online consultation experience. The doctor was professional and empathetic.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
      <div className={styles.testimonialContainer}>
        <button
          className={styles.arrowButton}
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <FaArrowLeft />
        </button>
        <div className={styles.testimonialCard}>
          <p className={styles.reviewText}>&quot;{testimonial.review}&quot;</p>
          <p className={styles.clientName}>&#8211; {testimonial.name}</p>
        </div>
        <button
          className={styles.arrowButton}
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
