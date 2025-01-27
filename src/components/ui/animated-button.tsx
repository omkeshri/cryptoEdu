import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

export const AnimatedButton = ({ loading, children, ...props }: AnimatedButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white py-3 rounded-lg font-semibold transition-all duration-200"
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};