import React from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import PcsdfLogo from "./PcsdfLogo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Corner Botanical Foliage Silhouette Overlays */}
      <svg
        className={styles.leafDecorationLeft}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-20 220C40 160 120 150 180 170C110 130 50 170 -20 220Z"
          fill="#4ade80"
        />
        <path
          d="M-30 170C30 110 110 100 170 120C100 80 40 120 -30 170Z"
          fill="#22c55e"
        />
        <path
          d="M0 240C70 190 150 180 220 200C150 150 70 200 0 240Z"
          fill="#86efac"
        />
      </svg>

      <svg
        className={styles.leafDecorationRight}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M220 -20C160 40 150 120 170 180C130 110 170 50 220 -20Z"
          fill="#4ade80"
        />
        <path
          d="M170 -30C110 30 100 110 120 170C80 100 120 40 170 -30Z"
          fill="#22c55e"
        />
      </svg>

      <div className={styles.container}>
        {/* Top Row */}
        <div className={styles.topRow}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <PcsdfLogo variant="light" size="md" />
          </div>

          {/* Navigation Column 1 */}
          <div className={styles.linkCol}>
            <Link href="#about" className={styles.footerLink}>
              About
            </Link>
            <Link href="/our-work" className={styles.footerLink}>
              Our Work
            </Link>
            <Link href="#impact" className={styles.footerLink}>
              Impact
            </Link>
            <Link href="/knowledge-hub" className={styles.footerLink}>
              Knowledge Hub
            </Link>
          </div>

          {/* Navigation Column 2 */}
          <div className={styles.linkCol}>
            <Link href="#partnerships" className={styles.footerLink}>
              Partnerships
            </Link>
            <Link href="/news" className={styles.footerLink}>
              News
            </Link>
            <Link href="/contact" className={styles.footerLink}>
              Contact
            </Link>
            <Link href="#support" className={styles.footerLink}>
              Support Us
            </Link>
          </div>

          {/* Social Links Column */}
          <div className={styles.socialCol}>
            <span className={styles.socialTitle}>Follow Us</span>
            <div className={styles.socialIcons}>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
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
                className={styles.socialIconBtn}
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
                className={styles.socialIconBtn}
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
                className={styles.socialIconBtn}
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
                className={styles.socialIconBtn}
                aria-label="Instagram"
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Registered Organization Details Bar */}
        <div className="mt-8 pt-6 border-t border-emerald-900/40 text-xs text-emerald-300/70 flex flex-col md:flex-row justify-between gap-4 leading-relaxed">
          <div>
            <p className="font-semibold text-emerald-200">
              The Peace-Led Climate-Friendly Sustainable Development Forum (PCSDF)
            </p>
            <p className="mt-0.5">
              Registered in Singapore as a Company Limited by Guarantee (Incorporated 24 Dec 2021)
            </p>
            <p className="text-emerald-400/80">
              60 Paya Lebar Road, #06-28 Paya Lebar Square, Singapore 409051
            </p>
          </div>
          <div className="text-left md:text-right">
            <p>
              Direct WhatsApp: <a href="https://wa.me/6580701667" className="underline hover:text-white">+65 8070 1667</a> | Tel: +65 9724 0021
            </p>
            <p>
              Email: <a href="mailto:chapugalle@pcsdf.org" className="underline hover:text-white">chapugalle@pcsdf.org</a> | <a href="mailto:chaihapugalle@gmail.com" className="underline hover:text-white">chaihapugalle@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© {new Date().getFullYear()} PCSDF. All rights reserved.</p>
          <div className={styles.motto}>
            <span>Peace-Led • Climate-Friendly • Regenerative Futures</span>
            <Leaf size={14} className={styles.leafIcon} />
          </div>
        </div>

        {/* Developer Bar */}
        <div className={styles.developerBar}>
          <p>© 2026 Designed and Developed by ZetasBuild. All Rights Reserved</p>
          <p>
            zetasbuild -{" "}
            <a
              href="https://www.zetasbuild.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.developerLink}
            >
              www.zetasbuild.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
