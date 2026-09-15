import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutExactWhoWeAre() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Copy, CTA */}
          <div className="lg:col-span-6">
            {/* Small red accent bar */}
            <div className="w-10 h-[3px] bg-[#dc2626] mb-4 rounded-full" />

            {/* Heading */}
            <h2 className="font-bold text-3xl sm:text-4xl text-gray-950 tracking-tight mb-5">
              Who We Are
            </h2>

            {/* Paragraph 1 */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
              The Peace-Led Climate-Friendly Sustainable Development Forum (PCSDF) is a non-profit organization committed to promoting peace, climate resilience and sustainable development through collaboration, partnership and inclusive action.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              We bring together diverse expertise and experience to support communities, build resilience and create a more sustainable and peaceful future for all.
            </p>

            {/* Red Pill CTA Button */}
            <Link
              href="#commitment"
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Our Mission</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Column: Round-Table Conference Photo */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-gray-100">
              <Image
                src="/images/about_exact/who_we_are_conference.png"
                alt="PCSDF Round-table Conference and Mission Planning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
