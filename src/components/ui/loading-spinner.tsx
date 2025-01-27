import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        className={`border-2 border-t-transparent rounded-full ${sizes[size]}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          borderTopColor: 'transparent',
          borderRightColor: 'currentColor',
          borderBottomColor: 'currentColor',
          borderLeftColor: 'currentColor',
        }}
      />
    </div>
  );
};