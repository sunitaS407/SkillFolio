import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-50 via-white to-sky-50 py-12 text-center px-4 md:px-16 overflow-hidden">
      {/* Background Lottie Animation */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <DotLottieReact
          src="/graphic.lottie" // public folder path
          loop
          autoplay
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-800">
          Ready to Build Your Best{" "}
          <span className="underline text-3xl sm:text-4xl md:text-5xl text-indigo-500">
            Resume
          </span>
          ?
        </h2>
        <p className="text-xs sm:text-sm md:text-base mb-8 text-gray-600 flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2">
          Join over{" "}
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
            <span className="font-semibold">2114,2003</span>
          </span>{" "}
          professionals and craft your resume for free
        </p>
        <button className="bg-gray-950 text-white font-bold px-6 py-3 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-700">
          Build my Resume
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
