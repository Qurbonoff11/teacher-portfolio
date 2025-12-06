import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { coruselData } from "../data";
import { motion } from "framer-motion";

const slideVariants = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -80 },
};

const News = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-slate-800">
            Latest <span className="text-orange-500">News</span>
          </h3>
          <p className="mt-4 text-lg text-slate-600">
            Yangiliklardan xabardor bo‘ling
          </p>
        </motion.div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="news-swiper"
        >
          {coruselData.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={slideVariants}
                initial="initial"
                whileInView="animate"
                exit="exit"
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.desc}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-xs font-medium text-orange-400 tracking-wider">
                    {item.date}
                  </span>
                  <h4 className="mt-2 text-xl font-bold line-clamp-2">
                    {item.desc}
                  </h4>
                  <a
                    href={item.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors"
                  >
                    Read more
                    <svg
                      className="ml-2 w-5 h-5"
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
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .news-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
        }
        .news-swiper .swiper-pagination-bullet-active {
          background: #f97316;
        }
        .news-swiper .swiper-button-next,
        .news-swiper .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default News;
