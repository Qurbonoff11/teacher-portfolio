import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-slate-100 mb-6"
          >
            Biz Haqimizda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            CHC Navigation — dunyodagi yetakchi pozitsionlash, navigatsiya va
            xaritalash texnologiyalari ishlab chiqaruvchisi. Aniqlik,
            ishonchlilik va innovatsiya — bizning asosiy qadriyatlarimiz.
          </motion.p>
        </div>

        {/* Dekorativ element */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "15+", label: "Yillik tajriba" },
              { num: "120+", label: "Mamlakatda" },
              { num: "50,000+", label: "Mijozlar" },
              { num: "24/7", label: "Qo‘llab-quvvatlash" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-slate-800 border border-orange-200 dark:border-orange-800"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-orange-500">
                  {stat.num}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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

      {/* Team / Certificate / History (ixtiyoriy) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            Ishonch bilan Tanlang
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            ISO 9001, CE, FCC va boshqa xalqaro sertifikatlarga egamiz. 2000+
            xodim, 10+ tadqiqot markazi va 120+ mamlakatda vakolatxonalar.
          </p>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Biz bilan bog‘laning
              <svg
                className="w-6 h-6"
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
        </div>
      </section>
    </main>
  );
};

export default About;
