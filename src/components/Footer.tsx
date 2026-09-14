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
          fill="#f87171"
        />
        <path
          d="M-30 170C30 110 110 100 170 120C100 80 40 120 -30 170Z"
          fill="#ef4444"
        />
        <path
          d="M0 240C70 190 150 180 220 200C150 150 70 200 0 240Z"
          fill="#fca5a5"
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
          fill="#f87171"
        />
        <path
          d="M170 -30C110 30 100 110 120 170C80 100 120 40 170 -30Z"
          fill="#ef4444"
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
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@pcsdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                aria-label="TikTok"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/PCSDF_Org"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                aria-label="X (Twitter)"
              >
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Registered Organization Details Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-gray-400 flex flex-col md:flex-row justify-between gap-4 leading-relaxed">
          <div>
            <p className="font-semibold text-white">
              The Peace-Led Climate-Friendly Sustainable Development Forum (PCSDF)
            </p>
            <p className="mt-0.5">
              Registered in Singapore as a Company Limited by Guarantee (Incorporated 24 Dec 2021)
            </p>
            <p className="text-gray-300">
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
