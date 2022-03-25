import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BtnLogin } from './BtnLogin';
import { MenuToggle } from './MenuToggle';
import { ModalLogin } from './ModalLogin';

export const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalIsOpen(true);
  }

  const closeLoginModal = () => {
    setLoginModalIsOpen(false);
  }

  return (
    <>
      <nav className={`sticky top-0 z-40 w-full font-primary bg-white border-b ${ isOpen ? ' border-transparent' : ''}`}>
        <div className="relative">
          <div className="px-8 z-[100] mx-auto max-w-7xl">
            <div className="relative flex items-center justify-between h-16 sm:h-[4.2rem]">
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
                  <img className="block w-auto h-7 sm:h-8" src="images/brand/logo.png" alt="logo edullka" />
                  <p className="hidden md:block text-[1.5rem] text-stone-800 font-logo font-medium">Edullka</p>
                </div>
              </Link>
              <div className="z-10 hidden sm:flex sm:items-center sm:justify-center md:space-x-5">
                  <div className="flex items-center justify-center text-base sm:space-x-2 text-purple-pantone-500 font-medium">
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Link to="/" className="px-3 pt-2 pb-2.5 rounded-md hover:bg-gray-200/40">Membresías</Link>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Link to="campamentos" className="px-3 pt-2 pb-2.5 rounded-md hover:bg-gray-200/40">Campamentos</Link>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Link to="/team" className="px-3 pt-2 pb-2.5 rounded-md hover:bg-gray-200/40">Contáctanos</Link>
                    </motion.div>
                  </div>
                  <BtnLogin openLogin={openLoginModal}/>
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
              className="absolute bg-white z-[2] w-full sm:hidden border-b shadow"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link onClick={() => toggleOpen()} to="/" className="block px-3 py-2 text-base font-medium text-white rounded-md bg-pink-pantone-500">Inicio</Link>
                <Link onClick={() => toggleOpen()} to="/campamentos" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-700 hover:text-white">Campamentos</Link>
                <Link onClick={() => toggleOpen()} to="/team" className="block px-3 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-700 hover:text-white">Nosotros</Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </nav>
      <ModalLogin isOpen={loginModalIsOpen} closeModal={closeLoginModal}/>
    </>
  );
};
