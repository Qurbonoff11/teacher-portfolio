import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import FormComp from "../components/sections/Contact/FormComp";

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

        <FormComp
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </div>
    </main>
  );
};

export default Contact;
