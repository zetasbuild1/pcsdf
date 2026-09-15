"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";

export default function ExactFooter() {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-[#161a22] text-white pt-14 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10">
          {/* Column 1: Brand (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center gap-3 select-none group mb-4">
              <div className="relative w-9 h-9 shrink-0">
                <Image
                  src="/images/pcsdf/pcsdf-dove-red.png"
                  alt="PCSDF Dove Emblem"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[14px] text-white tracking-tight leading-tight">
                  Peace-Led Climate-Friendly
                </span>
                <span className="font-bold text-[14px] text-white tracking-tight leading-tight">
                  Sustainable Development Forum
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Working together for a peaceful, inclusive and climate-friendly future.
            </p>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-sm sm:text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-gray-400">
              <li>
                <Link
                  href="/"
                  style={{ color: pathname === "/" ? "#dc2626" : undefined }}
                  className={`transition-colors ${
                    pathname === "/" ? "text-[#dc2626] font-semibold" : "hover:text-white"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  style={{ color: pathname?.startsWith("/about") ? "#dc2626" : undefined }}
                  className={`transition-colors ${
                    pathname?.startsWith("/about") ? "text-[#dc2626] font-semibold" : "hover:text-white"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work"
                  style={{ color: pathname?.startsWith("/our-work") ? "#dc2626" : undefined }}
                  className={`transition-colors ${
                    pathname?.startsWith("/our-work") ? "text-[#dc2626] font-semibold" : "hover:text-white"
                  }`}
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#partners" className="hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  style={{ color: pathname?.startsWith("/news") ? "#dc2626" : undefined }}
                  className={`transition-colors ${
                    pathname?.startsWith("/news") ? "text-[#dc2626] font-semibold" : "hover:text-white"
                  }`}
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  style={{ color: pathname?.startsWith("/contact") ? "#dc2626" : undefined }}
                  className={`transition-colors ${
                    pathname?.startsWith("/contact") ? "text-[#dc2626] font-semibold" : "hover:text-white"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className={pathname === "/about" ? "lg:col-span-3" : "lg:col-span-3"}>
            <h4 className="font-bold text-white text-sm sm:text-base mb-4 tracking-wide">
              Get In Touch
            </h4>
            <div className={`space-y-2.5 text-xs sm:text-sm text-gray-300 ${pathname === "/about" ? "" : "mb-5"}`}>
              <a
                href="mailto:info@pcsdf.org"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-gray-400 shrink-0" />
                <span>info@pcsdf.org</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-[#0077b5] shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Social Square Icons under LinkedIn (only when NOT on About page) */}
            {pathname !== "/about" && (
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-[#0077b5] hover:bg-[#005f93] text-white rounded flex items-center justify-center transition-transform hover:scale-110 shadow-xs"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-[#0077b5] hover:bg-[#005f93] text-white rounded flex items-center justify-center transition-transform hover:scale-110 shadow-xs"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Column 4: On About Page -> Social buttons right-aligned; On Home Page -> Google Maps Card */}
          {pathname === "/about" ? (
            <div className="lg:col-span-3 flex justify-start lg:justify-end items-start pt-2">
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-[#0077b5] hover:bg-[#005f93] text-white rounded flex items-center justify-center transition-transform hover:scale-110 shadow-xs"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 bg-[#0077b5] hover:bg-[#005f93] text-white rounded flex items-center justify-center transition-transform hover:scale-110 shadow-xs"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          ) : (
            <div className="lg:col-span-3 flex justify-start lg:justify-end">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full max-w-[240px] aspect-[16/9] rounded-xl overflow-hidden border border-gray-700/60 shadow-md group hover:border-gray-500 transition-all bg-white"
              >
                <Image
                  src="/images/home_exact/footer_map.png"
                  alt="Location Map"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-1 right-2 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] text-[#0066cc] font-medium group-hover:underline shadow-xs">
                  View on Google Maps
                </div>
              </a>
            </div>
          )}
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-xs font-normal">
            © 2025 Peace-Led Climate-Friendly Sustainable Development Forum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
