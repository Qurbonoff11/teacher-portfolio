import { motion } from "framer-motion";

const StatsSec = () => {
  return (
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
              className="p-6 rounded-2xl bg-linear-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-slate-800 border border-orange-200 dark:border-orange-800"
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
  );
};

export default StatsSec;
