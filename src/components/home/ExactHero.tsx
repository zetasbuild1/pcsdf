import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ExactHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px] items-center gap-8 lg:gap-0">
          {/* Left Column: Headline, Subtitle, CTA */}
          <div className="lg:col-span-5 pt-10 pb-6 lg:py-16 z-10">
            {/* Small red accent bar */}
            <div className="w-10 h-[3px] bg-[#dc2626] mb-5 rounded-full" />

            {/* Headline */}
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-gray-950 leading-[1.12] tracking-tight mb-5">
              Peace-Led<br />
              Climate-Friendly<br />
              Sustainable Development<br />
              Forum
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              Working together for a peaceful, inclusive and climate-friendly future through sustainable development.
            </p>

            {/* Red Pill CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Learn More</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Column: Leadership Photo with Feathered Left and Red Corner Accent */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-end">
            <div className="relative w-full max-w-[680px] aspect-[1.92/1] overflow-hidden ml-auto">
              {/* Team Group Photo */}
              <Image
                src="/images/home_exact/hero_team.png"
                alt="PCSDF Leadership and Board"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Soft Left Feathering Gradient */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />

              {/* Red Corner Wedge Accent */}
              <div
                className="absolute bottom-0 right-0 w-36 sm:w-56 h-9 sm:h-14 bg-[#dc2626] pointer-events-none z-10"
                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
