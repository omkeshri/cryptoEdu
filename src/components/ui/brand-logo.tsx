import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export const BrandLogo = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex items-center justify-center"
    >
      <div className="relative">
        <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
          <TrendingUp className="w-10 h-10 text-primary-400" />
        </div>
        <motion.div
          className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};