import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <motion.div 
      className={`flex items-center space-x-2 ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <TrendingUp className="w-8 h-8 text-primary-500" />
        <motion.div
          className="absolute inset-0 bg-primary-500 rounded-full opacity-25"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.15, 0.25],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <span className="text-2xl font-bold">
        Trade<span className="text-primary-500">Pro</span>
      </span>
    </motion.div>
  );
};