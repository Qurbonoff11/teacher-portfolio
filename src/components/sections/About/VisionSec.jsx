import { motion } from "framer-motion";

const VisionSec = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-10 border border-slate-200 dark:border-slate-700"
          >
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5 4a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Bizning Missiyamiz
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Har bir sohada aniq, ishonchli va innovatsion texnologiyalar
              orqali dunyoni yanada yaxshiroq joyga aylantirish.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-10 border border-slate-200 dark:border-slate-700"
          >
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-orange-500"
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
            </div>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Bizning Vizyonimiz
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Kelajakda har bir qurilma, har bir tizim va har bir inson aniq
              pozitsionlash texnologiyasidan foydalana oladigan dunyo qurish.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSec;
