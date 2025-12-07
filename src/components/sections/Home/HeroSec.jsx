import { motion } from "framer-motion";

const HeroSec = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-cover bg-center border-b-4 border-orange-500">
      <div className="absolute inset-0 bg-[url('/src/assets/img/bg-img.jpg')] bg-no-repeat bg-center bg-cover" />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/40" />

      <div className="relative container mx-auto px-4">
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-2xl leading-tight tracking-tight"
          >
            <span className="text-orange-500">Smarter</span> Precision in{" "}
            <span className="text-orange-500">Every World</span>
          </motion.h1>

          {/* Paragraf — animatsiya */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="max-w-3xl text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed drop-shadow-lg"
          >
            Empower your daily operations with our advanced mapping,
            positioning, and navigation solutions — designed for accuracy, built
            for the future.
          </motion.p>

          {/* Tugmalar — animatsiya */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#services"
              className="px-10 py-4 bg-orange-500 text-white font-semibold text-lg rounded-full hover:bg-orange-600 transition-all duration-300 shadow-xl hover:shadow-orange-500/50 transform hover:-translate-y-1"
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border-2 border-orange-500 text-orange-500 font-semibold text-lg rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Pastga strelka — animatsiya */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg
          className="w-8 h-8 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSec;
