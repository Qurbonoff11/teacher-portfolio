import { worksData } from "../data.jsx";
import { motion } from "framer-motion";

const WorksSec = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="uppercase text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {work.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">{work.desc}</p>

                <a
                  href={work.link}
                  className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:cursor-pointer hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Go to {work.title}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSec;
