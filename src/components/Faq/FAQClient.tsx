"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQClient.module.css";

const faqData = [
  {
    id: 1,
    question: "What services does Dr. Y Physio offer?",
    answer:
      "Dr. Y Physio in Noida offers comprehensive physiotherapy services including in-clinic treatments, home visits, online consultations, sports rehabilitation, orthopedic physiotherapy, and postural correction. Our expert team ensures personalized care for every patient.",
  },
  {
    id: 2,
    question: "How do I book an appointment?",
    answer:
      "You can easily book an appointment online through our website or call us directly at +91 9466597785. Our team at Dr. Y Physio is ready to assist you in scheduling your session at your convenience.",
  },
  {
    id: 3,
    question: "What qualifications do your physiotherapists have?",
    answer:
      "Our team includes highly qualified professionals – from our lead physiotherapist with an MPT in Sports Physiotherapy and extensive experience with top athletes to our specialists in pediatric, orthopedic, and neurological physiotherapy.",
  },
  {
    id: 4,
    question: "Do you offer home visit services?",
    answer:
      "Yes, Dr. Y Physio provides top-quality home visit physiotherapy in Noida and surrounding areas, ensuring you receive expert care in the comfort of your home.",
  },
  {
    id: 5,
    question: "Is online consultation available?",
    answer:
      "Absolutely! We offer online consultations so you can receive professional physiotherapy advice and personalized treatment plans from the best experts at Dr. Y Physio, regardless of your location.",
  },
  {
    id: 6,
    question: "What is the typical duration of a session?",
    answer:
      "Sessions at Dr. Y Physio typically last between 30 to 60 minutes, depending on your specific needs and the treatment plan designed by our experienced physiotherapists.",
  },
  {
    id: 7,
    question: "Are your services available in all sectors of Noida?",
    answer:
      "Yes, Dr. Y Physio proudly serves all sectors of Noida. Our conveniently located clinics and mobile services ensure that high-quality physiotherapy care is accessible throughout the region.",
  },
  {
    id: 8,
    question: "What is physiotherapy and how can it help me recover?",
    answer:
      "Physiotherapy is a healthcare discipline focused on restoring movement and function through physical interventions. At Dr. Y Physio, our expert physiotherapists use the latest techniques to help you recover from injuries, manage pain, and improve overall mobility.",
  },
];

export default function FAQClient() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
        <p className={styles.pageDescription}>
          Find answers to common questions about our physiotherapy services,
          appointment process, and treatment details at Dr. Y Physio in Noida.
        </p>
        <div className={styles.faqList}>
          {faqData.map((faq) => (
            <div key={faq.id} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(faq.id)}
              >
                {faq.question}
                <span className={styles.indicator}>
                  {expandedFAQ === faq.id ? "-" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {expandedFAQ === faq.id && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
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
