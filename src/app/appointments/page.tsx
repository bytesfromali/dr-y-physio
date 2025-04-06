import { Metadata } from "next";
import Link from "next/link";
import styles from "./appointments.module.css";

export const metadata: Metadata = {
  title: "Book an Appointment - Dr. Y Physio",
  description:
    "Schedule an appointment for in-clinic treatments, home visits, or online consultations with Dr. Y Physio in Noida.",
};

export default function AppointmentsPage() {
  return (
    <div className={styles.appointmentsPage}>
      <header className={styles.header}>
        <h1>Book an Appointment</h1>
        <p>
          Fill out the form to schedule your appointment. Our expert team will
          get in touch to confirm your booking.
        </p>
      </header>
      <div className={styles.twoColumnLayout}>
        <div className={styles.seoContent}>
          <h2>Experience the Best Physiotherapy Care in Noida</h2>
          <p>
            Dr. Y Physio is committed to providing comprehensive physiotherapy
            services that include in-clinic treatments, home visits, and online
            consultations.
          </p>
          <p>
            Our team of highly qualified physiotherapists uses advanced
            techniques to help you recover and improve your quality of life.
          </p>
          <p>
            With state-of-the-art facilities and a patient-centric approach, we
            ensure personalized care tailored to your needs. Choose Dr. Y Physio
            for expert care and a commitment to your well-being.
          </p>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.appointmentForm}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <select title="Select service required" required>
              <option value="">Select Service</option>
              <option value="in-clinic">In-Clinic Physiotherapy</option>
              <option value="home-visit">Home Visit</option>
              <option value="online">Online Consultation</option>
            </select>
            <input title="Appointment date" type="date" required />
            <textarea placeholder="Additional Details" required></textarea>
            <button type="submit">Submit Appointment Request</button>
          </form>
          <p className={styles.contactDirect}>
            Or call us directly at{" "}
            <Link href="tel:+919466597785" className={styles.customLink}>
              +91 9466597785
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
