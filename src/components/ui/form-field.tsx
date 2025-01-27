import React from 'react';
import { motion } from 'framer-motion';

interface FormFieldProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
}

export const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-white/80">
          {label}
        </label>
      )}
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};