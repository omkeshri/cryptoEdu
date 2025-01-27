import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LogIn } from 'lucide-react';

interface FloatingButtonsProps {
  onJoinNow: () => void;
  onSignIn: () => void;
}

export const FloatingButtons = ({ onJoinNow, onSignIn }: FloatingButtonsProps) => {
  return (
    <div className=" z-50 flex items-center space-x-4"> 
    {/* //fixed top-5 right-5 */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSignIn}
        className="flex items-center space-x-2 bg-[#656565] backdrop-blur-sm text-white px-5 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
      >
        <LogIn className="w-4 h-4" />
        <span>Sign In</span>
      </motion.button>

      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onJoinNow}
        data-join-now
        className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <span>Join Now</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
};