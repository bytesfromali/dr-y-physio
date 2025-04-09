"use client";

import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.description}>
            For inquiries or to book an appointment, please contact us.
          </p>
          <p className={styles.contactDetails}>
            <strong>Phone:</strong> +91 9466597785
          </p>
          <p className={styles.contactDetails}>
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@dryphysio.com" className={styles.link}>
              hello@dryphysio.com
            </a>
          </p>
          <p className={styles.contactDetails}>
            <strong>Address:</strong> First Floor, A-42, Amaltash Marg, Block A,
            Sector 22, Noida
          </p>
        </div>
        <div className={styles.formAndMap}>
          <form
            action="https://forms.zohopublic.com/dryphysio1/form/ContactUs/formperma/MLuiYvIonEdBdfbeBJSbdR5MhYLJ_rsikHPaXaD4GFk/htmlRecords/submit"
            name="form"
            id="form"
            method="POST"
            acceptCharset="utf-8"
            autoComplete="off"
            className={styles.contactForm}
            encType="multipart/form-data"
          >
            <input type="hidden" name="zf_referrer_name" value=""></input>
            <input type="hidden" name="zf_redirect_url" value=""></input>
            <input type="hidden" name="zc_gad" value=""></input>
            <h3 className={styles.formTitle}>Send Us a Message</h3>
            <input
              title="First Name"
              className={styles.input}
              type="text"
              maxLength={255}
              name="Name_First"
              placeholder="First Name"
            ></input>
            <input
              title="Last Name"
              className={styles.input}
              type="text"
              maxLength={255}
              name="Name_Last"
              placeholder="Last Name"
            ></input>
            <input
              title="Email"
              className={styles.input}
              type="text"
              maxLength={255}
              name="Email"
              placeholder="Email"
            ></input>
            <textarea
              title="Message"
              className={styles.textarea}
              name="MultiLine"
              maxLength={65535}
              placeholder="Leave us a few words"
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
          <div className={styles.map}>
            <iframe
              title="Dr. Y Physio, Best Physiotherapy Clinic in Noida Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7795.503925692825!2d77.33936251312356!3d28.594158785717187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce502bc33fb0d%3A0x3ab3c368d5c03255!2sDr.%20Y%20Physio!5e1!3m2!1sen!2sin!4v1743854752175!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
