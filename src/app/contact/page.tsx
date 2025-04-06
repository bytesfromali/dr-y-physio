import { Metadata } from "next";
import Link from "next/link";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Dr. Y Physio - Book Your Appointment Today",
  description:
    "Get in touch with Dr. Y Physio in Noida for appointments, inquiries, and expert physiotherapy care. Contact us via phone, email, or the online form.",
};

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.contactPage}>
        <header className={styles.header}>
          <h1>Contact Dr. Y Physio</h1>
          <p>
            We are here to assist you with appointments and inquiries. Please
            fill out the form below or reach out to us directly.
          </p>
        </header>
        <div className={styles.contactContainer}>
          {/* Left Column: Contact Info */}
          <div className={styles.info}>
            <h2>Our Clinic</h2>
            <p>
              First Floor, A-42, Amaltash Marg,
              <br />
              Block A, Sector 22, Noida
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+919466597785" className={styles.customLink}>
                +91 9466597785
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:hello@dryphysio.com"
                className={styles.customLink}
              >
                hello@dryphysio.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a href="https://dryphysio.com" className={styles.customLink}>
                dryphysio.com
              </a>
            </p>
          </div>
          {/* Right Column: Contact Form */}
          <div className={styles.form}>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone Number" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        {/* Embedded Google Map */}
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4616.179241940971!2d77.3419428!3d28.594154099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce502bc33fb0d%3A0x3ab3c368d5c03255!2sDr.%20Y%20Physio!5e1!3m2!1sen!2sin!4v1743954036731!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
