"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import PcsdfLogo from "./PcsdfLogo";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/#work" },
  { label: "Impact", href: "/#impact" },
  { label: "Knowledge Hub", href: "/#knowledge" },
  { label: "Partnerships", href: "/#partnerships" },
  { label: "News", href: "/#news" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/about") return pathname === "/about";
    return false;
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        {/* Brand Logo */}
        <Link href="/" aria-label="PCSDF Home">
          <PcsdfLogo variant="dark" />
        </Link>

        {/* Desktop Nav Items */}
        <nav aria-label="Main Navigation">
          <ul className={styles.navLinks}>
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`${styles.navItem} ${
                      active ? styles.activeItem : ""
                    }`}
                  >
                    {item.label}
                    {active && <span className={styles.activeIndicator} />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Support Us Button & Mobile Trigger */}
        <div className={styles.actions}>
          <button className={styles.supportBtn} aria-label="Support Us">
            <Heart size={14} fill="currentColor" />
            <span>Support Us</span>
          </button>

          <button
            className={styles.menuBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => {
            const active = isItemActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.mobileLink} ${
                  active ? styles.mobileLinkActive : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            className={styles.supportBtn}
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            <Heart size={14} fill="currentColor" />
            <span>Support Us</span>
          </button>
        </div>
      )}
    </header>
  );
}
