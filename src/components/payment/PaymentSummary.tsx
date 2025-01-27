import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard } from 'lucide-react';

interface PaymentSummaryProps {
  planName: string;
  amount: number;
  interval: string;
}

export const PaymentSummary = ({ planName, amount, interval }: PaymentSummaryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white font-medium">{planName} Plan</p>
            <p className="text-sm text-white/60">Billed {interval}</p>
          </div>
          <p className="text-xl font-semibold text-white">${amount}</p>
        </div>

        <div className="border-t border-white/10 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-white">Total</p>
            <p className="text-2xl font-bold text-white">${amount}</p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 text-white/60 text-sm">
          <Shield className="w-4 h-4" />
          <span>Secure Payment</span>
          <CreditCard className="w-4 h-4 ml-2" />
        </div>
      </div>
    </motion.div>
  );
};