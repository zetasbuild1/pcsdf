import React from "react";
import Image from "next/image";

export default function AboutExactHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] lg:min-h-[440px] items-center gap-8 lg:gap-0">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-5 pt-10 pb-6 lg:py-16 z-10">
            {/* Small red accent bar */}
            <div className="w-10 h-[3px] bg-[#dc2626] mb-5 rounded-full" />

            {/* Title */}
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-[46px] text-gray-950 leading-[1.12] tracking-tight mb-5">
              About Us
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
              Together for a peaceful, inclusive and climate-friendly future through sustainable development.
            </p>
          </div>

          {/* Right Column: Hero Photo with Soft Left Feathering & Bottom-Right Red Swoop */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-end">
            <div className="relative w-full max-w-[660px] aspect-[1.95/1] overflow-hidden ml-auto">
              {/* Sprout & Hands Photo */}
              <Image
                src="/images/about_exact/about_hero_sprout.png"
                alt="Cultivating peace and climate resilience"
                fill
                className="object-cover object-[center_62%]"
                priority
              />

              {/* Soft Left Feathering Gradient */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />

              {/* Red Swoop Wave Accent on Bottom-Right */}
              <div className="absolute bottom-0 right-0 w-full sm:w-[85%] h-10 sm:h-16 pointer-events-none z-10">
                <svg
                  viewBox="0 0 500 100"
                  preserveAspectRatio="none"
                  className="w-full h-full text-[#dc2626] fill-current"
                >
                  <path d="M 0,100 C 180,95 320,55 500,10 L 500,100 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
