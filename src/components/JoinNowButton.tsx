import React from 'react';
import { motion } from 'framer-motion';

export const JoinNowButton = () => {
  const handleClick = () => {
    // Open registration page in new tab
    window.open('/register', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="bg-primary-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-primary-700 transition-colors shadow-lg"
      >
        Join Now
      </motion.button>
    </div>
  );
};