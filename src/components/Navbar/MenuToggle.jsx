import { motion } from 'framer-motion';
import React from 'react';

const Path = (props) => (
  <motion.path
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => {
  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.85 }}
      className="inline-flex items-center justify-center rounded-xl hover:bg-gray-200/60 dark:hover:bg-stone-800 focus:outline-none px-2.5 pt-2.5 pb-2"
    >
      <svg width="20" height="20" viewBox="0 0 22 23" stroke="currentColor" aria-hidden="true" fill="none" className="text-black-pantone-500 dark:text-white">
        <Path
          variants={{
            closed: { d: "M 2 3 L 20 3" },
            open: { d: "M 4 17 L 18 3" }
          }}
        />
        <Path
          d="M 2 10 L 20 10"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 17 L 20 17" },
            open: { d: "M 4 3 L 18 17" }
          }}
        />
      </svg>
    </motion.button>
  );
};
