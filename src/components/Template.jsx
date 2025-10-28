import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const templates = [
  { id: 1, img: "/template1.webp" },
  { id: 2, img: "/template2.webp" },
  { id: 3, img: "/template3.webp" },
  { id: 4, img: "/template4.avif" },
  { id: 5, img: "/template5.avif" },
  { id: 6, img: "/template6.webp" },
  { id: 7, img: "/template7.avif" },
];

export default function TemplateShowcase() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -width : width,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-tr from-[#0f2a47] via-[#16385e] to-[#1e4975] text-white pt-20 md:pt-28 pb-20 overflow-hidden">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Smart templates that recruiters love
        </h2>
        <p className="text-lg text-gray-300">
          Whether you are a current college student, a fresher, or a seasoned
          professional, we have visually appealing templates that highlight your
          skills and make you stand out.
        </p>
      </div>

      {/* Showcase container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-10 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full z-10 transition"
        >
          <ChevronLeft size={28} className="text-white" />
        </button>

        {/* Horizontal scroll row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar px-10"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {templates.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-[260px] rounded-xl overflow-hidden shadow-lg bg-white scroll-snap-align-center transform transition duration-300 hover:scale-95 cursor-pointer"
              style={{ scrollSnapAlign: "center" }}
            >
              <img
                src={t.img}
                alt={`Template ${t.id}`}
                className="w-full h-[340px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-20 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/40 hover:bg-black/60 transition"
        >
          <ChevronRight size={28} className="text-white" />
        </button>
      </div>

      {/* View All */}
      <div className="text-center mt-12">
        <button className="bg-purple-950 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-110 hover:bg-gray-500">
          View all
        </button>
      </div>
    </section>
  );
}
