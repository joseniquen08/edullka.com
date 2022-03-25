import { motion } from 'framer-motion';

export const BtnLogin = ({ openLogin }) => {
  return (
    <motion.button
      onClick={openLogin}
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-full px-8 py-2 text-base font-semibold text-white rounded-md shadow-lg sm:h-full sm:flex-col bg-pink-pantone-500 md:py-1.5 md:px-6"
    >
      Ingresar
    </motion.button>
  )
}
