import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail } from 'lucide-react';

interface PaymentConfirmationProps {
  email: string;
  planName: string;
  onContinue: () => void;
}

export const PaymentConfirmation = ({ email, planName, onContinue }: PaymentConfirmationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle className="w-10 h-10 text-green-500" />
      </motion.div>

      <h2 className="text-2xl font-bold text-white mb-4">
        Payment Successful!
      </h2>
      <p className="text-white/80 mb-6">
        Welcome to {planName}! Your journey begins now.
      </p>

      <div className="bg-white/5 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-center text-white/80 mb-4">
          <Mail className="w-5 h-5 mr-2" />
          <span>Check your inbox</span>
        </div>
        <p className="text-sm text-white/60">
          We've sent your login credentials to:
          <br />
          <span className="text-white font-medium">{email}</span>
        </p>
      </div>

      <button
        onClick={onContinue}
        className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
      >
        Continue to Dashboard
      </button>
    </motion.div>
  );
};