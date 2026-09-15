"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Partnerships", href: "#partners" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function ExactNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 select-none group">
          <div className="relative w-10 h-10 shrink-0">
            <Image
              src="/images/pcsdf/pcsdf-dove-red.png"
              alt="PCSDF Dove Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[14px] sm:text-[16px] text-gray-900 tracking-tight leading-tight">
              Peace-Led Climate-Friendly
            </span>
            <span className="font-bold text-[14px] sm:text-[16px] text-gray-900 tracking-tight leading-tight">
              Sustainable Development Forum
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = item.href === "/" ? isHome : pathname === item.href;
            return (
              <div key={item.label} className="relative py-2 flex flex-col items-center">
                <Link
                  href={item.href}
                  className={`text-[15px] font-semibold transition-colors duration-200 ${
                    active
                      ? "text-[#dc2626]"
                      : "text-gray-800 hover:text-[#dc2626]"
                  }`}
                >
                  {item.label}
                </Link>
                {active && (
                  <span className="absolute bottom-0 w-6 h-[2.5px] bg-[#dc2626] rounded-full" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-gray-700 hover:text-gray-950 hover:bg-gray-100 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {NAV_ITEMS.map((item) => {
            const active = item.href === "/" ? isHome : pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-semibold transition ${
                  active
                    ? "text-[#dc2626] bg-red-50"
                    : "text-gray-800 hover:text-[#dc2626] hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
