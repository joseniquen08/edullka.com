import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Hero = ({ actives }) => {

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const [urlFacebook, setUrlFacebook] = useState(1);

  useEffect(() => {
    if(/android/i.test(userAgent)) {
      setUrlFacebook(2);
    } else if(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setUrlFacebook(3);
    } else {
      setUrlFacebook(1);
    }
  }, [userAgent]);

  return (
    <header className="h-full overflow-hidden bg-[#fafafa] bg-scroll bg-center bg-repeat bg-cover">
        <div className="h-full mx-auto max-w-7xl md:px-10 py-16">
          {/* <div className="z-20 w-full px-4 pb-7 pt-9 md:py-5 flex xs:justify-end items-center space-x-1.5 xs:space-x-3.5">
            <p className="w-full font-medium text-center break-words xs:w-64 xs:text-right md:text-lg text-stone-800">¡Únete a nuestra comunidad en discord!</p>
            <div className="px-2">
              <motion.a whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.06 }} target='_blank' rel="noreferrer" href="https://discord.gg/Q2XKVdCse9" className="relative shadow-lg shadow-discord-500/40 flex items-center justify-center px-6 pt-2.5 pb-2 text-lg font-semibold text-white border border-transparent rounded-lg bg-discord-500 hover:bg-discord-500/90 space-x-2">
                <SiDiscord className="w-5 h-5"/>
                <span>Discord</span>
                <b className="absolute px-2.5 pt-[0.05rem] pb-0.5 text-sm bg-green-600 rounded -right-4 -top-3"><span className="text-xs font-semibold animate-pulse">En línea {actives}</span></b>
              </motion.a>
            </div>
          </div> */}
          <div className="w-full lg:flex space-x-10">
            <div className="z-10 w-full h-full lg:w-7/12">
              <main className="flex items-center justify-center px-4 lg:justify-start md:px-8">
                <div className="">
                  <h1 className="py-12 text-[2rem] md:text-[2.4rem] px-1 font-extrabold md:font-bold tracking-tight text-center text-gray-900 leading-[1.2] lg:leading-[1.1] space-y-3">
                    <p className="lg:text-left">Experiencia <span className="px-1.5 bg-pink-pantone-500 text-white rounded-xl">personalizada</span></p>
                    <p className="lg:text-right"><span className="px-1.5 bg-pink-pantone-500 text-white rounded-xl">líderes</span> innovadores</p>
                  </h1>
                  <div className="space-y-3">
                    <p className="text-base text-center text-gray-500 lg:text-left lg:text-lg">bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla</p>
                    <div className="lg:flex lg:items-center py-6">
                      <div className="sm:flex sm:justify-center lg:justify-start">
                        <div className="px-1 py-4 md:px-0 md:py-0">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/campamentos" className="flex items-center justify-center w-full h-12 px-3 py-2 text-base font-semibold text-white rounded-md shadow-lg sm:h-full sm:flex-col bg-pink-pantone-500 md:py-3 md:text-lg md:px-6">
                              Más aquí...
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <div className="hidden pl-4 pr-16 lg:justify-end lg:flex lg:items-center lg:w-5/12">
              <img className="object-contain bg-bottom lg:h-auto" src="images/header-edullka-provisional.png" alt="" />
            </div>

          </div>
        </div>
    </header>
  );
};
