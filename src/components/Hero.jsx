import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0f2a47] via-[#16385e] to-[#1e4975] text-white pt-36 md:pt-52 pb-10 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute top-1/3 left-0 right-0 h-40 bg-gradient-to-r from-indigo-500/40 via-blue-400/20 to-transparent blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-16 lg:gap-24">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight">
            Create{" "}
            <span className="text-indigo-400">
              Professional, ATS-Friendly Resumes
            </span>
            <br className="hidden sm:block" />
            with AI That Recruiters Can’t Ignore
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
            Create unlimited, Designed to pass ATS and impress recruiters.
          </p>

          <div>
            <button
              className="relative z-10 mt-4 px-6 py-3 bg-gray-800 text-sm text-white font-medium
               rounded-full shadow cursor-pointer
               transform transition duration-300 ease-out
               hover:scale-110 hover:bg-gray-600"
            >
              Build My Resume
            </button>
          </div>
        </motion.div>

        {/* Right Animation */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex-1 flex justify-center md:justify-end">
            <DotLottieReact
              src="/Designer.lottie"
              loop
              autoplay
              className="w-2xl sm:w-xl "
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#16385e"
            fillOpacity="1"
            d="M0,256L60,250.7C120,245,240,235,360,224C480,213,600,203,720,213.3C840,224,960,256,1080,250.7C1200,245,1320,203,1380,181.3L1440,160V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
