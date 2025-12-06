import { solutionData } from "../data";
import { motion } from "framer-motion";

const SolutionSec = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-600">
              Solutions
            </span>
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Kuchli va innovatsion yechimlar bilan biznesingizni yangi bosqichga
            olib chiqing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          >
            {solutionData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-3"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6 group-hover:bg-orange-500 transition-all duration-300">
                  <img
                    src={item.icon}
                    alt={item.stats}
                    className="w-9 h-9 object-contain brightness-0 invert-0 group-hover:invert group-hover:brightness-0 transition-all duration-300"
                  />
                </div>

                <h4 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-3">
                  {item.stats}
                </h4>

                <p className="text-gray-700 leading-relaxed">{item.desc}</p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
              </motion.div>
            ))}
          </motion.div>

          {/* O‘ngdagi katta karta */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="bg-linear-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl lg:mt-8 overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white_10%,transparent_60%)]" />
            </div>

            <div className="relative z-10">
              <h5 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Innovating Global Navigation & Mapping Solutions
              </h5>

              <p className="text-orange-100 mb-8 leading-relaxed text-base md:text-lg">
                CHC Navigation is advancing mapping, navigation, and positioning
                technologies. We are boosting efficiency and affordability in
                geospatial, digital construction, precision agriculture, and
                navigation industries. Our commitment to innovation makes CHCNAV
                your trustworthy partner, offering personalized support and
                solutions worldwide.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-orange-50 hover:shadow-xl transition-all duration-300 group"
              >
                Learn More
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSec;
