"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Dr. Y Physio
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/team" className={styles.navLink}>
              Our Team
            </Link>
          </li>
          <li>
            <Link href="/blogs" className={styles.navLink}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/appointments" className={styles.bookNow}>
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className={styles.mobileToggle}>
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className={styles.toggleButton}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <Link href="/" className={styles.mobileNavLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.mobileNavLink}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.mobileNavLink}>
                About
              </Link>
            </li>
            <li>
              <Link href="/team" className={styles.mobileNavLink}>
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/blogs" className={styles.mobileNavLink}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.mobileNavLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/appointments" className={styles.mobileBookNow}>
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
