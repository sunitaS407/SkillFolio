import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const steps = [
  {
    id: 1,
    title: "Select resume template",
    desc: "Sign up to select your favourite resume template.",
    animation: "/ChooseCV.lottie",
  },
  {
    id: 2,
    title: "Add your details",
    desc: "Our templates will automatically present your details in beautiful and ATS friendly formats.",
    animation: "/Form.lottie",
  },
  {
    id: 3,
    title: "Download your resume",
    desc: "Once you are happy with your resume, create a shareable link for free or download it in pdf format.",
    animation: "/register.lottie",
  },
];

export default function Steps() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Build a <span className="text-indigo-400">job-ready resume</span> in
        mintutes, not hours!
      </h2>
      <p className="text-lg text-center mb-20 ">
        Just 3 simple steps — fast, ATS-friendly, and stress-free
      </p>

      <div className="relative max-w-6xl mx-auto">
        {/* Curved SVG Line */}
        <svg
          className="absolute top-0 left-0 w-full h-full hidden md:block"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 200 C 400 50, 800 350, 1100 200"
            stroke="#D1D5DB"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-20 relative">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              {/* Circle number */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-950 text-white font-bold mb-6 z-10 shadow-md">
                {step.id}
              </div>

              {/* Animation */}
              <DotLottieReact
                src={step.animation}
                loop
                autoplay
                className="w-56 h-56 mb-6"
              />

              {/* Text */}
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                STEP-{step.id}{" "}
                <span className="text-purple-600">{step.title}</span>
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
