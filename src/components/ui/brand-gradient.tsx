import React from 'react';
import { motion } from 'framer-motion';

interface BrandGradientProps {
  children: React.ReactNode;
  className?: string;
}

export const BrandGradient = ({ children, className }: BrandGradientProps) => {
  return (
    <motion.div 
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 animate-gradient" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};