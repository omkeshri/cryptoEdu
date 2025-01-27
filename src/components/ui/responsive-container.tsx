import React from 'react';
import { motion } from 'framer-motion';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ResponsiveContainer = ({ children, className = '' }: ResponsiveContainerProps) => {
  return (
    <motion.div 
      className={`w-full max-w-md mx-auto px-4 sm:px-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};