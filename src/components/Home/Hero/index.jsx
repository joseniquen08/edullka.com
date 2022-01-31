import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SiDiscord, SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Link } from "react-router-dom";

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
    <header className="bg-scroll bg-center bg-repeat bg-cover h-full overflow-hidden">
        <div className="mx-auto h-full max-w-7xl">
          <div className="z-20 w-full px-4 py-7 flex space-x-1.5">
            <p className="w-full font-medium text-center break-words text-stone-800 dark:text-white">¡Únete a nuestra comunidad en discord!</p>
            <div className="px-2">
              <motion.a whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} target='_blank' rel="noreferrer" href="https://discord.gg/Q2XKVdCse9" className="relative shadow-lg shadow-discord-500/40 flex items-center justify-center px-6 pt-2.5 pb-2 text-lg font-semibold text-white border border-transparent rounded-lg bg-discord-500 hover:bg-discord-500/90 space-x-2">
                <SiDiscord className="w-5 h-5"/>
                <span>Discord</span>
                <b className="absolute px-2.5 pt-[0.05rem] pb-0.5 text-sm bg-green-600 rounded -right-4 -top-3"><span className="animate-pulse font-semibold text-xs">En línea {actives}</span></b>
              </motion.a>
            </div>
          </div>
          <div className="z-10 w-full h-full">
            <main className="flex items-center justify-center px-4 mx-auto mt-0 max-w-7xl">
              <div className="">
                <h1 className="py-8 text-[2.4rem] px-1 font-extrabold tracking-tight text-center text-gray-900 dark:text-white leading-[1.2]">
                  <p className="">Descubre una nueva
                  <span className="text-pink-pantone-500"> metodología </span>
                  de aprendizaje</p>
                </h1>
                <div className="py-4 space-y-3">
                  <p className="text-xl text-center font-medium text-gray-500 dark:text-white">¡Próximamente el <span className="font-bold text-pink-pantone-500 saturacion-home">Campamento de Desarrollo Web</span>!</p>
                  <p className="text-center text-gray-500 text-md dark:text-white">Sigue nuestras redes sociales para estar al tanto de nuestras novedades 👀</p>
                  <div className="flex pl-1 justify-center lg:justify-start space-x-4 text-lg dark:text-white text-slate-900 py-7">
                    <a
                      href={urlFacebook === 1 ? "https://www.facebook.com/CampamentosEdullka" : urlFacebook === 2 ? "fb://page/105302951500555" : "fb://page/?id=105302951500555"}
                      target='_blank'
                      rel="noreferrer"
                      className="flex items-center justify-center font-medium bg-slate-900 bg-opacity-5 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-5 dark:hover:bg-opacity-10 h-14 w-14 rounded-xl"
                    >
                      <SiFacebook size={27} />
                    </a>
                    <a href="https://www.instagram.com/edullka_camp" target='_blank' rel="noreferrer"className="flex items-center justify-center font-medium bg-slate-900 bg-opacity-5 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-5 dark:hover:bg-opacity-10 h-14 w-14 rounded-xl">
                      <SiInstagram size={27} />
                    </a>
                    <a href="https://www.linkedin.com/company/edullka" target='_blank' rel="noreferrer"className="flex items-center justify-center font-medium bg-slate-900 bg-opacity-5 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-5 dark:hover:bg-opacity-10 h-14 w-14 rounded-xl">
                      <SiLinkedin size={27} />
                    </a>
                  </div>
                </div>
                <div className="pb-10">
                  <div className="rounded-md shadow" >
                    <a href="https://forms.gle/K7NkZhsdRM42b4Ym8" rel="noreferrer" target="_blank" className="flex items-center justify-center w-full h-12 px-8 py-3 text-base font-medium text-white bg-pink-pantone-500 opacity-50 border border-transparent rounded-md saturacion-home font-roboto sm:h-full hover:bg-yellow-600 md:py-4 md:text-lg md:px-10">
                      Inscríbete
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/campamentos/python-basico" className="flex items-center justify-center w-full h-12 px-8 py-2 text-base font-medium text-gray-600 border border-gray-500 rounded-md font-roboto sm:h-full sm:flex-col dark:text-white dark:border-white hover:bg-gray-500 hover:text-white md:py-2 md:text-lg md:px-10">
                      Más información
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div className="hidden lg:justify-end lg:flex lg:items-end lg:w-7/12 2xl:w-4/6">
            <img className="object-contain bg-bottom lg:h-auto" src="images/header-edullka.png" alt="" />
          </div>
        </div>
    </header>
  );
};
