import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactSec = () => {
  return (
    <section className="w-full py-20 ">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200"
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-10 md:p-12 text-center md:text-left">
              <div className="w-16 h-16 mx-auto md:mx-0 mb-6 rounded-2xl bg-orange-100 flex items-center justify-center">
                <svg
                  className="w-9 h-9 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Let's talk
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Get in touch for pricing and solutions in geospatial,
                construction, marine, agriculture, and autonomous systems.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 text-white font-semibold text-lg rounded-full
                        hover:bg-orange-600 hover:shadow-orange-500/30 shadow-lg transform hover:-translate-y-1
                        transition-all duration-300"
              >
                Contact Us
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200"
          >
            <div className="absolute inset-0 bg-linear-to-bl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-10 md:p-12 text-center md:text-left">
              <div className="w-16 h-16 mx-auto md:mx-0 mb-6 rounded-2xl bg-orange-100 flex items-center justify-center">
                <svg
                  className="w-9 h-9 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Let's partner up
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Unlock global opportunities by partnering with CHC Navigation —
                a leader in positioning, navigation and mapping solutions.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold text-lg rounded-full
                        hover:bg-orange-500 hover:text-white hover:shadow-orange-500/30 shadow-lg transform hover:-translate-y-1
                        transition-all duration-300 backdrop-blur-sm bg-white/50 "
              >
                Learn More
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
