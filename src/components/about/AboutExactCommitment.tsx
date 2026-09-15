import { Bird, Leaf, Users, Handshake } from "lucide-react";

interface CommitmentValue {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const COMMITMENT_VALUES: CommitmentValue[] = [
  {
    title: "Peace",
    description: "Building peaceful and inclusive societies",
    icon: <Bird className="w-6 h-6 text-[#dc2626]" strokeWidth={1.8} />,
  },
  {
    title: "Climate Action",
    description: "Supporting a healthier and resilient planet",
    icon: <Leaf className="w-6 h-6 text-[#dc2626]" strokeWidth={1.8} />,
  },
  {
    title: "Sustainable Development",
    description: "Creating long-term opportunities for all",
    icon: <Users className="w-6 h-6 text-[#dc2626]" strokeWidth={1.8} />,
  },
  {
    title: "Partnership",
    description: "Working together for greater impact",
    icon: <Handshake className="w-6 h-6 text-[#dc2626]" strokeWidth={1.8} />,
  },
];

export default function AboutExactCommitment() {
  return (
    <section id="commitment" className="w-full py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-4">
            {/* Small red accent bar */}
            <div className="w-10 h-[3px] bg-[#dc2626] mb-4 rounded-full" />

            <h2 className="font-bold text-3xl sm:text-4xl text-gray-950 tracking-tight mb-4">
              Our Commitment
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
              We are guided by our core values of peace, sustainability, inclusivity and collaboration in everything we do.
            </p>
          </div>

          {/* Right Column: 4 Values with Icons and Vertical Dividers */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-gray-100">
              {COMMITMENT_VALUES.map((val) => (
                <div
                  key={val.title}
                  className="px-4 py-6 sm:py-2 flex flex-col items-center text-center group"
                >
                  {/* Circular Badge with Red Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#fef2f2] text-[#dc2626] flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 group-hover:bg-[#fee2e2] transition-transform duration-200">
                    {val.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-gray-950 text-sm sm:text-[15px] mb-1.5 leading-tight">
                    {val.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs sm:text-[13px] leading-snug max-w-[160px]">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
