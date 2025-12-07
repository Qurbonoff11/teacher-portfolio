import { motion } from "framer-motion";

const HeroSec = () => {
  return (
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
          xaritalash texnologiyalari ishlab chiqaruvchisi. Aniqlik, ishonchlilik
          va innovatsiya — bizning asosiy qadriyatlarimiz.
        </motion.p>
      </div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HeroSec;
