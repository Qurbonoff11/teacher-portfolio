import { NavLink } from "react-router-dom";
import { navLinks } from "../../data";

const Header = () => {
  return (
    <header className="w-full bg-slate-200 dark:bg-slate-950">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <ul className="mx-auto flex flex-1 justify-center gap-6">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <NavLink
                  className="text-slate-950 font-semibold duration-300 hover:text-orange-500 dark:text-slate-50"
                  to={link.link}
                >
                  {link.content}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
