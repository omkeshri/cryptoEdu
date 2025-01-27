import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FloatingJoinButtonProps {
  onJoinNow: () => void;
}

export const FloatingJoinButton = ({ onJoinNow }: FloatingJoinButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onJoinNow}
      className="fixed top-5 right-5 z-50 flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <span>Join Now</span>
      <ArrowRight className="w-4 h-4" />
    </motion.button>
  );
};