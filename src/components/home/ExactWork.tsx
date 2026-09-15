import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ExactWork() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Landscape photo with red rounded tab */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[490px] pl-6 sm:pl-8">
              {/* Vertical Red Rounded Tab on the left edge - visibly protruding */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 sm:w-14 h-28 sm:h-36 bg-[#dc2626] rounded-2xl sm:rounded-3xl z-0"
                aria-hidden="true"
              />

              {/* Wind Turbines Mountain Photo */}
              <div className="relative z-10 w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-gray-100">
                <Image
                  src="/images/home_exact/work_wind.png"
                  alt="Renewable Energy & Climate Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Work Text and CTA */}
          <div className="lg:col-span-6">
            {/* Small red accent bar */}
            <div className="w-10 h-[3px] bg-[#dc2626] mb-4 rounded-full" />

            {/* Heading */}
            <h2 className="font-bold text-3xl sm:text-4xl text-gray-950 tracking-tight mb-4">
              Our Work
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              We work towards peace, climate resilience and sustainable development through collaborative partnerships and community-driven solutions.
            </p>

            {/* Red Pill CTA Button */}
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>View Our Work</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
