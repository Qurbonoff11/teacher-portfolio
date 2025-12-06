import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form yuborildi:", data);
    alert("Rahmat! Tez orada siz bilan bog‘lanamiz");
  };

  return (
    <main className="w-full min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100 py-24">
      <div className="container mx-auto px-6 max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center py-16"
        >
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6">
            Biz bilan <span className="text-orange-500">Bog‘laning</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Savollaringiz bormi? Taklif yoki hamkorlik haqida
            gaplashmoqchimisiz? Biz doim aloqadamiz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Forma */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 lg:p-12 border border-slate-200 dark:border-slate-800">
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">
                Xabar yuboring
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Ism
                    </label>
                    <input
                      {...register("firstName", {
                        required: "Ism kiritish shart",
                      })}
                      className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                      placeholder="Ali"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Familiya
                    </label>
                    <input
                      {...register("lastName", {
                        required: "Familiya kiritish shart",
                      })}
                      className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                      placeholder="Valiyev"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email kiritish shart",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Noto‘g‘ri email",
                      },
                    })}
                    type="email"
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                    placeholder="ali@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Xabar
                  </label>
                  <textarea
                    {...register("message", { required: "Xabar yozing" })}
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-4 focus:ring-orange-500/30 focus:border-orange-500 transition-all resize-none"
                    placeholder="Bizga nima haqida yozmoqchisiz?"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
                >
                  Xabar yuborish
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-linear-to-br from-orange-500 to-orange-600 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Biz bilan aloqa</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Telefon</p>
                    <p className="text-orange-100 text-2xl mt-1">
                      +998 71 200 88 99
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-orange-100 text-xl mt-1">
                      info@chcnav.uz
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Manzil</p>
                    <p className="text-orange-100">
                      Toshkent sh., Chilanzar tumani
                      <br />
                      Qatortol ko‘chasi, 32-uy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
