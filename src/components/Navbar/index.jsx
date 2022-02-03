import { AnimatePresence, motion, useCycle } from 'framer-motion';
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
    <nav className={`sticky top-0 z-40 w-full font-primary bg-white ${ isOpen ? 'border-transparent' : 'border-b'} dark:bg-stone-900`}>
      <div className="relative">
        <div className="px-3 z-[100] mx-auto max-w-7xl dark:bg-stone-900">
          <div className="relative flex items-center justify-start h-16 sm:h-[4.5rem]">
            <div className="absolute inset-y-0 left-0 z-20 flex items-center sm:hidden">
              <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
              >
                <MenuToggle toggle={() => toggleOpen()}/>
              </motion.nav>
            </div>
            <Link to="/" className="flex items-center justify-center flex-1 cursor-pointer sm:justify-start sm:flex-none">
              <div className="z-20 flex items-center flex-shrink-0 sm:space-x-3">
                <img className="block w-auto h-7 sm:h-9" src="images/brand/logo.png" alt="logo edullka" />
                <p className="hidden md:block text-[1.7rem] text-stone-800 dark:text-white font-logo dark:font-light">Edullka</p>
              </div>
            </Link>
            <div className="absolute inset-y-0 right-0 z-20 flex items-center">
              <ThemeToggle themeSelected={themeSelected} setThemeSelected={setThemeSelected} changeTheme={changeTheme}/>
            </div>
            <div className="z-10 hidden sm:flex sm:items-center sm:justify-center sm:pl-6 md:pl-10">
                <div className="flex items-center justify-center text-lg sm:space-x-2 md:space-x-4">
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link to="/" className="px-3 pt-2 pb-2.5 text-stone-700 rounded-md dark:text-stone-200 dark:hover:bg-stone-800 hover:bg-gray-200/40">Inicio</Link>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link to="campamentos" className="px-3 pt-2 pb-2.5 text-stone-700 rounded-md dark:text-stone-200 dark:hover:bg-stone-800 hover:bg-gray-200/40">Campamentos</Link>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link to="/team" className="px-3 pt-2 pb-2.5 text-stone-700 rounded-md dark:text-stone-200 dark:hover:bg-stone-800 hover:bg-gray-200/40">Nosotros</Link>
                  </motion.div>
                </div>
              </div>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            initial={false}
            transition={{ type: "spring" }}
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { opacity: 0, display: 'none' },
              open: { opacity: 1, display: 'block' },
            }}
            exit={{ opacity: 0, display: 'none' }}
            className="absolute bg-white z-[2] dark:bg-stone-900 w-full sm:hidden border-b shadow"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link onClick={() => toggleOpen()}to="/" className="block px-3 py-2 text-base font-medium text-white rounded-md bg-pink-pantone-500">Inicio</Link>
              <Link onClick={() => toggleOpen()} to="/campamentos" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-700 dark:text-gray-300 hover:text-white">Campamentos</Link>
              <Link onClick={() => toggleOpen()} to="/team" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-700 dark:text-gray-300 hover:text-white">Nosotros</Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  );
};
