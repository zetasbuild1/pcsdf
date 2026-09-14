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
  const textColor = isLight ? "#ffffff" : "#111827";
  const subtextColor = isLight ? "#d1d5db" : "#4b5563";

  const scale = size === "sm" ? 0.8 : size === "lg" ? 1.2 : 1;

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      style={{ transform: `scale(${scale})`, transformOrigin: "left center" }}
    >
      {/* Official Peace Dove Emblem */}
      <img
        src={isLight ? "/images/pcsdf/pcsdf-dove-white.png" : "/images/pcsdf/pcsdf-dove-red.png"}
        alt="PCSDF Peace Dove Emblem"
        width="44"
        height="42"
        className="shrink-0 h-10 w-auto object-contain"
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
