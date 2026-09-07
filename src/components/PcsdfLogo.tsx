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
      {/* SVG Emblem */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <circle
          cx="22"
          cy="22"
          r="20"
          fill={isLight ? "#13382c" : "#f2f7f3"}
          stroke={isLight ? "#275945" : "#c4dbc9"}
          strokeWidth="1.2"
        />
        {/* Outer orbital swoosh (gold) */}
        <path
          d="M10 26C8.5 20 12 12 19 9C26 6 34 9 36 15C37.5 19.5 35 25 31 29"
          stroke={emblemGold}
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Globe meridians */}
        <ellipse
          cx="22"
          cy="22"
          rx="14"
          ry="14"
          stroke={isLight ? "#2d634e" : "#b0cfb8"}
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <path
          d="M8 22H36"
          stroke={isLight ? "#2d634e" : "#b0cfb8"}
          strokeWidth="1"
        />
        <path
          d="M22 8V36"
          stroke={isLight ? "#2d634e" : "#b0cfb8"}
          strokeWidth="1"
        />
        {/* Leaf / Dove peace wings (emerald green) */}
        <path
          d="M15 28C14 21 21 16 28 14C26 20 22 26 15 28Z"
          fill={emblemGreen}
        />
        <path
          d="M20 29C22 24 28 20 33 21C30 25 25 29 20 29Z"
          fill={emblemDeepGreen}
          opacity="0.9"
        />
        {/* Sprout stem */}
        <path
          d="M15 32C17 29 19 25 22 22"
          stroke={emblemGold}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Gentle sun dot */}
        <circle cx="28" cy="12" r="2" fill={emblemGold} />
      </svg>

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
