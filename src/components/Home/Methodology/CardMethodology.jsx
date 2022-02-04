import { motion } from "framer-motion";

export const CardMethodology = ({ title, description, children }) => {
  return (
    <motion.div whileHover={{ scale: 1.03, transition: { duration: 0.2 } }} className="flex flex-col items-center justify-center px-4 py-8 space-y-5 shadow-lg cursor-default bg-stone-100 bg-opacity-70 shadow-stone-200/40 dark:bg-white dark:bg-opacity-5 dark:shadow dark:shadow-white/5 md:py-10 md:px-8 rounded-xl md:items-start">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-16 h-16 text-4xl text-white rounded-lg bg-pink-pantone-500">
          { children }
        </div>
      </div>
      <div className="space-y-3 text-center md:text-left">
        <dt className="text-[1.35rem] font-semibold leading-6 text-stone-800 dark:text-white">
          { title }
        </dt>
        <dd className="text-base md:text-lg dark:text-stone-400 text-gray-500 leading-[1.4rem]">
          { description }
        </dd>
      </div>
    </motion.div>
  );
};
