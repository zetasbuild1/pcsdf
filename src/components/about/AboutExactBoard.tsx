import React from "react";
import Image from "next/image";

interface BoardMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const BOARD_MEMBERS: BoardMember[] = [
  {
    name: "Dr. Ruwan Jayasinghe",
    role: "Chairperson",
    image: "/images/home_exact/board_ruwan.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ms. Nirmala Perera",
    role: "Vice Chairperson",
    image: "/images/home_exact/board_nirmala.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Mr. Shehan Fernando",
    role: "Secretary",
    image: "/images/home_exact/board_shehan.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ms. Anoja Silva",
    role: "Treasurer",
    image: "/images/home_exact/board_anoja.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Prof. Lalith De Silva",
    role: "Board Member",
    image: "/images/home_exact/board_lalith.png",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ms. Chamali Fernando",
    role: "Board Member",
    image: "/images/home_exact/board_chamali.png",
    linkedin: "https://linkedin.com",
  },
];

export default function AboutExactBoard() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          {/* Small red accent bar */}
          <div className="w-10 h-[3px] bg-[#dc2626] mb-4 rounded-full" />
          <h2 className="font-bold text-3xl sm:text-4xl text-gray-950 tracking-tight mb-3">
            Our Board
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
            Our board brings together diverse expertise and a shared commitment to sustainable development and a peaceful future.
          </p>
        </div>

        {/* 4-Column Grid: 4 items on top row, 2 items on bottom row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOARD_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-gray-100/90 p-4 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group"
            >
              {/* Member Portrait */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 mb-4 border border-gray-50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="font-bold text-[15px] text-gray-950 tracking-tight mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-gray-500 text-xs font-normal mb-3">
                {member.role}
              </p>

              {/* LinkedIn Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-6 h-6 rounded bg-[#0077b5] text-white hover:bg-[#005f93] transition-colors mt-auto shadow-xs"
                aria-label={`${member.name} LinkedIn Profile`}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
