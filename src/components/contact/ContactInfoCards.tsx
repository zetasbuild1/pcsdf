import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Building2,
} from "lucide-react";
import styles from "./ContactInfoCards.module.css";

export default function ContactInfoCards() {
  return (
    <aside className={styles.sidebar}>
      {/* Card 1: Direct Contact Information */}
      <div className={styles.infoCard}>
        <div className={styles.cardHeader}>
          <Building2 size={20} className={styles.cardHeaderIcon} />
          <h3 className={styles.cardTitle}>Contact Information</h3>
        </div>

        <ul className={styles.infoList}>
          <li className={styles.infoItem}>
            <div className={styles.iconCircle}>
              <MapPin size={17} />
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Headquarters</span>
              <span className={styles.infoValue}>
                PCSDF Global Secretariat<br />
                Colombo Hub &amp; Geneva Liaison<br />
                Sri Lanka &amp; Switzerland
              </span>
            </div>
          </li>

          <li className={styles.infoItem}>
            <div className={styles.iconCircle}>
              <Mail size={17} />
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Email Inquiries</span>
              <a href="mailto:info@pcsdf.org" className={`${styles.infoValue} ${styles.infoLink}`}>
                info@pcsdf.org
              </a>
              <a href="mailto:partnerships@pcsdf.org" className={`${styles.infoValue} ${styles.infoLink}`}>
                partnerships@pcsdf.org
              </a>
            </div>
          </li>

          <li className={styles.infoItem}>
            <div className={styles.iconCircle}>
              <Phone size={17} />
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Telephone</span>
              <a href="tel:+94112345678" className={`${styles.infoValue} ${styles.infoLink}`}>
                +94 (11) 234-5678 (Asia-Pacific)
              </a>
              <span className={styles.infoValue}>
                +41 (22) 730-8111 (Europe)
              </span>
            </div>
          </li>

          <li className={styles.infoItem}>
            <div className={styles.iconCircle}>
              <Clock size={17} />
            </div>
            <div className={styles.infoContent}>
              <span className={styles.infoLabel}>Secretariat Hours</span>
              <span className={styles.infoValue}>
                Monday – Friday: 9:00 AM – 5:30 PM<br />
                (UTC+5:30 / CET)
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* Card 2: Response Time Commitment */}
      <div className={styles.guaranteeCard}>
        <h4 className={styles.guaranteeTitle}>
          <ShieldCheck size={18} color="#16633e" />
          <span>Our Communication Pledge</span>
        </h4>
        <p className={styles.guaranteeText}>
          We value every inquiry. Non-emergency community messages are addressed
          within 24–48 business hours. Urgent press and field partnership
          inquiries are expedited.
        </p>
      </div>

      {/* Card 3: Connect on Social Media */}
      <div className={styles.socialCard}>
        <h4 className={styles.socialTitle}>Connect with Our Community</h4>
        <div className={styles.socialIcons}>
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="Facebook"
          >
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.592 0 9 1.582 9 4.615V8z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="LinkedIn"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="X"
          >
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="YouTube"
          >
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="Instagram"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
