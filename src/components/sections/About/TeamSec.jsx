import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TeamSec = () => {
  return (
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
  );
};

export default TeamSec;
