import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SiDiscord, SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { ButtonSN } from './ButtonSN';

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
    <header className="h-full overflow-hidden bg-scroll bg-center bg-repeat bg-cover">
        <div className="h-full mx-auto max-w-7xl">
          <div className="z-20 w-full px-4 pb-7 pt-9 md:py-5 flex xs:justify-end items-center space-x-1.5 xs:space-x-3.5">
            <p className="w-full font-medium text-center break-words xs:w-64 xs:text-right md:text-lg text-stone-800 dark:text-white">¡Únete a nuestra comunidad en discord!</p>
            <div className="px-2">
              <motion.a whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.06 }} target='_blank' rel="noreferrer" href="https://discord.gg/Q2XKVdCse9" className="relative shadow-lg shadow-discord-500/40 flex items-center justify-center px-6 pt-2.5 pb-2 text-lg font-semibold text-white border border-transparent rounded-lg bg-discord-500 hover:bg-discord-500/90 space-x-2">
                <SiDiscord className="w-5 h-5"/>
                <span>Discord</span>
                <b className="absolute px-2.5 pt-[0.05rem] pb-0.5 text-sm bg-green-600 rounded -right-4 -top-3"><span className="text-xs font-semibold animate-pulse">En línea {actives}</span></b>
              </motion.a>
            </div>
          </div>
          <div className="w-full lg:flex">
            <div className="z-10 w-full h-full lg:w-7/12">
              <main className="flex items-center justify-center px-4 lg:justify-start md:px-8">
                <div className="">
                  <h1 className="py-9 text-[2.6rem] md:text-[4rem] px-1 font-extrabold md:font-bold tracking-tight text-center lg:text-left text-gray-900 dark:text-white leading-[1.2] lg:leading-[1.1]">
                    <p className="">Descubre una nueva
                    <span className="text-pink-pantone-500"> metodología </span>
                    de aprendizaje</p>
                  </h1>
                  <div className="py-5 space-y-3">
                    <p className="text-xl font-medium text-center text-gray-500 lg:text-2xl lg:text-left dark:text-white">¡Próximamente el <span className="font-bold text-pink-pantone-500 saturacion-home">Campamento de Desarrollo Web</span>!</p>
                    <p className="text-base text-center text-gray-500 lg:text-left lg:text-lg dark:text-white">Sigue nuestras redes sociales para estar al tanto de nuestras novedades 👀</p>
                    <div className="lg:flex lg:items-center lg:space-x-8">
                      <div className="flex justify-center py-5 pl-1 space-x-4 text-lg lg:justify-start dark:text-white text-slate-900">
                        <ButtonSN href={urlFacebook === 1 ? "https://www.facebook.com/CampamentosEdullka" : urlFacebook === 2 ? "fb://page/105302951500555" : "fb://page/?id=105302951500555"}>
                          <SiFacebook size={32} />
                        </ButtonSN>
                        <ButtonSN href={"https://www.instagram.com/edullka_camp"}>
                          <SiInstagram size={32} />
                        </ButtonSN>
                        <ButtonSN href={"https://www.linkedin.com/company/edullka"}>
                          <SiLinkedin size={32} />
                        </ButtonSN>
                      </div>
                      <div className="sm:flex sm:justify-center lg:justify-start">
                        <div className="px-1 py-4 md:px-0 md:py-0">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/campamentos" className="flex items-center justify-center w-full h-12 px-8 py-2 text-base font-semibold text-white rounded-md shadow-lg sm:h-full sm:flex-col bg-pink-pantone-500 md:py-3 md:text-lg md:px-10 shadow-pink-pantone-500/40">
                              Descubrir campamentos
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
              <img className="object-contain bg-bottom lg:h-auto" src="images/header-edullka.png" alt="" />
            </div>

          </div>
        </div>
    </header>
  );
};
