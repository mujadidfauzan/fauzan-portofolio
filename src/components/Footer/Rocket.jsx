import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

const Rocket = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Scroll halus ke atas
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: -45 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 1.5,
          ease: 'easeInOut',
        },
      }}
      onClick={scrollToTop} // Fungsi scroll to top
      className="fixed bottom-8 right-8 p-4 bg-blue1 text-light1 rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-all"
    >
      <FaRocket className="text-2xl" />
    </motion.div>
  );
};

export default Rocket;
