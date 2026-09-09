import React from "react";

interface PcsdfLogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PcsdfLogo({
  variant = "dark",
  className = "",
  size = "md",
}: PcsdfLogoProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "#ffffff" : "#143e31";
  const subtextColor = isLight ? "#9ab4a7" : "#4e6357";
  const emblemGold = "#d4a343";
  const emblemGreen = isLight ? "#4ade80" : "#22774e";
  const emblemDeepGreen = isLight ? "#22c55e" : "#144e33";

  const scale = size === "sm" ? 0.8 : size === "lg" ? 1.2 : 1;

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}
    >
      {/* Official Emblem Image from pcsdf.org */}
      <img
        src="/images/pcsdf/cropped-Logo-4-1.jpg"
        alt="PCSDF Official Emblem"
        width="44"
        height="44"
        className="shrink-0 w-11 h-11 rounded-full object-cover shadow-sm border border-emerald-900/10"
      />

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          style={{
            fontFamily: "var(--font-editorial)",
            color: textColor,
            fontSize: "1.45rem",
            fontWeight: 700,
            letterSpacing: "0.02em",
            lineHeight: 1.05,
          }}
        >
          PCSDF
        </span>
        <span
          className="hidden sm:block"
          style={{
            fontFamily: "var(--font-body)",
            color: subtextColor,
            fontSize: "0.58rem",
            fontWeight: 500,
            letterSpacing: "0.01em",
            lineHeight: 1.15,
            marginTop: "2px",
          }}
        >
          Peace-Led Climate-Friendly
          <br />
          Sustainable Development Forum
        </span>
      </div>
    </div>
  );
}
