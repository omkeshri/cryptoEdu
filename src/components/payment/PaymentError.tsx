import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface PaymentErrorProps {
  message: string;
  onRetry: () => void;
}

export const PaymentError = ({ message, onRetry }: PaymentErrorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <AlertCircle className="w-10 h-10 text-red-500" />
      </motion.div>

      <h2 className="text-2xl font-bold text-white mb-4">
        Payment Failed
      </h2>
      <p className="text-white/80 mb-8">
        {message}
      </p>

      <button
        onClick={onRetry}
        className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
      >
        Try Again
      </button>
    </motion.div>
  );
};