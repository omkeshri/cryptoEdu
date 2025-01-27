import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export const PaymentProcessing = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
      >
        <Loader2 className="w-10 h-10 text-primary-500" />
      </motion.div>

      <h2 className="text-2xl font-bold text-white mb-4">
        Processing Payment
      </h2>
      <p className="text-white/80">
        Please wait while we process your payment...
      </p>
    </motion.div>
  );
};