"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Section (Full Width Background) */}
      <div className={styles.topSection}>
        <div className={styles.innerContainer}>
          {/* Contact Column */}
          <div className={styles.contactColumn}>
            {/* Big rectangular logo */}
            <img
              src="/images/drphysio-logo.png"
              alt="Dr. Y Physio Logo"
              className={styles.logoImage}
            />
            <p className={styles.address}>
              First Floor, A-42, Amaltash Marg,
              <br />
              Block A, Sector 22, Noida
            </p>
            {/* Phone & Email on separate rows */}
            <a
              href="tel:+919466597785"
              className={styles.pillContact}
              aria-label="Call us"
            >
              +91 9466597785
            </a>
            <a
              href="mailto:hello@dryphysio.com"
              className={styles.pillContact}
              aria-label="Email us"
            >
              hello@dryphysio.com
            </a>
          </div>

          {/* Opening Hours Column */}
          <div className={styles.hoursColumn}>
            <h3 className={styles.columnTitle}>Opening Hours</h3>
            <ul className={styles.hoursList}>
              <li>Mon - Fri: 10am - 8pm</li>
              <li>Sat: 11am - 8pm</li>
              <li>Sun: 11am - 8pm</li>
            </ul>
          </div>

          {/* Stay in Touch Column */}
          <div className={styles.stayInTouchColumn}>
            <h3 className={styles.columnTitle}>Stay in Touch</h3>
            <form className={styles.newsletterForm}>
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your Email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {/* <div className={styles.socialIcons}>
              <Link href="https://www.facebook.com/dryphysio" target="_blank" aria-label="Facebook">
                <FaFacebookF size={18} />
              </Link>
              <Link href="https://www.instagram.com/dryphysio/" target="_blank" aria-label="Instagram">
                <FaInstagram size={18} />
              </Link>
              <Link href="https://www.linkedin.com/company/dryphysio" target="_blank" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
              </Link>
              <Link href="https://www.youtube.com/@dryphysio" target="_blank" aria-label="YouTube">
                <FaYoutube size={18} />
              </Link>
              <Link href="https://g.co/kgs/cBGgyLU" target="_blank" aria-label="Google">
                <FaGoogle size={18} />
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <ul className={styles.bottomLinks}>
          <li>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/cancellation">Cancellation Policy</Link>
          </li>
        </ul>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Dr. Y Physio. All rights reserved.
        </p>
        <div className={styles.socialIconsBottom}>
          <Link
            href="https://www.facebook.com/dryphysio"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </Link>
          <Link
            href="https://www.instagram.com/dryphysio/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/dryphysio"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </Link>
          <Link
            href="https://www.youtube.com/@dryphysio"
            target="_blank"
            aria-label="YouTube"
          >
            <FaYoutube size={18} />
          </Link>
          <Link
            href="https://g.co/kgs/cBGgyLU"
            target="_blank"
            aria-label="Google"
          >
            <FaGoogle size={18} />
          </Link>
        </div>
        <p className={styles.builtWithLove}>
          Built with ❤️ and care by{" "}
          <a href="https://bytesfromali.com">BYTESFROMALI</a> for by Dr. Y Physio
        </p>
      </div>
    </footer>
  );
}
