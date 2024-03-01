'use client'

import { motion } from 'framer-motion';

const AnimatedBorder = () => {
  return (
    <motion.div
      className='border-b-2 border-white mb-4'
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ transformOrigin: "left" }}
    />
  );
};

export default AnimatedBorder;