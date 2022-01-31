import { motion, useCycle } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuToggle } from './MenuToggle';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [themeSelected, setThemeSelected] = useState("sys");

  useEffect(() => {
    if (!('theme' in localStorage)) {
      setThemeSelected("sys");
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementsByTagName("HTML")[0].setAttribute("class", "dark");
      }
    } else {
      document.getElementsByTagName("HTML")[0].setAttribute("class", localStorage.getItem("theme"));
      if (localStorage.getItem('theme') === "dark") {
        setThemeSelected("dark");
      } else if (localStorage.getItem('theme') === "light") {
        setThemeSelected("light");
      }
    }
  }, [themeSelected]);

  const changeTheme = (theme) => {
    if (theme === "sys") {
      localStorage.removeItem("theme");
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementsByTagName("HTML")[0].setAttribute("class", "dark");
      } else {
        document.getElementsByTagName("HTML")[0].setAttribute("class", theme);
      }
    } else {
      localStorage.setItem("theme", theme);
      document.getElementsByTagName("HTML")[0].setAttribute("class", theme);
    }
    setThemeSelected(theme);
  }

  return (
    <nav className="sticky top-0 z-40 w-full font-primary bg-white border-b dark:bg-stone-900">
      <div className="px-3 mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between h-16 sm:h-[4.5rem]">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <MenuToggle toggle={() => toggleOpen()}/>
            </motion.nav>
          </div>
          <div className="flex items-center justify-center sm:justify-start flex-1">
            <div className="flex items-center flex-shrink-0 sm:space-x-3">
              <img className="block w-auto h-7 sm:h-9" src="images/brand/logo.png" alt="logo edullka" />
              <p className="hidden sm:block text-[1.7rem] text-white font-logo font-light">Edullka</p>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <ThemeToggle themeSelected={themeSelected} setThemeSelected={setThemeSelected} changeTheme={changeTheme}/>
          </div>
        </div>
      </div>
      {
        isOpen ? (
          <div className="absolute bg-white dark:bg-stone-900 w-full sm:hidden border-b shadow">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium rounded-md text-white bg-pink-pantone-500">Inicio</Link>
              <a href="#campamentos" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-700 dark:text-gray-300 hover:text-white">Campamentos</a>
              <Link to="/team" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-700 dark:text-gray-300 hover:text-white">Nosotros</Link>
            </div>
          </div>
        ) : (<></>)
      }
    </nav>
  );
};
