import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ExactAbout() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Layered Composition */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[470px] pb-8 pr-6 sm:pr-8 pl-6 sm:pl-8">
              {/* Vertical Red Rounded Tab on the left edge - visibly protruding */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 sm:w-14 h-28 sm:h-36 bg-[#dc2626] rounded-2xl sm:rounded-3xl z-0"
                aria-hidden="true"
              />

              {/* Main Conference Photo */}
              <div className="relative z-10 w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-gray-100">
                <Image
                  src="/images/home_exact/about_conference.png"
                  alt="PCSDF Conference & Stakeholder Session"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Sprout Seedling Card */}
              <div className="absolute -bottom-2 sm:-bottom-4 right-0 sm:right-2 w-36 sm:w-48 aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white z-20 bg-white">
                <Image
                  src="/images/home_exact/about_sprout.png"
                  alt="Cultivating Sustainable Growth"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Mission Text and CTA */}
          <div className="lg:col-span-6">
            {/* Small red accent bar */}
            <div className="w-10 h-[3px] bg-[#dc2626] mb-4 rounded-full" />

            {/* Heading */}
            <h2 className="font-bold text-3xl sm:text-4xl text-gray-950 tracking-tight mb-5">
              About PCSDF
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              The Peace-Led Climate-Friendly Sustainable Development Forum (PCSDF) is a non-profit organization committed to promoting peace, climate resilience and sustainable development through collaboration, partnership and inclusive action.
            </p>

            {/* Red Pill CTA Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>About Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
