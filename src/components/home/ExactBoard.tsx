import React from "react";
import Image from "next/image";

interface BoardMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

const BOARD_MEMBERS: BoardMember[] = [
  {
    id: "ruwan",
    name: "Dr. Ruwan Jayasinghe",
    role: "Chairperson",
    image: "/images/home_exact/board_ruwan.png",
    linkedin: "https://linkedin.com",
  },
  {
    id: "nirmala",
    name: "Ms. Nirmala Perera",
    role: "Vice Chairperson",
    image: "/images/home_exact/board_nirmala.png",
    linkedin: "https://linkedin.com",
  },
  {
    id: "shehan",
    name: "Mr. Shehan Fernando",
    role: "Secretary",
    image: "/images/home_exact/board_shehan.png",
    linkedin: "https://linkedin.com",
  },
  {
    id: "anoja",
    name: "Ms. Anoja Silva",
    role: "Treasurer",
    image: "/images/home_exact/board_anoja.png",
    linkedin: "https://linkedin.com",
  },
  {
    id: "lalith",
    name: "Prof. Lalith De Silva",
    role: "Board Member",
    image: "/images/home_exact/board_lalith.png",
    linkedin: "https://linkedin.com",
  },
  {
    id: "chamali",
    name: "Ms. Chamali Fernando",
    role: "Board Member",
    image: "/images/home_exact/board_chamali.png",
    linkedin: "https://linkedin.com",
  },
];

export default function ExactBoard() {
  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="w-10 h-[3px] bg-[#dc2626] mb-3 rounded-full" />
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-950 tracking-tight mb-3">
            Our Board
          </h2>
          <p className="font-sans text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Our board brings together diverse expertise and a shared commitment to sustainable development and a peaceful future.
          </p>
        </div>

        {/* 6 Board Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {BOARD_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 p-3 sm:p-3.5 flex flex-col items-center text-center group"
            >
              {/* Member Portrait */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Member Name */}
              <h3 className="font-sans font-bold text-gray-900 text-[13px] sm:text-[14px] leading-tight mb-1 text-center">
                {member.name}
              </h3>

              {/* Role */}
              <p className="font-sans text-[11px] sm:text-xs text-gray-500 font-medium mb-3">
                {member.role}
              </p>

              {/* Blue LinkedIn Square Button */}
              <a
                href={member.linkedin || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-[#0077b5] hover:bg-[#005f93] text-white rounded flex items-center justify-center transition-transform hover:scale-110 shadow-xs"
                aria-label={`${member.name} LinkedIn`}
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
