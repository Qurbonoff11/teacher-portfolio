import { FaFacebookF, FaInstagram, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start text-center md:text-left">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Stay Updated
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Yangi mahsulotlar, texnologiyalar va takliflardan birinchilardan
              bo‘lib xabardor bo‘ling.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-xl border border-gray-300 dark:border-slate-700
                        bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200
                        focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
                        transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold
                        rounded-xl shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5
                        transition-all duration-300 whitespace-nowrap"
              >
                Sign me up!
              </button>
            </form>

            <div className="flex justify-center md:justify-start gap-6 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-800 flex items-center justify-center
                        text-xl text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white
                        transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-800 flex items-center justify-center
                        text-xl text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white
                        transition-all duration-300 transform hover:scale-110"
              >
                <FaTelegram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-800 flex items-center justify-center
                        text-xl text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white
                        transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-orange-500 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-orange-500 transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © 2025 Shanghai Huace Navigation Technology Ltd.
              <br />
              All rights reserved.
            </p>
            <p className="mt-4 text-xs text-gray-400">
              Powered by precision, built for the future.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-800 text-center text-sm text-gray-500">
          Made with <span className="text-orange-500">♥</span> for geospatial
          excellence
        </div>
      </div>
    </footer>
  );
};

export default Footer;
