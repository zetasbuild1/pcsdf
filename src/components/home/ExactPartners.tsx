import React from "react";

export default function ExactPartners() {
  return (
    <section id="partners" className="w-full py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="w-10 h-[3px] bg-[#dc2626] mb-3 rounded-full" />
          <h2 className="font-bold text-3xl sm:text-4xl text-gray-950 tracking-tight mb-2">
            Our Partners
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We are proud to work with a range of partners and organizations who share our vision.
          </p>
        </div>

        {/* 6 Partner Logos with Vertical Dividers (No outer card border) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-200 py-4">
          {/* 1. UNDP */}
          <div className="flex items-center justify-center p-4 sm:p-6 group">
            <div className="w-[52px] h-[64px] bg-[#006eb5] rounded flex flex-col items-center justify-between p-2 shadow-xs group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 40 28" fill="none" className="w-7 h-5">
                <circle cx="20" cy="14" r="7" stroke="white" strokeWidth="1.2" fill="none" />
                <path d="M15 14h10M20 7v14M16 10a8 8 0 0 0 8 0M16 18a8 8 0 0 1 8 0" stroke="white" strokeWidth="0.8" />
                <path d="M10 22C6 17 6 9 12 5M30 22C34 17 34 9 28 5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <div className="text-white font-bold text-[10px] tracking-widest leading-none text-center">
                <div>UN</div>
                <div>DP</div>
              </div>
            </div>
          </div>

          {/* 2. UN Environment Programme */}
          <div className="flex items-center justify-center p-4 sm:p-6 group">
            <div className="flex items-center gap-2 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-[#006eb5] text-xl tracking-tight">
                UN
              </span>
              <div className="w-7 h-7 rounded-full border-2 border-[#00adef] flex items-center justify-center text-[#00adef]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#00adef] uppercase tracking-tight leading-tight">
                  environment
                </span>
                <span className="text-[10px] font-medium text-[#00adef] uppercase tracking-tight leading-tight">
                  programme
                </span>
              </div>
            </div>
          </div>

          {/* 3. FAO */}
          <div className="flex items-center justify-center p-4 sm:p-6 group">
            <div className="w-13 h-13 rounded-full border-2 border-[#006699] flex flex-col items-center justify-center p-1 group-hover:scale-105 transition-transform">
              <div className="flex items-center justify-center text-[#006699] font-serif font-black text-[12px] tracking-wider leading-none">
                FAO
              </div>
              <svg viewBox="0 0 32 16" fill="none" className="w-6 h-2.5 text-[#006699] mt-0.5">
                <path d="M4 12C8 6 12 4 16 12C20 4 24 6 28 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M16 2v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* 4. IUCN */}
          <div className="flex items-center justify-center p-4 sm:p-6 group">
            <div className="flex items-center gap-1 group-hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-full border-[3.5px] border-l-[#00a2e8] border-t-[#00a2e8] border-r-[#004b79] border-b-[#003366] flex items-center justify-center p-1">
                <span className="font-extrabold text-[#003366] text-[11px] tracking-tight">
                  IUCN
                </span>
              </div>
            </div>
          </div>

          {/* 5. Green Climate Fund (GCF) */}
          <div className="flex items-center justify-center p-4 sm:p-6 group">
            <div className="flex items-center gap-2 group-hover:scale-105 transition-transform">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4ade80] via-[#10b981] to-[#0ea5e9] flex items-center justify-center shadow-xs">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 opacity-90">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-black text-gray-800 tracking-wider uppercase leading-tight">
                  GREEN
                </span>
                <span className="text-[8px] font-extrabold text-gray-700 tracking-wider uppercase leading-tight">
                  CLIMATE
                </span>
                <span className="text-[8px] font-bold text-gray-600 tracking-wider uppercase leading-tight">
                  FUND
                </span>
              </div>
            </div>
          </div>

          {/* 6. European Union */}
          <div className="flex items-center justify-center p-4 sm:p-6 group">
            <div className="w-16 h-11 bg-[#003399] rounded flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform relative p-1">
              <svg viewBox="0 0 100 70" className="w-12 h-8" fill="#ffcc00">
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
                  const rad = (deg * Math.PI) / 180;
                  const cx = 50 + 20 * Math.sin(rad);
                  const cy = 35 - 20 * Math.cos(rad);
                  return (
                    <polygon
                      key={deg}
                      points={`${cx},${cy - 2.5} ${cx + 0.8},${cy - 0.8} ${cx + 2.5},${cy - 0.8} ${cx + 1.2},${cy + 0.5} ${cx + 1.8},${cy + 2.2} ${cx},${cy + 1.1} ${cx - 1.8},${cy + 2.2} ${cx - 1.2},${cy + 0.5} ${cx - 2.5},${cy - 0.8} ${cx - 0.8},${cy - 0.8}`}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
