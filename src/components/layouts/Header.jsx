import { NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../data";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  const isSolid = scrolled || !isHomePage;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isSolid
          ? "bg-white/75 backdrop-blur-2xl shadow-lg"
          : "bg-white/10 backdrop-blur-2xl"
      }`}
    >
      <nav className="container mx-auto px-6 py-5">
        <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-12 text-sm sm:text-base font-medium">
          {navLinks.map(({ id, link, content }) => (
            <li key={id} className="group">
              <NavLink
                to={link}
                className={`relative px-3 py-2 font-medium transition-colors duration-300
                  ${
                    isSolid
                      ? "text-slate-800 dark:text-slate-200 hover:text-orange-500"
                      : "text-white hover:text-orange-400"
                  }
                  aria-[current=page]:text-orange-500
                `}
              >
                {content}

                {isSolid && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full
                               origin-left scale-x-0 transition-transform duration-400
                               group-hover:scale-x-100 aria-[current=page]:scale-x-100"
                  />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
