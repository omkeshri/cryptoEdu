import React from 'react';
import { motion } from 'framer-motion';
import { Input } from './input';

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

export const AnimatedInput = React.forwardRef<HTMLInputElement, AnimatedInputProps>(
  ({ icon, error, ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Input
          ref={ref}
          icon={icon}
          error={error}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          {...props}
        />
      </motion.div>
    );
  }
);

AnimatedInput.displayName = 'AnimatedInput';