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
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topContainer}>
        {/* Column 1: Clinic Info */}
        <div className={styles.column}>
          <Image
            src={"/images/drphysio-logo.png"}
            alt="Dr. Y Physio is Noida's best physiotherapy clinic"
            title="Dr. Y Physio is Noida's best physiotherapy clinic"
            width={150}
            height={80}
          ></Image>
          {/* <h3 className={styles.columnTitle}>Dr. Y Physio</h3> */}
          <p className={styles.address}>
            First Floor, A-42, Amaltash Marg
            <br />
            Block A, Sector 22, Noida
            <br />
            Uttar Pradesh 201301
          </p>
          <p className={styles.phoneEmail}>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919466597785" className={styles.linkAccent}>
              +91 9466597785
            </a>
          </p>
          <p className={styles.phoneEmail}>
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@dryphysio.com" className={styles.linkAccent}>
              hello@dryphysio.com
            </a>
          </p>
          <p className={styles.phoneEmail}>
            <strong>Website:</strong>{" "}
            <a
              href="https://dryphysio.com"
              className={styles.linkAccent}
              target="_blank"
              rel="noopener noreferrer"
            >
              dryphysio.com
            </a>
          </p>
          <p className={styles.openingHoursTitle}>Opening Hours</p>
          <ul className={styles.openingHoursList}>
            <li>Mon - Fri: 10am - 8pm</li>
            <li>Sat: 11am - 8pm</li>
            <li>Sun: 11am - 8pm</li>
          </ul>
        </div>

        {/* Column 2: The Clinic */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>The Clinic</h4>
          <ul className={styles.columnLinks}>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/blogs">Blog</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/appointments">Book Appointment</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Physio Treatments */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Physio Treatments</h4>
          <ul className={styles.columnLinks}>
            <li>
              <Link href="/services#in-clinic">In-Clinic Physiotherapy</Link>
            </li>
            <li>
              <Link href="/services#home-visit">Home Visit Physio</Link>
            </li>
            <li>
              <Link href="/services#online-consult">Online Consultation</Link>
            </li>
            <li>
              <Link href="/services#sports-rehab">Sports Rehabilitation</Link>
            </li>
            <li>
              <Link href="/services#orthopedic">Orthopedic Physio</Link>
            </li>
            <li>
              <Link href="/services#postural-ergonomics">
                Postural Correction
              </Link>
            </li>
            <li>
              <Link href="/services#neuro-physio">Neuro Physiotherapy</Link>
            </li>
            <li>
              <Link href="/services#pediatric">Pediatric Physio</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Links & Resources */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.columnLinks}>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link href="/cancellation">Cancellation Policy</Link>
            </li>
            <li>
              <Link href="/compliance">Compliance</Link>
            </li>
          </ul>

          <h4 className={styles.columnTitle}>Resources</h4>
          <ul className={styles.columnLinks}>
            <li>
              <a
                href="https://www.physio-pedia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Physiopedia
              </a>
            </li>
            <li>
              <a
                href="https://www.physioplus.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                PhysioPlus
              </a>
            </li>
            <li>
              <a
                href="https://www.physionet.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                PhysioNet
              </a>
            </li>
            <li>
              <a
                href="https://www.iafpt.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                IAFPT
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.socialIcons}>
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
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Dr. Y Physio. All rights reserved.
        </p>
        <p className={styles.builtBy}>
          Built with ❤️ by{" "}
          <a
            href="https://bytesfromali.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            BYTESFROMALI
          </a>
        </p>
      </div>
    </footer>
  );
}
